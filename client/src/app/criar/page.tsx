"use client"

import React from "react";
import { useState } from "react";
import Card from "../../components/Card";
import { FieldValues, Form, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const cardSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    title: z.string(),
    message: z.string(),
    date: z.date().refine(
        date => date.getFullYear() >= 1900 && date.getFullYear() <= 2100, {
        message: "O ano deve estar entre 1900 e 2100",
    }).transform((date) => date.getFullYear()),
    image: z.instanceof(File)
})

type MySchemaIn = z.input<typeof cardSchema>;
type MySchemaOut = z.output<typeof cardSchema>;

type cardSchema = z.infer<typeof cardSchema>;

export default function CreatePage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }, 
        reset,
        watch,
    } = useForm<cardSchema>({
        resolver: zodResolver(cardSchema),
    });

    const onSubmit = async (data: cardSchema) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        reset();
    }
    
    return (
    <>
        <main className="min-h-screen flex items-center justify-end bg-[#09091d] px-4">
             <form className="flex flex-col gap-y-5" onSubmit={handleSubmit(onSubmit)}>
                <input 
                    { ...register("name", {
                        required: "Por favor insira um nome",
                    })}
                    type="name"
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
                    type="title"
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
                    type="image"
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
                years={watch("date")}
                months={7}
                days={15}
                hours={3}
                minutes={24}
                seconds={12}
                photos={[]} />
        </main>
    </>
    );
}