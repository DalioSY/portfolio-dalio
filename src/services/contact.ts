import { AxiosError } from "axios";
import { api } from "@/lib/api";
import { ContactFormData } from "@/types/contact";

interface ContactResponse {
    success: boolean;
    message: string;
}

export async function sendContact(
    data: ContactFormData
): Promise<ContactResponse> {
    try {
        const response = await api.post<ContactResponse>(
            "/contact",
            data
        );

        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(
                error.response?.data?.message ??
                "Erro ao enviar mensagem."
            );
        }

        throw new Error("Erro inesperado.");
    }
}