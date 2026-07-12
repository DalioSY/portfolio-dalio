import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

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

            subject: `Contato Portfolio - ${subject}`,

            html: `
        <h2>Novo contato</h2>

        <p><strong>Nome:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Assunto:</strong> ${subject}</p>

        <p><strong>Mensagem:</strong></p>

        <p>${message}</p>
        `,
        });

        return NextResponse.json({
            success: true,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
            },
            {
                status: 500,
            }
        );
    }
}