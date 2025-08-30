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
                unit_amount: 1999
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
        soft_descriptor: "Página + QR Code",
        redirect_url: "https://love-link-app.com.br/success/qrcode",
        return_url: "https://love-link-app.com.br/",
        notification_urls: [
            "https://love-link-app.com.br"
        ]
    }

    const response = await fetch("https://sandbox.api.pagseguro.com/checkouts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${process.env.PAGBANK_TOKEN}`,
        },
        body: JSON.stringify(body),
    });

    const data = await response.json();
    const checkoutUrl = data.links[1].href;

    // const checkoutRedirect = await fetch(checkoutUrl, {
    // });

    if(!response.ok) return res.status(response.status).json(data);

    res.status(201).json(data);
    res.status(201).json(data.links[1].href);

    } catch(error) {
        res.status(500).json({ error: "Error during checkout creation"});
    }
})

    return router;
}