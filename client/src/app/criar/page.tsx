"use client"

import React, { useState } from "react";
import Card from "../../components/Card";
import { Form, useForm } from "react-hook-form";
import { date, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DateTime } from "luxon";

const cardSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    title: z.string(),
    message: z.string(),
    date: z.date(),
    image: z.any().refine((fileList) => fileList instanceof FileList && fileList.length === 1, {
        message: "Envie uma imagem",
    })
})

type TcardSchema = z.input<typeof cardSchema>;

export default function CreatePage() {
    const [dateFormatted, setDateFormatted ] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }, 
        reset,
        watch,
    } = useForm<TcardSchema>({
        resolver: zodResolver(cardSchema),
    });

    console.log(errors);

    const onSubmit = async (data: TcardSchema) => {
        const dt = DateTime.fromJSDate(data.date);
        const dtFormated = dt.toLocaleString(DateTime.DATE_SHORT);
        setDateFormatted(dtFormated);

        console.log(dtFormated);
        console.log("submit funcionando");

        await new Promise((resolve) => setTimeout(resolve, 2000));
        reset();
    };
    
    return (
    <>
        <main className="min-h-screen flex items-center justify-end bg-[#09091d] px-4">
            <form className="flex flex-col gap-y-5" onSubmit={handleSubmit(onSubmit)}>
                <input 
                    { ...register("name", {
                        required: "Por favor insira um nome",
                    })}
                    type="text"
                    placeholder="Nome do Casal"
                    className="p-5"
                    maxLength={10}
                />
                <input
                    { ...register("email", {
                        required: "É necessário inserir um email para receber o produto",
                    })}
                    type="email"
                    placeholder="Email para receber o site"
                    className="bg-gray-500"
                />
                <input
                    { ...register("title", {
                        required: "Por favor atribua um título (ex: João e Maria)",
                        maxLength: 25,
                    })}
                    type="text"
                    placeholder="Titulo da Mensagem"
                />
                <input 
                    {...register("message", {
                        required: "Por favor escreva uma mensagem para seu parceiro/a",
                        maxLength: 680
                    })}
                    type="text"
                    placeholder="Mensagem"
                />
                <input 
                {...register("date", {
                    required: "Informe a data de início do relacionamento",
                    valueAsDate: true,
                })}
                    type="date"
                    placeholder="Data de Início"
                />
                <input 
                {...register("image", {
                    required: false,
                })}
                    type="file"
                    placeholder="Fotos"
                    className="custom-file-label"
                />
                <button
                    disabled={isSubmitting}
                    type="submit"
                    className="cursor-pointer ml-10 mt-10 disabled:bg-gray-400">Gerar QR Code
                </button>
            </form>

             <Card
                name={watch("name")}
                title={watch("title")}
                message={watch("message")}
                years={99999}
                months={99999}
                days={99999}
                image={[]} />
        </main>
    </>
    );
}