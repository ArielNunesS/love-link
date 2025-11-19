import express from "express";
import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import Order from "../models/Order";
import Couple from "../models/Couple";
import { sendEmail } from "../services/emailService";

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
                unit_amount: 150,
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

        const updatedOrder = await Order.findOneAndUpdate(
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

    if(updatedOrder && (status === "PAID")) {
        const coupleData = await Couple.findById(updatedOrder.couple);

        if(coupleData) {
            const coupleUrl = `https://love-link-app.com.br/couple/${coupleData.slug}`


            await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/email`, {
                method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        to: coupleData.email,
                        subject: "Sua Página LoveLink!",
                        html: `
                        <html lang="pt-BR">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Sua Página LoveLink!</title>
                </head>
                <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f5f5f5;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f5f5;">
                <tr>
                    <td align="center" valign="top">
                <!-- Container principal -->
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; margin: 0px auto; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    <!-- Cabeçalho -->
                    <tr>
                        <td style="padding: 25px 20px; text-align: center;">
                            <h1 style="color: #333 !important; margin-top: 10px; font-size: 24px; font-weight: bold;">Seu LoveLink está pronto!</h1>
                        </td>
                    </tr>
                    
                    <!-- Conteúdo -->
                    <tr>
                        <td style="padding: 30px;">
                            <p style="margin: 0 0 20px 0; color: #333; line-height: 1.6; font-size: 16px;">
                                Olá, <strong>${coupleData.email.split('@')[0]}</strong>, recebemos seu pedido!
                            </p>
                            
                            <p style="margin: 0 0 20px 0; color: #333; line-height: 1.6; font-size: 16px;">
                                Aqui está o Link para sua página:
                            </p>
                            
                            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #2575fc; margin-bottom: 25px;">
                                <a href="${coupleUrl}" style="color: #2575fc; text-decoration: none; font-size: 16px; word-break: break-all;">${coupleUrl}</a>
                            </div>
                            
                            <p style="margin: 0 0 20px 0; color: #333; line-height: 1.6; font-size: 16px;">
                                Aqui está o QR Code:
                            </p>
                            
                            <div style="text-align: center; padding: 15px; background-color: #f9f9f9; border-radius: 6px;">
                                <img src="https://www.qrcoder.co.uk/api/v4/?key=MXY3NPsQZDF1UdJpjylzBOS85ErGikL9&text=${coupleUrl}" 
                                     alt="QR Code" 
                                     style="max-width: 250px; height: auto; display: block; margin: 0 auto;" />
                            </div>

                            <p style="margin: 0 0 20px 0; color: #333; line-height: 1.6; font-size: 14px;">
                                Muito obrigado por nos escolher.
                                <br/>
                                Desejo a vocês muitas felicidades, que consquistem o mundo inteiro juntos(a)!
                                <br/>
                                "O verdadeiro amor transforma dois mundos particulares em um universo compartilhado"
                                <br/>
                            </p>

                            <p style="margin: 0 0 10px 0; font-size: 14px">Caso tenha alguma dúvida, ou precisar de assistência
                            fique à vontade para me contatar pelo email lovelinkapp00@gmail.com</p>

                            <p style="margin: 0 0 20px 0; color: #333; line-height: 1.6; font-size: 12px; font-weight: bold;">
                                Com muito carinho,
                                <br/>
                                @arielnuness
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Rodapé -->
                    <tr>
                        <td style="background-color: #f1f1f1; padding: 20px; text-align: center; color: #666; font-size: 14px;">
                            <p style="margin: 0;">© 2025 - Todos os direitos reservados</p>
                        </td>
                    </tr>
                </table>
                </td>
                </tr>
                </table>
                </body>
                </html>`
                })
            });
        }
    }        

        return res.status(200).json({ received: true });
    } catch(err) {
        console.error("Error:", err);
        return res.status(500);
    }
    });

    return router;
}