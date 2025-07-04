"use client"

import React, { useState } from "react";
import Card from "../../components/Card";
import { Form, useForm } from "react-hook-form";
import { date, number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DateTime } from "luxon";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const MAX_LINES = 15;

const cardSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    title: z.string(),
    message: z.string(),
    startDate: z.date().max(new Date(), {
        message: "A data não pode ser uma data futura",
    }),
    image: z.instanceof(File, {
        message: "Por favor envie um arquivo com formato válido",
    }) .refine((image) => ACCEPTED_IMAGE_TYPES.includes(image.type), {
        message: "Por favor envie um arquivo com formato válido"
    })
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
        setValue,
        getValues,
    } = useForm<TcardSchema>({
        resolver: zodResolver(cardSchema),
    });

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const message = watch("message")
        const value = e.target.value;
        const lines = value.split('\n').length;

        if(lines >= MAX_LINES) {
            console.log("barbecue")
            e.preventDefault();
            // setValue('message', 'a'); // funcionando - reseta o texto e deixa somente o 'a'
        } else {
            console.log("burguer")
            e.target.value = getValues('message')
        }
    } 

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
            <form className="flex flex-col gap-y-5 w-170" onSubmit={handleSubmit(onSubmit)}>

                <label className="block p-0 gap-0 mt-20px">Nome:</label>
                    <div className="p-[3px] rounded-lg bg-gradient-to-r from-rose-400 to-rose-900">
                        <input 
                            type="text"
                            className="w-full p-5 bg-[#09091d] rounded-lg outline-none"
                            maxLength={15}
                            placeholder="Nome do Casal"
                            { ...register("name", {
                                required: "Por favor insira um nome",
                            })}
                        />
                    </div>

                <label className="block p-0 gap-0 mt-20px">Email:</label>
                    <div className="p-[3px] rounded-lg bg-gradient-to-r from-rose-400 to-rose-900">     
                        <input
                            type="email"
                            placeholder="seuemail@gmail.com"
                            className="w-full p-5 bg-[#09091d] rounded-lg outline-none"

                            { ...register("email", {
                                required: "É necessário inserir um email para receber o produto",
                            })}
                        />
                    </div>

                <label className="block p-0 gap-0 mt-20px">Titulo da Mensagem:</label>
                    <div className="p-[3px] rounded-lg bg-gradient-to-r from-rose-400 to-rose-900">
                        <input
                            type="text"
                            placeholder="Feliz 3 Meses"
                            className="w-full p-5 bg-[#09091d] rounded-lg outline-none"
                            maxLength={13}

                            { ...register("title", {
                                required: "Por favor atribua um título (ex: João e Maria)",
                            })}
                        />
                    </div>
                <label className="block p-0 gap-0 mt-20px">Mensagem:</label>
                    <div className="p-[3px] w-fit rounded-lg bg-gradient-to-r from-rose-400 to-rose-900">
                        <textarea 
                            placeholder="Oi meu amor, queria dizer..."
                            className="w-108 h-80 justify-start p-5 bg-[#09091d] rounded-lg outline-none whitespace-pre-wrap"
                            maxLength={680}

                            {...register("message", {
                                required: "Por favor escreva uma mensagem para seu parceiro/a",
                                onChange: handleMessageChange
                            })}
                        />
                    </div>

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