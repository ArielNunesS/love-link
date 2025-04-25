import { Resend } from "resend";

const resend = new Resend("");

resend.emails.send({
    from: "",
    to: "",
    subject: "Hello World",
    html: "<p>Test</p>"
});