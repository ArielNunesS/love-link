"use client"

import React, { useEffect, useState } from "react";
import { Form, useForm } from "react-hook-form";
import { date, number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DateTime } from "luxon";
import { X } from "lucide-react";
import { useModal } from "../contexts/ModalContext";
import CardPreview from "../components/CardPreview";
import Navbar from "../components/Navbar";
import Image from "next/image";
import "dotenv/config";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const MAX_FILE_SIZE = 5000000;
const MAX_LINES = 20;

const today = new Date();

const cardSchema = z.object({
    name: z.string().max(20),
    email: z.string().email("Insira um email válido").min(1, "O email é obrigatório."),
    title: z.string().max(20),
    message: z.string().max(1500),
    startDate: z.date({ invalid_type_error: "Informe uma data válida" }).min(new Date("1900-01-01"), "Informe uma data válida").max(today, {
        message: "A data não pode ser uma data futura",
    }),
    image: z.any()
    .refine((files) => files?.length > 0, "Uma imagem é obrigatória")
    .refine((files) => {
            const file = files?.[0];
            return ACCEPTED_IMAGE_TYPES.includes(file?.type)
        }, "Somente formatos .jpg, .jpeg, .png e .webp são aceitos.")
    .refine((files) => {
            const file = files?.[0];
            if(!files || files.length === 0) return true;
            return file?.size <= MAX_FILE_SIZE;
        }, "O tamanho máximo da imagem é de 5 MB"),
    background: z.enum(["rose", "red", "purple", "blackPurple"]),
});

type TcardSchema = z.input<typeof cardSchema>;

export default function CreatePage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid, dirtyFields }, 
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
            startDate: new Date(),
            image: null,
        }
    });

    const name = watch("name");
    const email = watch("email");
    const title = watch("title");
    const message = watch("message");
    const startDate = watch("startDate");
    const image = watch("image");
    const background = watch("background");

    const [ nameIsFocused, setNameIsFocused ] = useState(false);
    const [ titleIsFocused, setTitleIsFocused ] = useState(false);
    const [ messageIsFocused, setMessageIsFocused ] = useState(false);
    const [ dateIsFocused, setDateIsFocused ] = useState(false);
    const [ isHovering, setIsHovering ] = useState(false);
    const [ imagePreviewUrl, setImagePreviewUrl ] = useState<string | null>(null);
    const { isOpen, openModal, closeModal } = useModal();

    useEffect(() => {
        if(image && image.length > 0) {
            const file = image[0];
            const url = URL.createObjectURL(file);
            setImagePreviewUrl(url);

            return () => {
                URL.revokeObjectURL(url);
            };
        } else {
            setImagePreviewUrl(null);
        }
    }, [image]);

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

    const onSubmit = async (data: TcardSchema) => {

        const dt = DateTime.fromJSDate(data.startDate);
        const dtFormated = dt.toISODate();

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("title", data.title);
        formData.append("message", data.message);
        formData.append("startDate", dtFormated);
        formData.append("image", data.image[0]);
        formData.append("background", data.background);
    try {

        const backendAPIURL = "http://localhost:10000"
        // process.env.NEXT_PUBLIC_BACKEND_URL || 
        const response = await fetch(`${backendAPIURL}/couples/create`, {
            method: "POST",
            body: formData,
            credentials: "include",
        });

        if(response.ok) {
            reset();

            const paymentRes = await fetch(`${backendAPIURL}/payment`, {
                    method: "POST",
                });

            const paymentData = await paymentRes.json()
            
            if(paymentData) {
                setTimeout(() => {
                    const newTab = window.open(paymentData.checkoutUrl, "_blank");

                    if (!newTab) {
                        window.location.href = paymentData.checkoutUrl;
                }
                }, 3000);
            };

            const result = await response.json();
            const { coupleUrl } = result;
            
            if(paymentRes) {
                await fetch(`${backendAPIURL}/email`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        to: data.email,
                        subject: "Sua Página LoveLink!",
                        html: `
                        <html lang="pt-BR">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Sua Página LoveLink!</title>
                </head>
                <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f5f5f5;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f5f5;">
                <tr>
                    <td align="center" valign="top">
                <!-- Container principal -->
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; margin: 0px auto; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    <!-- Cabeçalho -->
                    <tr>
                        <td style="padding: 25px 20px; text-align: center;">
                            <h1 style="color: #333 !important; margin-top: 10px; font-size: 24px; font-weight: bold;">Seu LoveLink está pronto!</h1>
                        </td>
                    </tr>
                    
                    <!-- Conteúdo -->
                    <tr>
                        <td style="padding: 30px;">
                            <p style="margin: 0 0 20px 0; color: #333; line-height: 1.6; font-size: 16px;">
                                Olá, <strong>${data.email.split('@')[0]}</strong>, recebemos seu pedido!
                            </p>
                            
                            <p style="margin: 0 0 20px 0; color: #333; line-height: 1.6; font-size: 16px;">
                                Aqui está o Link para sua página:
                            </p>
                            
                            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #2575fc; margin-bottom: 25px;">
                                <a href="${coupleUrl}" style="color: #2575fc; text-decoration: none; font-size: 16px; word-break: break-all;">${coupleUrl}</a>
                            </div>
                            
                            <p style="margin: 0 0 20px 0; color: #333; line-height: 1.6; font-size: 16px;">
                                Aqui está o QR Code:
                            </p>
                            
                            <div style="text-align: center; padding: 15px; background-color: #f9f9f9; border-radius: 6px;">
                                <img src="https://www.qrcoder.co.uk/api/v4/?key=MXY3NPsQZDF1UdJpjylzBOS85ErGikL9&text=${coupleUrl}" 
                                     alt="QR Code" 
                                     style="max-width: 250px; height: auto; display: block; margin: 0 auto;" />
                            </div>

                            <p style="margin: 0 0 20px 0; color: #333; line-height: 1.6; font-size: 14px;">
                                Muito obrigado por nos escolher.
                                <br/>
                                Desejo a vocês muitas felicidades, que consquistem o mundo inteiro juntos(a)!
                                <br/>
                                "O verdadeiro amor transforma dois mundos particulares em um universo compartilhado"
                                <br/>
                            </p>

                            <p style="margin: 0 0 10px 0; font-size: 14px">Caso tenha alguma dúvida, ou precisar de assistência
                            fique à vontade para me contatar pelo email lovelinkapp00@gmail.com</p>

                            <p style="margin: 0 0 20px 0; color: #333; line-height: 1.6; font-size: 12px; font-weight: bold;">
                                Com muito carinho,
                                <br/>
                                @arielnuness
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Rodapé -->
                    <tr>
                        <td style="background-color: #f1f1f1; padding: 20px; text-align: center; color: #666; font-size: 14px;">
                            <p style="margin: 0;">© 2025 - Todos os direitos reservados</p>
                        </td>
                    </tr>
                </table>
                </td>
                </tr>
                </table>
                </body>
                </html>`
                    })
                })
            }

        } else {
            const errorData = await response.json()
            console.error("Error during data send", response.status, errorData)
        }
    } catch(error) {
        console.error("Requisition error", error)
    }
}
    
    return (
    <>
    <main className="w-screen min-h-screen flex xm:justify-end items-center z-20 px-5 bg-gradient-to-b from-[#0a0a20] via-[#101030] to-[#09091d]
    l:max-xl:px-20 max-xm:items-start max-xm:flex-col max-xm:px-3 max-xm:overflow-hidden">
        <Navbar/>
        <div className="absolute p-0 top-20 select-none
            xl:left-2/7
            max-xl:top-25
            ll:max-xl:left-65
            l:max-xl:top-20
            xm:max-ll:left-1/6
            xm:max-l:left-15 
            xm:max-xl:left-2/9
            max-xm:w-8/10 max-xm:px-7 max-xm:top-25 max-xm:overflow-hidden">
            <h1 className="text-5xl font-bold max-l:text-4xl max-xm:text-4xl">Quase Lá!</h1>
            <p className="text-xl font-medium mt-2 max-l:text-lg max-xm:w-full max-pp:text-base">Preencha os dados para criar seu <span className="text-rose-400">LoveLink</span> personalizado!</p>
        </div>
            
        <div className="grid grid-cols-2 mr-30 gap-x-40 w-200 z-10 mt-30
            xm:max-xl:mt-45 max-xm:flex max-xm:flex-col max-xm:gap-x-0 max-xm:w-full max-xm:mt-55"
            onSubmit={handleSubmit(onSubmit)}>
        <div className="col-span-1
            l:max-xl:w-full l:max-xl:ml-15
            xm:max-l:w-70 xm:max-l:ml-10
            m:max-xm:w-7/10 m:max-xm:mx-auto max-xm:flex max-xm:flex-col max-xm:col-span-full max-xm:w-full max-xm:px-7 max-xm:mt-5
            max-pp:mt-10">
            <label className="block p-0 text-lg font-semibold
                max-xm:flex max-xm:flex-col max-xm:w-full select-none">Nome do Casal:</label>
                <div className="p-[3px] rounded-lg mt-1 bg-gradient-to-r from-rose-600 to-rose-800 focus-within:from-rose-400 focus-within:to-rose-700">
                    <input 
                        type="text"
                        className="w-full p-3 bg-[#09091d] rounded-lg outline-none"
                        placeholder="Ariel e Letícia"
                        maxLength={20}
                        { ...register("name", {
                            required: true,
                        })}
                        onFocus={() => setNameIsFocused(true)}
                        onBlur={() => setNameIsFocused(false)}
                    />
                </div>                 
                    {nameIsFocused && name?.length === 20 &&  (
                        <p className="text-red-500 text-right text-sm px-4 mt-1 rounded-lg">máx. 20 caracteres</p>
                    )}
            <label className="block p-0 mt-3 text-lg font-semibold select-none">Seu Email:</label>
                <div className="p-[3px] rounded-lg mt-1 bg-gradient-to-r from-rose-600 to-rose-800 focus-within:from-rose-400 focus-within:to-rose-700">     
                    <input
                        type="email"
                        placeholder="email@gmail.com"
                        className="w-full p-3 bg-[#09091d] rounded-lg outline-none"
                        maxLength={120}
                        { ...register("email", {
                            required: true,
                        })}
                    />
                </div>
            <label className="block p-0 mt-3 text-lg font-semibold select-none">Titulo da Mensagem:</label>
                <div className="p-[3px] w-full rounded-lg mt-1 bg-gradient-to-r from-rose-600 to-rose-800 focus-within:from-rose-400 focus-within:to-rose-700">
                    <input
                        type="text"
                        placeholder="Feliz 5 Meses"
                        className="w-full p-3 bg-[#09091d] rounded-lg outline-none"
                        maxLength={20}
                        { ...register("title", {
                            required: true,
                        })}
                        onFocus={() => setTitleIsFocused(true)}
                        onBlur={() => setTitleIsFocused(false)}
                    />
                </div>
                {titleIsFocused && title?.length === 20 && (
                    <p className="text-red-500 text-right text-sm px-4 mt-1 rounded-lg">máx. 20 caracteres</p>
                )}

            <label className="block p-0 mt-3 text-lg font-semibold select-none">Mensagem:</label>
                <div className="p-[3px] w-fit h-fit rounded-lg mt-1 bg-gradient-to-r from-rose-600 to-rose-800 focus-within:from-rose-400 focus-within:to-rose-700
                l:max-ll:w-70 xm:max-l:w-70 max-xm:w-full">
                    <textarea 
                        placeholder="Oii meu amor, quero te dizer o quanto te amo..."
                        className="w-90 h-50 overflow-y-auto resize-none justify-start py-5 px-3 bg-[#09091d] rounded-lg outline-none whitespace-pre-wrap
                        xm:max-ll:w-full xm:max-xl:h-45 max-xm:w-full max-p:h-45"
                        maxLength={1500}
                        style={{ resize: "none" }}
                        {...register("message", {
                            required: true,
                            onChange: handleMessageChange
                        })}
                        onFocus={() => setMessageIsFocused(true)}
                        onBlur={() => setMessageIsFocused(false)}
                    />
                </div>
                {messageIsFocused && dirtyFields.message && (
                    <p className="text-red-500 max-xm:text-right ll:max-xl:ml-84 xm:max-ll:ml-54 text-sm px-4 mt-1 rounded-lg">{message?.length || 0}/1500</p>
                )}
            </div>

            <div className="mt-22
            xm:max-xl:w-full xm:col-span-1 max-xm:mt-3 max-xm:mx-auto col-span-1 max-xm:flex max-xm:flex-col max-xm:col-span-full max-xm:w-7/10">
            <div className="max-xm:mx-auto max-xm:w-6/9">
            <label className="block p-0 mt-3 text-lg font-semibold select-none">Data de Início:</label>
                <div className="p-[3px] w-5/9 rounded-lg mt-1 bg-gradient-to-r from-rose-600 to-rose-800 focus-within:from-rose-400 focus-within:to-rose-700
                xm:max-xl:w-6/9 max-xm:w-full">
                    <input 
                    type="datetime-local"
                        className={`w-full p-3 bg-[#09091d] text-sm rounded-lg outline-none ${dirtyFields.startDate ? "text-white/100" : "text-white/60"}`}
                        max={DateTime.now().startOf("minute").toFormat("yyyy-MM-dd'T'HH:mm")}
                    {...register("startDate", {
                        required: true,
                        valueAsDate: true,
                        validate: (value) => value <= new Date(),
                    })}
                    onFocus={() => setDateIsFocused(true)}
                    onBlur={() => setDateIsFocused(false)}
                    />
                </div>
                {dateIsFocused && errors.startDate && (
                    <p className="text-red-500 text-right text-sm px-2 mt-1 rounded-lg xm:text-left">Insira uma data válida</p>
                )}
            </div>

                <div className="p-[1px] w-5/9 relative rounded-lg mt-11 bg-gradient-to-r cursor-pointer font-bold
                from-rose-600 to-rose-900 hover:from-rose-400 hover:to-rose-600 shadow-md shadow-rose-500/40
                max-xl:w-6/9 max-xm:mt-7 max-xm:mx-auto">
                    <label className="flex items-center p-3 gap-2 text-lg cursor-pointer select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                        Enviar Foto
                    </label>

                    <input 
                        type="file"
                        className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer bg-[#09091d] rounded-lg outline-none"
                        {...register("image", {
                            required: true,
                        })}
                    
                    />
                    {image && image.length > 0 &&(
                        <p className="text-sm text-white mt-2 ml-3 select-none">
                            Arquivo: <span className="text-white/70">{image[0].name}</span>
                        </p>
                    )}

                </div>
                    {errors.image && (
                        <p className="text-red-500 text-left text-sm pr-32 mt-1 rounded-lg">{errors.image.message.toString()}</p>
                    )}

                <div className="mx-auto">
                    <label className="block p-0 mt-7 text-lg font-semibold select-none">Tema:</label>
                    <div className="flex gap-3 mt-2">
                        <label>
                          <input
                            type="radio"
                            value="rose"
                            {...register("background", { required: true })}
                            className="hidden"
                          />
                          <div className={`w-12 h-12 rounded-xl cursor-pointer bg-gradient-to-br from-rose-500/100 via-[#350a17] to-rose-500/100
                              ${background == "rose" ? "border-1 border-white/90" : "border-none"}`} />
                        </label>

                        <label>
                          <input
                            type="radio"
                            value="purple"
                            {...register("background", { required: true })}
                            className="hidden"
                          />
                          <div className={`w-12 h-12 rounded-xl cursor-pointer bg-gradient-to-br from-purple-700/80 via-[#270a35] to-purple-700/80
                              ${background == "purple" ? "border-1 border-white/90" : "border-none"}`} />
                        </label>

                        <label>
                          <input
                            type="radio"
                            value="red"
                            {...register("background", { required: true })}
                            className="hidden rounded-xl"
                          />
                          <div className={`w-12 h-12 rounded-xl cursor-pointer bg-gradient-to-br from-red-600/90 via-[#350a0a] to-red-600/90
                              ${background == "red" ? "border-1 border-white/90" : "border-none"}`} />
                        </label>

                        <label>
                            <input
                              type="radio"
                              value="blackPurple"
                              {...register("background", { required: true })}
                              className="hidden rounded-xl"
                            />
                            <div className={`w-12 h-12 rounded-xl cursor-pointer bg-gradient-to-br from-black via-[#412a68] to-black
                                ${background == "blackPurple" ? "border-1 border-white/90" : "border-none"}`} />
                        </label>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col items-center mx-auto col-span-2 w-full rounded-lg mt-7 max-xm:hidden">
                <div className="p-1 items-center mx-auto col-span-2 w-4/8 rounded-lg cursor-pointer font-bold l:max-xl:mx-31.5 xm:max-xl:mx-25.5
                bg-gradient-to-r from-rose-600 to-rose-900 hover:from-rose-400 hover:to-rose-600 shadow-lg shadow-rose-500/40 max-xm:hidden"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}>
                    <button
                        onClick={() => openModal()}
                        disabled={!isValid || isSubmitting}
                        type="submit"
                        className="p-3 w-full h-full text-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed font-semibold justify-center text-center select-none max-xm:hidden">
                            Criar LoveLink
                    </button>
                </div>
                <span className={`text-white/70 m-0 p-0 text-xs ${!isValid && isHovering ? "opacity-75" : "opacity-0"}`}>Preencha Todos os Dados</span>
            </div>
            
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]">
                <div className="relative rounded-lg bg-[#09091d] opacity-100 border-3 border-rose-500/60 z-[999] inset-0
                xl:top-65
                ll:left-3/10 l:left-2/10
                xm:w-135 xm:h-70 xm:top-70 xm:max-l:left-1/10 xm:fixed
                max-xm:w-19/20 max-xm:h-75 max-xm:mb-7
                max-p:w-9/10">
                    <button 
                        onClick={() => closeModal()}
                        className="absolute top-2 right-2 text-white hover:text-rose-500 transition-colors cursor-pointer">
                        <X/>
                    </button>
                <label className="block px-3 py-2 w-7/10 mx-auto mt-9 text-lg font-bold select-none max-xm:mt-10 max-p:text-[16px] max-pp:text-sm">Confirme o email para receber o QR Code</label>
                <div className="p-[3px] rounded-lg w-7/10 mx-auto mt-1 bg-gradient-to-r from-rose-600 to-rose-800 focus-within:from-rose-400 focus-within:to-rose-700 ">     
                    <input
                        type="email"
                        placeholder="email@gmail.com"
                        className="w-full p-3 bg-[#09091d] rounded-lg outline-none max-pp:text-sm"
                        maxLength={120}
                        value={email || ""}
                        { ...register("email", {
                            required: "É necessário inserir um email para receber o produto",
                        })}
                    />
                </div>
                
                <div className="p-1 items-center mx-auto col-span-2 w-4/8 rounded-lg cursor-pointer font-bold
                bg-gradient-to-r from-green-600/80 to-green-900/80 hover:from-green-500/80 hover:to-green-700/80 shadow-lg shadow-green-500/30 mt-5 max-xm:w-5/8"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}>
                    <button
                        onClick={handleSubmit(onSubmit)}
                        disabled={isSubmitting}
                        type="submit"
                        className="p-2 w-full h-full text-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed font-semibold justify-center text-center select-none max-pp:text-lg">
                            Pagar ( Pix ou Cartão )
                    </button>
                    {isSubmitting && (
                        <div className="text-xs justify-center mx-auto text-white/90">Indo Para Pagamento..</div>
                    )}
                </div>
                        
                </div>
                </div>
            )}
            
        </div>
        <div className="mr-40 z-10 l:w-1/4 xl:mt-14 ll:max-xl:mt-30 xm:max-xl:w-1/6 xm:max-ll:mt-35 xm:max-l:mr-50 l:max-xl:mr-20 max-xm:mx-auto max-xm:mt-15 m:max-xm:mt-50 max-m:mt-50"> 
        <span className={`absolute z-10 text-white text-sm font-normal xl:ml-4 ll:ml-7 xm:max-ll:ml-7 xm:max-ll:-mt-10 max-xm:-mt-30 m:max-xm:ml-47 pp:max-xm:text-2xl max-xm:text-lg max-xm:font-bold max-m:ml-26 max-p:ml-23 max-pp:ml-26 max-xpp:ml-22 pointer-events-none select-none
            ${isOpen ? "hidden" : "opacity-100"}`}>Como vai ficar</span>
        <span className={`absolute z-10 text-white/90 text-xs max-p:text-[8px] font-normal mt-52 -ml-12 text-center xm:max-ll:mt-42 max-xm:mt-42 m:max-xm:ml-8 max-p:-ml-4 max-pp:-ml-2 pointer-events-none select-none
            ${isOpen ? "hidden" : "opacity-100"}`}>Clique<br/>na carta</span>

            <Image
                src="https://i.postimg.cc/3RmxkV42/rose-arrow.png"
                width={120}
                height={120}
                alt=""
                className={`absolute z-10 rotate-12 xm:max-ll:ml-17 w-auto h-auto ll:-mt-10 ll:ml-16 xm:max-ll:-mt-20 max-xm:-mt-20 m:max-xm:ml-37 max-m:ml-16 pointer-events-none select-none
                    ${isOpen ? "hidden" : "opacity-100"}`}
            />
            <Image
                src="https://i.postimg.cc/q7rJwH17/icons8-click-66.png"
                alt=""
                width={25}
                height={25}
                className={`absolute z-10 mt-45 -ml-8 rotate-90 xm:max-ll:mt-35 m:max-xm:mt-35 m:max-xm:ml-12 max-m:mt-35 max-p:-ml-2 max-pp:-ml-0 pointer-events-none select-none
                    ${isOpen ? "hidden" : "opacity-100"}`}
            />
        


        <div className="m:max-xm:ml-20 select-none">
            <CardPreview
                name={name}
                email={""}
                title={title}
                message={message}
                startDate={startDate}
                image={imagePreviewUrl}
                background={background || "rose"}
            />
        </div>

        <div className="flex p-1 mx-auto w-full rounded-lg mt-12 cursor-pointer font-bold m:max-xm:w-130 max-p:w-9/10
            bg-gradient-to-r from-rose-600 to-rose-900 hover:from-rose-400 hover:to-rose-600 shadow-lg shadow-rose-500/40 xm:hidden">
                <button
                    onClick={() => openModal()}
                    disabled={!isValid || isSubmitting}
                    type="submit"
                    className="block p-3 w-full h-full text-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed font-semibold justify-center text-center select-none xm:hidden">
                        Criar LoveLink
                </button>
        </div>
        </div>
        <div className="py-5"/>
    </main>
    </>

    );
}