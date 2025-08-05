"use client"

import React, { useState } from "react";
import Card from "../components/Card";
import { Form, useForm } from "react-hook-form";
import { date, number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DateTime } from "luxon";
import Navbar from "../components/Navbar";
import "dotenv/config";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const MAX_FILE_SIZE = 3000000;
const MAX_LINES = 15;

const cardSchema = z.object({
    name: z.string().max(15, "O nome deve possuir no max. 15 digitos."),
    email: z.string().email("Insira um email válido").min(1, "O campo 'email' é obrigatório."),
    title: z.string(),
    message: z.string(),
    startDate: z.date().max(new Date(), {
        message: "A data não pode ser uma data futura",
    }),
    image: z.any().refine(
        (files) => {
            if(!files || files.length === 0) return true;
            const file = files[0];
            return ACCEPTED_IMAGE_TYPES.includes(file.type)
        }, "Somente formatos .jpg, .jpeg, .png e .webp são aceitos.")
        .refine((files) => {
            if(!files || files.length === 0) return true;
            const file = files[0];
            return file.size <= MAX_FILE_SIZE;
        }, "O tamanho da imagem é de 3 MB")
            // ACCEPTED_IMAGE_TYPES.includes(images?.[0]?.type), {
        // message: "Somente formatos .jpg, .jpeg, .png e .webp são aceitos."
});

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
    } = useForm<TcardSchema>({
        resolver: zodResolver(cardSchema),
    });

    const image = watch("image");
    const title = watch("title");
    const name = watch("name");

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        const lines = value.split('\n');

        if(lines.length >= MAX_LINES) {
            e.preventDefault();
            const limited = lines.slice(0, MAX_LINES).join("\n");
            setValue("message", limited);
            return
        }
            setValue("message", value);
    }

    console.log(errors);

    const onSubmit = async (data: TcardSchema) => {
        console.log("Dados validados para envio:", data);

        const dt = DateTime.fromJSDate(data.startDate);
        const dtFormated = dt.toISODate();

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("title", data.title);
        formData.append("message", data.message);
        formData.append("startDate", dtFormated);

        if(data.image && data.image[0]) {
            formData.append("image", data.image[0])
        }

        try {
        const backendAPIURL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"

        const response = await fetch(`${backendAPIURL}/couples/create`, {
            method: "POST",
            body: formData,
            credentials: "include"
        });

        if(response.ok) {
            console.log("form enviado com sucesso")
            const result = await response.json();
            console.log("resposta do backend", result)
            reset();
        } else {
            const errorData = await response.json()
            console.error("erro ao enviar form", response.status, errorData)
        }

    } catch(error) {
        console.error("erro de requisição", error)
    }

}

    // const onSubmit = async (data: TcardSchema) => {
    //     const dt = DateTime.fromJSDate(data.startDate);
    //     const dtFormated = new Date(dt.toLocaleString(DateTime.DATE_SHORT));

    //     setDateFormatted(dtFormated);

    //     console.log(dtFormated);
    //     console.log("submit funcionando");

    //     await new Promise((resolve) => setTimeout(resolve, 2000));
    //     reset();
    // };
    
    return (
    <>
        <main className="w-screen min-h-screen flex items-center justify-end z-20 px-5 bg-[#09091d] ">
            <Navbar/>
            <form className="grid grid-cols-2 ml-70 gap-x-40 w-200 mt-10 bg-[#09091d]" onSubmit={handleSubmit(onSubmit)}>

            <div className="col-span-0">
                <label className="block p-0 gap-y-5 text-lg font-semibold">Nome do Casal:</label>
                    <div className="p-[3px] rounded-lg mt-2 bg-gradient-to-r  from-rose-600 to-rose-800 focus-within:from-rose-400 focus-within:to-rose-700">
                        <input 
                            type="text"
                            className="w-full p-3.5 bg-[#09091d] rounded-lg outline-none"
                            placeholder="Ariel e Letícia (max. 15 dígitos)"
                            maxLength={15}
                            { ...register("name", {
                                required: "Por favor insira um nome",
                            })}

                        />
                            {name?.length > 12 && (
                            <p className="hidden in-focus-within:block text-rose-300 ml-2 text-sm mt-1">max. 15 dígitos</p>
                        )}
                    </div>

                    
                
                <label className="block p-0 mt-5 text-lg font-semibold">Seu Email:</label>
                    <div className="p-[3px] rounded-lg mt-2 bg-gradient-to-r from-rose-600 to-rose-800 focus-within:from-rose-400 focus-within:to-rose-700">     
                        <input
                            type="email"
                            placeholder="seuemail@gmail.com"
                            className="w-full p-3.5 bg-[#09091d] rounded-lg outline-none"
                            maxLength={120}
                            { ...register("email", {
                                required: "É necessário inserir um email para receber o produto",
                            })}
                        />
                    </div>

                <label className="block p-0 gap-0 mt-5 text-lg font-semibold">Titulo da Mensagem:</label>
                    <div className="p-[3px] w-fit rounded-lg mt-2 bg-gradient-to-r from-rose-600 to-rose-800 focus-within:from-rose-400 focus-within:to-rose-700">
                        <input
                            type="text"
                            placeholder="Feliz 3 Meses"
                            className="w-50 p-3.5 bg-[#09091d] rounded-lg outline-none"
                            maxLength={13}
                            { ...register("title", {
                                required: "Por favor atribua um título (ex: João e Maria)",
                            })}
                        />
                         
                        {title?.length > 8 && (
                            <p className="text-rose-300 ml-2 text-sm mt-1">max. 13 dígitos</p>
                        )}
                    </div>
                        
                    
                <label className="block p-0 gap-0 mt-5 text-lg font-semibold">Mensagem:</label>
                    <div className="p-[3px] w-fit h-fit rounded-lg mt-2 bg-gradient-to-r from-rose-600 to-rose-800 focus-within:from-rose-400 focus-within:to-rose-700">
                        <textarea 
                            placeholder="Oi meu amor, queria dizer..."
                            className="w-100 h-60 overflow-y-auto resize-none justify-start p-5 bg-[#09091d] rounded-lg outline-none whitespace-pre-wrap"
                            maxLength={700}
                            style={{ resize: "none" }}
                            {...register("message", {
                                required: "Por favor escreva uma mensagem para seu parceiro/a",
                                onChange: handleMessageChange
                            })}
                        />
                    </div>
                </div>

                <div className="col-span-1 mt-25">
                <label className="block p-0 gap-0 mt-5 text-lg font-semibold">Data de Início:</label>
                    <div className="p-[3px] w-6/9 rounded-lg mt-2 bg-gradient-to-r from-rose-600 to-rose-800 focus-within:from-rose-400 focus-within:to-rose-700">
                        <input 
                            type="date"
                            className="w-full p-3.5 bg-[#09091d] rounded-lg outline-none"
                            max={new Date().toISOString().split("T")[0]}
                        {...register("startDate", {
                            required: "Informe a data de início do relacionamento",
                            valueAsDate: true,
                        })}

                        />
                    </div>

                    <div className="p-[3px] w-fit relative rounded-lg mt-12 bg-gradient-to-r cursor-pointer from-rose-600 to-rose-900 hover:from-rose-400 hover:to-rose-600 font-bold">
                        <label className="flex items-center p-3 gap-2 text-lg cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                            </svg>
                            Enviar Foto
                        </label>
   
                        <input 
                            type="file"
                            name="img"
                            className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer bg-[#09091d] rounded-lg outline-none"
                            {...register("image", {
                                required: false,
                            })}
                        
                        />
                        {image && image.length > 0 &&(
                            <p className="text-sm text-white mt-2 ml-3">
                                Arquivo: <span className="text-rose-300">{image[0].name}</span>
                            </p>
                        )}
                    </div>
                </div>

                <div className="p-[3px] mx-auto col-span-2 w-5/8 flex rounded-lg mt-12 bg-gradient-to-r cursor-pointer from-rose-600 to-rose-900 hover:from-rose-400 hover:to-rose-600 font-bold">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="p-3 w-full h-full cursor-pointer disabled:bg-rose-300 font-semibold justify-center text-center">
                            Gerar QR Code
                    </button>
                </div>

            </form>
            <div className="md:w-1/2 md:mt-0"> 
                <Card
                    name={watch("name")}
                    email={""}
                    title={watch("title")}
                    message={watch("message")}
                    startDate={watch("startDate")}
                    image={watch("image")}
                />                                  
            </div>
        </main>
    </>

    );
}