"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactFormData } from "@/types/contact";
import { sendContact } from "@/services/contact";
import { toast } from "sonner";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>();

    async function onSubmit(data: ContactFormData) {
        try {
            setLoading(true);

            await sendContact(data);

            toast.success("Mensagem enviada com sucesso!");

            reset();
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("Erro inesperado.");
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 max-w-2xl "
        >
            <div>
                <input
                    placeholder="Seu nome"
                    {...register("name", {
                        required: "Informe seu nome",
                    })}
                    className="w-full rounded-lg border p-3"
                />

                {errors.name && (
                    <p className=" absolute text-red-500 text-sm">
                        {errors.name.message}
                    </p>
                )}
            </div>

            <div>
                <input
                    type="email"
                    placeholder="Seu e-mail"
                    {...register("email", {
                        required: "Informe seu email",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Email inválido",
                        },
                    })}
                    className="w-full rounded-lg border p-3"
                />

                {errors.email && (
                    <p className=" absolute text-red-500 text-sm ">
                        {errors.email.message}
                    </p>
                )}
            </div>

            <div>
                <input
                    placeholder="Assunto"
                    {...register("subject", {
                        required: "Informe um assunto",
                    })}
                    className="w-full rounded-lg border p-3"
                />

                {errors.subject && (
                    <p className=" absolute text-red-500 text-sm">
                        {errors.subject.message}
                    </p>
                )}
            </div>

            <div>
                <textarea
                    rows={6}
                    placeholder="Mensagem"
                    {...register("message", {
                        required: "Digite sua mensagem",
                        minLength: {
                            value: 10,
                            message: "Mensagem muito curta",
                        },
                    })}
                    className="w-full rounded-lg border p-3"
                />

                {errors.message && (
                    <p className="absolute text-red-500 text-sm">
                        {errors.message.message}
                    </p>
                )}
            </div>

            <div className="flex justify-end">
                <button
                    disabled={loading}
                    className="w-fit rounded-lg bg-primary-gradient px-5 py-2 transition text-white  "
                >
                    {loading ? "Enviando..." : "Enviar mensagem"}
                </button>
            </div>
        </form>
    );
}