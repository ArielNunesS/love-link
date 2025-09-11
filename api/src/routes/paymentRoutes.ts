import express from "express";
import { Router } from "express";

export default function paymentRoutes() {
    const router = Router();

    router.post("/", async(req,res) => {
    try {
        const body = {
        reference_id: "001",
        customer_modifiable: true,
        items: [
            {
                reference_id: "love-link-001",
                name: "Love Link - Página Personalizada",
                description: "Uma página única para presentear seu amor, com um QR Code exclusivo!",
                quantity: 1,
                unit_amount: 1999,
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
                        value: "10"
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

        soft_descriptor: "Página + QR Code",
        redirect_url: "https://love-link-app.com.br/success/",
        return_url: "https://love-link-app.com.br/",
        notification_urls: [ `${process.env.NEXT_PUBLIC_BACKEND_URL}/payment/webhook?secret=${process.env.PAGBANK_WEBHOOK_SECRET}` ],
        payment_notification_urls: [ `${process.env.NEXT_PUBLIC_BACKEND_URL}/payment/webhook?secret=${process.env.PAGBANK_WEBHOOK_SECRET}` ]
    }

    const response = await fetch("https://sandbox.api.pagseguro.com/checkouts", {
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

    router.get("/:checkoutId", async(req, res) => {

    const {checkoutId} = req.params;

    const response = await fetch(`https://sandbox.api.pagseguro.com/checkouts/${checkoutId}`, {
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

        if(data.status === "INACTIVE") {
            return res.status(200).json(data);
        }

        return res.status(200).json(data);
    });

    router.post("/webhook", async(req, res) => {
        const secret = req.query.secret;

        if(secret !== process.env.PAGBANK_WEBHOOK_SECRET) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const event = req.body;

        console.log("Pagbank Notification", event)
        res.sendStatus(200)
    });

    return router;
}