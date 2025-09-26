import React from "react";
import Link from "next/link";
import Image from "next/image";
import CardPreview from "./CardPreview";
import { GiLoveLetter } from "react-icons/gi";
import { IoImagesOutline } from "react-icons/io5";
import { PiClockCountdownFill } from "react-icons/pi";
import { RiQrCodeFill } from "react-icons/ri";
import { FaLink } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";

export default function HomePage() {
    return (
    <main className="min-h-screen z-10">
        <div className="absolute mt-15 inset-0 bg-gradient-to-b from-[#0d0d2b] via-[#3a001d] to-[#0d0d2b]">
        <section className="relative flex items-center justify-center overflow-x-clip">
            <div className="relative z-10 container mx-auto px-4 top flex flex-col items-center justify-between gap-8 xm:flex-row">
                <div className="text-left lll:ml-65 ll:ml-10 l:mx-10 max-l:ml-7 max-m:ml-0">
                  <h1 className="text-6xl text-white font-bold mb-5 -mt-15 max-xm:text-6xl max-xm:mt-18 max-m:text-[52px] max-m:mt-15 max-p:text-[46px] max-pp:text-[42px]max-xpp:text-4xl">
                      <span className="text-rose-600">
                            Eternize </span>
                            cada momento do seu
                      <span className="text-rose-500 animate-pulse"> AMOR </span>
                  </h1>
                    <p className="text-xl text-white/90 mb-8
                      max-m:text-lg
                      max-p:text-lg
                      max-pp:text-[17px]
                      max-xpp:text-[15.4px]"
                      >
                      Crie um site personalizado com contador de tempo do seu relacionamento e compartilhe memórias especiais
                      com seu parceiro em um <span className="text-rose-400">presente único.</span><br/>
                      <span className="font-bold text-xl text-rose-400 max-xpp:text-xl max-pp:text-[21px] max-p:text-[22px] max-m:text-2xl max-xm:text-2xl">Leva menos de 5 minutos!</span>
                    </p>
                  
                  <Link href="/create" className="inline-block mx-auto rounded-full bg-rose-700 text-white font-medium select-none
                    px-10 py-5 text-2xl shadow-lg shadow-rose-500/40 hover:bg-rose-600
                    transition-all duration-150 hover:shadow-rose-500/70
                    max-xm:text-2xl max-xm:w-9/11 max-xm:text-center max-xm:items-center max-xm:block max-xm:m-auto
                    max-m:text-2xl
                    max-p:text-[22px] max-p:w-10/10
                    max-pp:text-[21px]
                    max-xpp:py-4 max-xpp:text-xl
                    ">
                    Criar meu LoveLink
                  </Link>
                </div>

                {/* Right side - Preview*/}
              <div className="w-full flex flex-col items-center justify-center mt-12
                xl:mt-15
                lll:mr-30
                ll:mt-7 ll:mr-10">
                <div className="flex flex-wrap justify-center scale-100 shadow-rose-900/70">
                    <CardPreview
                          name="Ariel e Letícia"
                          email=""
                          title="Feliz 6 Meses Amor"
                          message="Aqui um texto para que nunca se esqueça do quanto eu te amo..."
                          startDate={new Date("2022-04-03")}
                          image={null}
                          background="rose"
                        />
                </div>
              </div>
            </div>

            </section>

        <section id="como-fazer" className="relative w-full mt-50 z-30 bg-gradient-to-b from-[#0d0d2b] via-[#2b2b57] to-[#0d0d2b] l:px-70">
            <div className="relative text-center mb-10">
              <h2 className="text-[42px] font-bold text-white mb-3 max-m:text-4xl">Como Fazer?</h2>
            </div>
          <div className="container grid xm:grid-cols-2 gap-6 mx-auto px-6
            lll:w-6/10
            l:max-lll:w-9/10
            xm:w-7/10 xm:max-l:gap-8
            m:max-xm:px-15 m:max-xm:w-7/10
            max-m:w-8/10">
              
              <div className="rounded-2xl bg-gradient-to-b from-[#2d2d6b] to-[#18183c] shadow-2xl h-100 p-5 text-center flex flex-col items-center
                ll:h-105
                l:h-105
                xm:h-105
                max-xm:mx-auto max-xm:h-98 max-xm:w-full
                max-m:w-8/10 max-m:h-95
                max-p:h-96">
                <p className="text-[26px] font-bold text-white max-xm:text-2xl"><span className="text-3xl text-rose-400">1. </span> Preencha os Dados</p>
                <Image
                  src="https://i.postimg.cc/FRWf3LR0/love-link-form.png"
                  alt=""
                  width={300}
                  height={300}
                  className="mt-5 rounded-4xl select-none"
                />
                <p className="text-sm text-white mt-5 l:max-ll:mt-10 xm:max-l:text-base xm:max-l:px-10">Coloque fotos, música e escreva uma mensagem personalizada para quem ama</p>
              </div>

              <div className="rounded-2xl bg-gradient-to-b from-[#2d2d6b] to-[#18183c] shadow-2xl h-100 p-5 text-center flex flex-col items-center
                ll:h-105
                l:h-105
                xm:max-l:h-105
                max-xm:mx-auto max-xm:h-85 max-xm:w-full
                max-m:w-8/10 max-m:h-95
                max-p:h-105
                max-pp:h-105">
                <p className="text-[26px] font-bold text-white max-xm:text-2xl"><span className="text-3xl text-rose-400 text-left">2. </span> Faça o Pagamento</p>
                <Image
                  src="https://i.postimg.cc/FHpx4TZ9/love-link-payment.png"
                  alt=""
                  width={170}
                  height={170}
                  className="mt-1 rounded-4xl xm:mt-10 select-none"
                />
                <p className="text-sm text-white mt-7 ll:mt-12.5 xm:max-l:text-base xm:max-l:px-10">Faça seu pagamento de forma totalmente segura na página de pagamento PagBank<br/>Aceitamos <span className="text-green-500"><strong>PIX ou Cartão</strong></span></p>
              </div>

              <div className="rounded-2xl bg-gradient-to-b from-[#2d2d6b] to-[#18183c] shadow-2xl h-100 p-5 text-center flex flex-col items-center
                ll:h-100
                l:h-100
                xm:h-104
                max-xm:mx-auto max-xm:h-90 max-xm:w-full
                max-m:w-8/10 max-m:h-95
                max-p:h-107
                max-pp:h-112">
                <p className="text-[26px] font-bold text-white max-xm:text-2xl"><span className="text-3xl text-rose-400">3. </span> Receba o seu acesso no Email</p>
                <Image
                  src="https://i.postimg.cc/tJ9jqSy5/love-link-email.png"
                  alt=""
                  width={200}
                  height={200}
                  className="mt-5 rounded-4xl select-none"
                />
                <p className="text-sm text-white mt-9 xm:max-l:text-base xm:max-l:px-10">Um email com o acesso à página <span className="text-rose-400">+ QR Code personalizado</span> será enviado após o pagamento ser confirmado</p>
              </div>

              <div className="rounded-2xl bg-gradient-to-b from-[#2d2d6b] to-[#18183c] shadow-2xl h-160 p-5 text-center flex flex-col items-center
                lll:h-160
                ll:h-150
                l:h-165
                xm:h-165
                max-xm:mx-auto max-xm:h-148 max-xm:w-full
                max-m:w-8/10 max-m:h-160
                max-p:h-180
                max-pp:h-185">
                <p className="text-[26px] font-bold text-white max-xm:text-2xl"><span className="text-3xl text-rose-400">4. </span> Surpreenda quem você Ama</p>
                <Image
                  src="https://i.postimg.cc/X7q3G5KV/love-link-couple-page.png"
                  alt=""
                  width={180}
                  height={180}
                  className="mt-5 rounded-4xl select-none"
                />
                <p className="text-sm text-white mt-5 xm:max-l:text-base xm:max-l:px-10">Agora é só compartilhar com seu amor e fazer deste presente um grande momento</p><p className="text-base text-rose-400 font-bold mt-4 px-3 xm:max-l:text-base xm:max-l:px-10">Imprima o QR Code para entregar pessoalmente para a pessoa que ama</p>
              </div>
          </div>
      </section>

      <section id="oque-Oferecemos" className="relative w-full mt-50 z-30 l:px-110 pb-100 bg-gradient-to-b from-[#0d0d2b] via-[#440f28] to-[#0d0d2b] m:max-xm:px-15">
            <div className="relative text-center">
              <h2 className="text-[42px] text-center font-bold text-white mb-5 max-m:text-4xl">Oque Oferecemos?</h2>
              <div className="grid grid-cols-3 gap-5 p-5 text-white text-center items-center mx-auto m:max-xm:grid-cols-2 max-m:grid-cols-1">

                <div className="flex flex-col rounded-2xl bg-gradient-to-b from-[#18183c] to-[#55122e] shadow-2xl w-fit max-w-70 h-50 mx-auto m:max-xm:max-w-90 max-m:max-w-80">
                    <div className="relative text-rose-500 mx-auto"><PiClockCountdownFill className="mt-5 w-9 h-9" /></div>
                    <p className="text-xl mt-3 justify-center px-7 font-bold">Contador de Tempo</p>
                    <span className="text-sm mt-3 px-5 text-wrap wrap-anywhere">Acompanhe cada momento especial da sua história de amor com um contador personalizado</span>
                </div>

                <div className="flex flex-col rounded-2xl bg-gradient-to-b from-[#18183c] to-[#55122e] shadow-2xl w-fit max-w-70 h-50 mx-auto m:max-xm:max-w-90 max-m:max-w-80">
                    <div className="relative text-rose-500 mx-auto"><GiLoveLetter className="mt-5 w-10 h-10" /></div>
                      <p className="text-xl mt-3 justify-center px-7 font-bold">Carta de Amor</p>
                      <span className="text-sm mt-3 px-5 text-wrap wrap-anywhere">Demonstre seu amor com uma carta digital que ficará guardada eternamente</span>
                </div>

                <div className="flex flex-col rounded-2xl bg-gradient-to-b from-[#18183c] to-[#55122e] shadow-2xl w-fit max-w-70 h-50 mx-auto m:max-xm:max-w-90 max-m:max-w-80">
                    <div className="relative text-rose-500 mx-auto"><IoImagesOutline className="mt-5 w-10 h-10" /></div>
                    <p className="text-xl mt-3 justify-center px-7 font-bold">Imagens</p>
                    <span className="text-sm mt-3 px-5 text-wrap wrap-anywhere">Guarde os momentos e memórias inesquecíveis ao lado de quem ama enviando até <strong>5 fotos!</strong></span>
                </div>

                <div className="flex flex-col rounded-2xl bg-gradient-to-b from-[#18183c] to-[#55122e] shadow-2xl w-fit max-w-70 h-50 mx-auto m:max-xm:max-w-90 max-m:max-w-80">
                    <div className="relative text-rose-500 mx-auto"><RiQrCodeFill  className="mt-5 w-10 h-10" /></div>
                    <p className="text-xl mt-3 justify-center px-7 font-bold">QR Code</p>
                    <span className="text-sm mt-3 px-5 text-wrap wrap-anywhere">Entregue amor em forma de QR Code: um presente moderno e eterno</span>
                </div>
                <div className="flex flex-col rounded-2xl bg-gradient-to-b from-[#18183c] to-[#55122e] shadow-2xl w-fit max-w-70 h-50 mx-auto m:max-xm:max-w-90 max-m:max-w-80">
                    <div className="relative text-rose-500 mx-auto"><FaLink className="mt-5 w-10 h-10" /></div>
                    <p className="text-xl mt-3 justify-center px-7 font-bold">URL Personalizada</p>
                    <span className="text-sm mt-3 px-5 text-wrap wrap-anywhere">Deixe sua história acessível em um endereço único e inesquecível</span>
                </div>
                
                <div className="flex flex-col rounded-2xl bg-gradient-to-b from-[#18183c] to-[#55122e] shadow-2xl w-fit max-w-70 h-50 mx-auto m:max-xm:max-w-90 max-m:max-w-80">
                    <div className="relative text-rose-500 mx-auto"><IoIosColorPalette className="mt-5 w-10 h-10" /></div>
                    <p className="text-xl mt-3 justify-center px-7 font-bold">Escolha de Cores</p>
                    <span className="text-sm mt-3 px-5 text-wrap wrap-anywhere">Personalize as cores e o estilo do amor de vocês</span>
                </div>
              </div>
            </div>
      </section>

        <section className="relative w-full py-50 z-30 pb-200">
          <div className="container mx-auto px-6">
            <div className="text-center mb-15">
              <h2 className="text-4xl font-bold text-white mb-3">Perguntas Frequentes</h2>
            </div>

            <div className=" w-5/7 mx-auto max-m:w-full">
                <p className="text-3xl mt-5 font-bold text-white">1. Preencha os Dados</p>
                <p className="text-3xl mt-5 font-bold text-white">2. Faça o Pagamento</p>
                <p className="text-3xl mt-5 font-bold text-white">3. Receba o seu Site QR Code no e-mail</p>
                <p className="text-3xl mt-5 font-bold text-white">4. Surpreenda seu amor</p>
            </div>
          </div>
      </section>

        </div>
    </main>
    )
}