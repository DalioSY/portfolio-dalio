import { ContactFormData } from "@/types/contact";
import nodemailer from "nodemailer";

export async function sendEmail(data: ContactFormData) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: process.env.EMAIL_USER,

        to: process.env.EMAIL_USER,

        subject: `Contato Portfolio - ${data.subject}`,

        html: `
        <h2>Novo contato</h2>

        <p><strong>Nome:</strong> ${data.name}</p>

        <p><strong>Email:</strong> ${data.email}</p>

        <p><strong>Assunto:</strong> ${data.subject}</p>

        <p><strong>Mensagem:</strong></p>

        <p>${data.message}</p>
        `,
    });
}