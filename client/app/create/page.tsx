"use client"

import React, { useState, useEffect } from "react";
import { Form, useForm } from "react-hook-form";
import { date, number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DateTime } from "luxon";
import CardPreview from "../components/CardPreview";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import "dotenv/config";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const MAX_FILE_SIZE = 3000000;
const MAX_LINES = 20;

const today = new Date();
today.setHours(0, 0, 0, 0);

const cardSchema = z.object({
    name: z.string().max(15),
    email: z.string().email("Insira um email válido").min(1, "O campo 'email' é obrigatório."),
    title: z.string(),
    message: z.string(),
    startDate: z.date().max(today, {
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
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }, 
        reset,
        watch,
        setValue,
    } = useForm<TcardSchema>({
        resolver: zodResolver(cardSchema),
        shouldUnregister: true,
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            title: "",
            message: "",
            image: null,
        }
    });

    const name = watch("name");
    const title = watch("title");
    const message = watch("message");
    const startDate = watch("startDate");
    const image = watch("image");

    const [ nameIsFocused, setNameIsFocused ] = useState(false);
    const [ titleIsFocused, setTitleIsFocused ] = useState(false); 
    const [ messageIsFocused, setMessageIsFocused ] = useState(false);
    const [ dateIsFocused, setDateIsFocused ] = useState(false);

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
    
    return (
    <>
    <main className="w-screen min-h-screen flex max-xm:flex-col items-center xm:justify-end z-20 px-5 bg-gradient-to-b from-[#0a0a20] via-[#101030] to-[#09091d]
    max-xm:items-start
    max-xm:px-3 max-xm:overflow-hidden">
        <AnimatedBackground/>
        <Navbar/>
        <div className="absolute p-0 xm:left-1/3 top-20
            max-xm:w-8/10 max-xm:px-7 max-xm:top-25 max-xm:overflow-hidden">
            <h1 className="text-4xl font-bold max-xm:text-3xl">Quase Lá!</h1>
            <p className="text-lg font-medium mt-2 max-xm:text-lg max-xm:w-full">Preencha os dados para criar seu <span className="text-rose-400">LoveLink</span> personalizado!</p>
        </div>
        <div className="grid grid-cols-2 mr-30 gap-x-40 w-200 z-10 mt-30
            max-xm:flex max-xm:flex-col
            max-xm:gap-x-0 max-xm:w-full max-xm:mt-55"
            onSubmit={handleSubmit(onSubmit)}>
        <div className="col-span-1 max-xm:flex max-xm:flex-col max-xm:col-span-full max-xm:w-full max-xm:px-7 max-xm:mt-5">
            <label className="block p-0 text-lg font-semibold
                max-xm:flex max-xm:flex-col max-xm:w-full">Nome do Casal:</label>
                <div className="p-[3px] rounded-lg mt-2 bg-gradient-to-r from-rose-600 to-rose-800 focus-within:from-rose-400 focus-within:to-rose-700">
                    <input 
                        type="text"
                        className="w-full p-3.5 bg-[#09091d] rounded-lg outline-none"
                        placeholder="Ariel e Letícia"
                        maxLength={20}
                        { ...register("name", {
                            required: "Por favor insira um nome",
                        })}
                        onFocus={() => setNameIsFocused(true)}
                        onBlur={() => setNameIsFocused(false)}
                    />
                </div>                 
                    {nameIsFocused && name?.length === 20 &&  (
                        <p className="text-red-500 text-right text-sm px-4 mt-1 rounded-lg">máx. 20 caracteres</p>
                    )}
            <label className="block p-0 mt-3 text-lg font-semibold">Seu Email:</label>
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
                
            <div className="max-xm:mt-3 ">
            <label className="block p-0 mt-3 text-lg font-semibold">Titulo da Mensagem:</label>
                <div className="p-[3px] w-full rounded-lg mt-2 bg-gradient-to-r from-rose-600 to-rose-800 focus-within:from-rose-400 focus-within:to-rose-700
                    max-m:w-full">
                    <input
                        type="text"
                        placeholder="Feliz 3 Meses"
                        className="w-full p-3.5 bg-[#09091d] rounded-lg outline-none"
                        maxLength={20}
                        { ...register("title", {
                            required: "Por favor atribua um título (ex: João e Maria)",
                        })}
                        onFocus={() => setTitleIsFocused(true)}
                        onBlur={() => setTitleIsFocused(false)}
                    />
                </div>
                    {titleIsFocused && title?.length === 20 && (
                            <p className="text-red-500 text-right text-sm px-4 mt-1 rounded-lg">máx. 20 caracteres</p>
                        )}
            </div>

            <label className="block p-0 mt-3 text-lg font-semibold">Mensagem:</label>
                <div className="p-[3px] w-fit h-fit rounded-lg mt-2 bg-gradient-to-r from-rose-600 to-rose-800 focus-within:from-rose-400 focus-within:to-rose-700
                max-xm:w-full">
                    <textarea 
                        placeholder="Oii meu amor, queria dizer o quanto te amo..."
                        className="w-100 h-50 overflow-y-auto resize-none justify-start p-5 bg-[#09091d] rounded-lg outline-none whitespace-pre-wrap
                        max-xm:w-full max-p:h-45"
                        maxLength={800}
                        style={{ resize: "none" }}
                        {...register("message", {
                            required: "Por favor escreva uma mensagem para seu parceiro/a",
                            onChange: handleMessageChange
                        })}
                        onFocus={() => setMessageIsFocused(true)}
                        onBlur={() => setMessageIsFocused(false)}
                    />
                </div>
                {messageIsFocused && (
                    <p className="text-red-500 text-right text-sm px-4 mt-1 rounded-lg">{message?.length || 0}/800</p>
                )}
            </div>

            <div className="xm:col-span-1 mt-25 max-xm:mt-3 max-xm:mx-auto col-span-1 max-xm:flex max-xm:flex-col max-xm:col-span-full max-xm:w-7/10">
            <div className="max-xm:mx-auto max-xm:w-6/9">
            <label className="block p-0 mt-3 text-lg font-semibold ">Data de Início:</label>
                <div className="p-[3px] w-5/9 rounded-lg mt-2 bg-gradient-to-r from-rose-600 to-rose-800 focus-within:from-rose-400 focus-within:to-rose-700
                max-xm:w-full">
                    <input 
                        type="date"
                        className="w-full p-3.5 bg-[#09091d] rounded-lg outline-none"
                        max={new Date().toISOString().split("T")[0]}
                    {...register("startDate", {
                        required: "Informe a data de início do relacionamento",
                        valueAsDate: true,
                    })}
                    onFocus={() => setDateIsFocused(true)}
                    onBlur={() => setDateIsFocused(false)}
                    />
                </div>
                {dateIsFocused && errors.startDate && (
                    <p className="text-red-500 text-right text-sm px-4 mt-1 rounded-lg">Informe uma data válida.</p>
                )}
            </div>

                <div className="p-[3px] w-5/9 relative rounded-lg mt-12 bg-gradient-to-r cursor-pointer font-bold
                from-rose-600 to-rose-900 hover:from-rose-400 hover:to-rose-600 shadow-md shadow-rose-500/40
                max-xm:mt-7 max-xm:mx-auto max-xm:w-6/9">
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
            
            <div className="flex p-1 mx-auto col-span-2 w-5/8 rounded-lg mt-12 cursor-pointer font-bold max-xm:hidden
            bg-gradient-to-r from-rose-600 to-rose-900 hover:from-rose-400 hover:to-rose-600 shadow-lg shadow-rose-500/40 ">
                <button
                    onClick={handleSubmit(onSubmit)}
                    disabled={isSubmitting}
                    type="submit"
                    className="p-3 w-full h-full text-xl cursor-pointer disabled:bg-rose-300 font-semibold justify-center text-center">
                        Gerar QR Code
                </button>
            </div>
        </div>

        <div className="xm:w-1/4 xm:mt-0 mr-40 z-10 max-xm:mx-auto max-m:mt-12 max-xm:mt-15"> 
            <CardPreview
                name={name}
                email={""}
                title={title}
                message={message}
                startDate={startDate}
                image={image}
            />
        </div>

        <div className="flex p-1 mx-auto w-9/10 rounded-lg mt-12 cursor-pointer font-bold xm:hidden p:max-m:w-7/9 m:max-xm:w-5/9
            bg-gradient-to-r from-rose-600 to-rose-900 hover:from-rose-400 hover:to-rose-600 shadow-lg shadow-rose-500/40">
                <button
                    onClick={handleSubmit(onSubmit)}
                    disabled={isSubmitting}
                    type="submit"
                    className="p-3 w-full h-full text-xl cursor-pointer disabled:bg-rose-400 font-semibold justify-center text-center">
                        Gerar QR Code
                </button>
        </div>
    </main>
    </>

    );
}