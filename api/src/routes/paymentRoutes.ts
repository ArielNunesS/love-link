import express from "express";
import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import Order from "../models/Order";

export default function paymentRoutes() {
    const router = Router();

    router.post("/", async(req,res) => {
        const referenceId = uuidv4();

    try {
        const { coupleId } = req.body;

        if(!coupleId) {
            return res.status(400).json({ error: "Couple ID is required" });
        };

        await Order.create({
            reference_id: referenceId,
            couple: coupleId,
            status: "WAITING",
            createdAt: new Date(),
        });

        const body = {
        reference_id: referenceId,
        customer_modifiable: true,
        items: [
            {
                reference_id: "love-link-001",
                name: "Love Link - Página Personalizada",
                description: "Uma página única para presentear seu amor, com um QR Code exclusivo!",
                quantity: 1,
                unit_amount: 1,
                image_url: "https://i.postimg.cc/fbwy95Ww/heart-icon.png"
            }
        ],
        payment_methods: [
            { type: "PIX" },
            { type: "CREDIT_CARD" },
            { type: "DEBIT_CARD" }
        ],
        payment_methods_configs: [
            {
                type: "CREDIT_CARD",
                config_options: [
                    {
                        option: "INSTALLMENTS_LIMIT",
                        value: "3"
                    }
                ]
            }
        ],
        shipping: {
            type: "FREE",
            address_modifiable: false,
            address: {
                street: "Rua",
                number: "0",
                locality: "Bairro",
                city: "Cidade",
                region_code: "SC",
                country: "BRA",
                postal_code: "00000000"
            }
        },

        soft_descriptor: "Página LoveLink",
        redirect_url: "https://love-link-app.com.br/success/",
        return_url: "https://love-link-app.com.br/",
        notification_urls: [ `${process.env.NEXT_PUBLIC_BACKEND_URL}/payment/webhook?secret=${process.env.PAGBANK_WEBHOOK_SECRET}` ],
        payment_notification_urls: [ `${process.env.NEXT_PUBLIC_BACKEND_URL}/payment/webhook?secret=${process.env.PAGBANK_WEBHOOK_SECRET}` ]
    }

    const response = await fetch("https://api.pagseguro.com/checkouts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.PAGBANK_TOKEN}`,
        },
        body: JSON.stringify(body),
    });

    const data = await response.json();
    
    if(!response.ok) {
        return res.status(response.status).json(data);
    }

    return res.status(200).json({ checkoutUrl: data.links[1].href })

    } catch(error) {
        res.status(500).json({ error: "Error during checkout creation"});
    }
});

    router.get("/orders/all", async(req, res) => {
        const orders = await Order.find().populate("couple");
        res.json(orders);
    });

    router.get("/:orderId", async(req, res) => {

    const { orderId } = req.params;

    const response = await fetch(`https://api.pagseguro.com/orders/${orderId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.PAGBANK_TOKEN}`,
        },
    });

        const data = await response.json();

        if(!response.ok) {
            return res.status(response.status).json(data);
        }

        if(data.status === "PAID") {
            console.log("Order Paid");
            return res.status(200).json(data);
        }

        return res.status(200).json(data);
    });

    router.post("/webhook", async(req, res) => {

    try {
        const secret = req.query.secret;

        if(secret !== process.env.PAGBANK_WEBHOOK_SECRET) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const event = req.body;
        console.log("Pagbank Notification Received", event)

        const referenceId = event.reference_id;
        const amount = event.charges?.[0]?.amount?.value || 0;
        const status = event.charges?.[0]?.status || "Unknown";
        const paymentMethod = event.charges?.[0]?.payment_method?.type || "Unknown";

        await Order.findOneAndUpdate(
            { reference_id: referenceId },
            {
                reference_id: referenceId,
                status,
                amount,
                paymentMethod,
                updatedAt: new Date(),
            },
            { upsert: true, new: true}
        );

        return res.status(200).json({ received: true });
    } catch(err) {
        console.error("Error:", err);
        return res.status(500);
    }
    });

    return router;
}