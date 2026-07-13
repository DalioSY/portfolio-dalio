import { sendEmail } from "@/server/email";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        await sendEmail(body);

        return NextResponse.json({
            success: true,
            message: "Mensagem enviada com sucesso.",
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                success: false,
                message: "Erro ao enviar o e-mail.",
            },
            {
                status: 500,
            }
        );
    }
}