import { Resend } from "resend";
import Couple from "../models/Couple";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(req: any, res: any) {
    const { to, subject, html } = req.body;

    if(!to || !subject || !html) {
        return res.status(400).json({ error: "Missing required fields "});
    }

    try{
        const { data, error } = await resend.emails.send({
            from: "email@love-link-app.com.br",
            to,
            subject,
            html
        });

        if(error) {
            return res.status(500).json({ error });
        }

            return res.status(200).json({ message: "Email sent", data});
        } catch(err) {
            return res.status(500).json({ error: "Unexpected error " });
        }
};