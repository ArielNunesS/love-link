"use client"

import React, { useState } from "react";
import Card from "../../components/Card";
import { Form, useForm } from "react-hook-form";
import { date, number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DateTime } from "luxon";

const MAX_FILE_SIZE = 2000000
const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
]

const cardSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    title: z.string(),
    message: z.string(),
    startDate: z.date().max(new Date(), {
        message: "A data não pode ser uma data futura",
    }),
    image: z.any().refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
        message: "Somente arquivos .jpg, .jpeg, .png & .webp são aceitos",
    }).refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
        message: "A imagem deve conter no máximo 2 MB",
    }).optional()
})

type TcardSchema = z.input<typeof cardSchema>;

export default function CreatePage() {
    const [dateFormatted, setDateFormatted ] = useState<Date | null>(null)

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
        const dt = DateTime.fromJSDate(data.startDate);
        const dtFormated = new Date(dt.toLocaleString(DateTime.DATE_SHORT));

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
                    type="text"
                    placeholder="Nome do Casal"
                    className="p-5"
                    maxLength={10}

                    { ...register("name", {
                        required: "Por favor insira um nome",
                    })}
                />
                <input
                    type="email"
                    placeholder="Email para receber o site"
                    className="bg-gray-500"

                    { ...register("email", {
                        required: "É necessário inserir um email para receber o produto",
                    })}
                />
                <input
                    type="text"
                    placeholder="Titulo da Mensagem"
                    maxLength={13}

                    { ...register("title", {
                        required: "Por favor atribua um título (ex: João e Maria)",
                    })}
                />
                <input 
                    type="text"
                    placeholder="Mensagem"

                    {...register("message", {
                        required: "Por favor escreva uma mensagem para seu parceiro/a",
                        maxLength: 680
                    })}
                />
                <input 
                    type="date"
                    placeholder="Data de Início"
                    max={new Date().toISOString().split("T")[0]}

                {...register("startDate", {
                    required: "Informe a data de início do relacionamento",
                    valueAsDate: true,
                })}

                />
                <input 
                    type="file"
                    placeholder="Fotos"
                    className="custom-file-label"

                {...register("image", {
                    required: false,
                })}

                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-pointer ml-10 mt-10 disabled:bg-gray-400">Gerar QR Code
                </button>
            </form>

             <Card
                name={watch("name")}
                title={watch("title")}
                message={watch("message")}
                startDate={watch("startDate")}
                // years={dateFormatted}
                // months={dateFormatted}
                // days={dateFormatted}
                image={[]} />
        </main>
    </>
    );
}