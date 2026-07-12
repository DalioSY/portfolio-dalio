"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactFormData } from "@/types/contact";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>();

    async function onSubmit(data: ContactFormData) {
        setLoading(true);

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.success) {
            alert("Mensagem enviada com sucesso!");
            reset();
        } else {
            alert("Erro ao enviar.");
        }
        setLoading(false);
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
                    <p className="text-red-500 text-sm mt-1">
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
                    <p className="text-red-500 text-sm mt-1">
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
                    <p className="text-red-500 text-sm mt-1">
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
                    <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                    </p>
                )}
            </div>

            <div className="flex justify-end">
                <button
                    disabled={loading}
                    className="w-fit rounded-lg bg-primary-gradient px-5 py-2 transition  "
                >
                    {loading ? "Enviando..." : "Enviar mensagem"}
                </button>
            </div>
        </form>
    );
}