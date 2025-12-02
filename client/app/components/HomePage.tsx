import React from "react";
import Link from "next/link";
import Image from "next/image";
import CardPreview from "./CardPreview";
import FAQItem from "./FaqItem";
import { GiLoveLetter } from "react-icons/gi";
import { IoImagesOutline } from "react-icons/io5";
import { PiClockCountdownFill } from "react-icons/pi";
import { RiQrCodeFill } from "react-icons/ri";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import faqData from "../data/faq.json"

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
                          images={null}
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
            l:max-lll:w-full
            xm:w-7/10 xm:max-l:gap-8
            m:max-xm:px-15 m:max-xm:w-7/10
            max-m:w-9/10">
              
              <div className="rounded-2xl bg-gradient-to-b from-[#2d2d6b] to-[#18183c] shadow-2xl h-100 p-5 text-center flex flex-col items-center
                ll:h-85
                l:h-90
                xm:h-95
                max-xm:mx-auto max-xm:h-80 max-xm:w-full
                max-m:h-80
                p:max-m:w-8/10
                max-p:h-92">
                <p className="text-2xl font-bold text-white max-xm:text-2xl"><span className="text-2xl text-rose-400">1. </span> Preencha os Dados</p>
                <Image
                  src="https://i.postimg.cc/FRWf3LR0/love-link-form.png"
                  alt=""
                  width={220}
                  height={220}
                  className="mt-5 rounded-4xl select-none"
                />
                <p className="text-sm text-white mt-5 l:max-ll:mt-10 xm:max-l:text-base xm:max-l:px-10">Coloque fotos, música e escreva uma mensagem personalizada para quem ama</p>
              </div>

              <div className="rounded-2xl bg-gradient-to-b from-[#2d2d6b] to-[#18183c] shadow-2xl h-100 p-5 text-center flex flex-col items-center
                ll:h-85
                l:h-90
                xm:h-95
                max-xm:mx-auto max-xm:h-75 max-xm:w-full
                max-m:h-75
                p:max-m:w-8/10
                max-p:h-90
                max-pp:h-100">
                <p className="text-2xl font-bold text-white max-xm:text-2xl"><span className="text-2xl text-rose-400 text-left">2. </span> Faça o Pagamento</p>
                <Image
                  src="https://i.postimg.cc/FHpx4TZ9/love-link-payment.png"
                  alt=""
                  width={130}
                  height={130}
                  className="mt-1 rounded-4xl xm:mt-10 select-none"
                />
                <p className="text-sm text-white mt-7 ll:mt-8 xm:max-l:text-base xm:max-l:px-10">Faça seu pagamento de forma totalmente segura na página de pagamento PagBank<br/>Aceitamos <span className="text-green-500"><strong>PIX ou Cartão</strong></span></p>
              </div>

              <div className="rounded-2xl bg-gradient-to-b from-[#2d2d6b] to-[#18183c] shadow-2xl h-100 p-5 text-center flex flex-col items-center
                ll:h-90
                l:h-90
                xm:h-95
                max-xm:mx-auto max-xm:h-85 max-xm:w-full
                max-m:h-85
                p:max-m:w-8/10
                max-p:h-95
                max-pp:h-105">
                <p className="text-2xl font-bold text-white max-xm:text-2xl"><span className="text-2xl text-rose-400">3. </span> Receba o seu acesso no Email</p>
                <Image
                  src="https://i.postimg.cc/tJ9jqSy5/love-link-email.png"
                  alt=""
                  width={180}
                  height={180}
                  className="mt-5 rounded-4xl select-none"
                />
                <p className="text-sm text-white mt-7 xm:max-l:text-base xm:max-l:px-10">Um email com o acesso à página <span className="text-rose-400">+ QR Code personalizado</span> será enviado após o pagamento ser confirmado</p>
              </div>

              <div className="rounded-2xl bg-gradient-to-b from-[#2d2d6b] to-[#18183c] shadow-2xl h-160 p-5 text-center flex flex-col items-center
                lll:h-115
                l:h-130
                xm:h-140
                max-xm:mx-auto max-xm:h-120 max-xm:w-full
                max-m:h-130
                p:max-m:w-8/10
                max-p:h-160
                max-pp:h-160">
                <p className="text-2xl font-bold text-white max-xm:text-2xl"><span className="text-2xl text-rose-400">4. </span> Surpreenda quem você Ama</p>
                <Image
                  src="https://i.postimg.cc/X7q3G5KV/love-link-couple-page.png"
                  alt=""
                  width={130}
                  height={130}
                  className="mt-5 rounded-4xl select-none"
                />
                <p className="text-sm text-white mt-5 xm:max-l:text-base xm:max-l:px-10">Agora é só compartilhar com seu amor e fazer deste presente um grande momento</p><p className="text-base text-rose-400 font-bold mt-4 px-3 xm:max-l:text-base xm:max-l:px-10">Imprima o QR Code para entregar pessoalmente para a pessoa que ama</p>
              </div>
          </div>
      </section>

      <section id="oque-oferecemos" className="relative w-full mt-50 z-30 bg-gradient-to-b from-[#0d0d2b] via-[#440f28] to-[#0d0d2b] xl:px-110 l:px-50 xm:max-l:px-40 m:max-xm:px-15">
            <div className="relative text-center">
              <h2 className="text-[42px] text-center font-bold text-white mb-5 max-m:text-4xl">Oque Oferecemos?</h2>
              <div className="grid grid-cols-3 gap-5 p-5 text-white text-center items-center mx-auto m:max-l:grid-cols-2 max-m:grid-cols-1">

                <div className="flex flex-col rounded-2xl bg-gradient-to-b from-[#18183c] to-[#55122e] shadow-2xl w-fit max-w-70 h-50 mx-auto m:max-l:max-w-90 max-m:max-w-80">
                    <div className="relative text-rose-500 mx-auto"><PiClockCountdownFill className="mt-5 w-9 h-9" /></div>
                    <p className="text-xl mt-3 justify-center px-7 font-bold">Contador de Tempo</p>
                    <span className="text-sm mt-3 px-5 text-wrap wrap-anwhere">Acompanhe cada momento especial da sua história de amor com um contador personalizado</span>
                </div>

                <div className="flex flex-col rounded-2xl bg-gradient-to-b from-[#18183c] to-[#55122e] shadow-2xl w-fit max-w-70 h-50 mx-auto m:max-l:max-w-90 max-m:max-w-80">
                    <div className="relative text-rose-500 mx-auto"><GiLoveLetter className="mt-5 w-10 h-10" /></div>
                      <p className="text-xl mt-3 justify-center px-7 font-bold">Carta de Amor</p>
                      <span className="text-sm mt-3 px-5 text-wrap wrap-anywhere">Demonstre seu amor com uma carta digital que ficará guardada eternamente</span>
                </div>

                <div className="flex flex-col rounded-2xl bg-gradient-to-b from-[#18183c] to-[#55122e] shadow-2xl w-fit max-w-70 h-50 mx-auto m:max-l:max-w-90 max-m:max-w-80">
                    <div className="relative text-rose-500 mx-auto"><IoImagesOutline className="mt-5 w-10 h-10" /></div>
                    <p className="text-xl mt-3 justify-center px-7 font-bold">Imagens</p>
                    <span className="text-sm mt-3 px-5 text-wrap wrap-anywhere">Guarde os momentos e memórias inesquecíveis ao lado de quem ama enviando até <strong>5 fotos</strong></span>
                </div>

                <div className="flex flex-col rounded-2xl bg-gradient-to-b from-[#18183c] to-[#55122e] shadow-2xl w-fit max-w-70 h-50 mx-auto m:max-l:max-w-90 max-m:max-w-80">
                    <div className="relative text-rose-500 mx-auto"><RiQrCodeFill  className="mt-5 w-10 h-10" /></div>
                    <p className="text-xl mt-3 justify-center px-7 font-bold">QR Code</p>
                    <span className="text-sm mt-3 px-5 text-wrap wrap-anywhere">Entregue amor em forma de QR Code: um presente moderno e eterno</span>
                </div>
                <div className="flex flex-col rounded-2xl bg-gradient-to-b from-[#18183c] to-[#55122e] shadow-2xl w-fit max-w-70 h-50 mx-auto m:max-l:max-w-90 max-m:max-w-80">
                    <div className="relative text-rose-500 mx-auto"><FaLink className="mt-5 w-10 h-10" /></div>
                    <p className="text-xl mt-3 justify-center px-7 font-bold">URL Personalizada</p>
                    <span className="text-sm mt-3 px-5 text-wrap wrap-anywhere">Deixe sua história acessível em um endereço único e inesquecível</span>
                </div>
                
                <div className="flex flex-col rounded-2xl bg-gradient-to-b from-[#18183c] to-[#55122e] shadow-2xl w-fit max-w-70 h-50 mx-auto m:max-l:max-w-90 max-m:max-w-80">
                    <div className="relative text-rose-500 mx-auto"><IoIosColorPalette className="mt-5 w-10 h-10" /></div>
                    <p className="text-xl mt-3 justify-center px-7 font-bold">Escolha de Cores</p>
                    <span className="text-sm mt-3 px-5 text-wrap wrap-anywhere">Personalize as cores e o estilo do amor de vocês</span>
                </div>
              </div>
            </div>
      </section>

      <section id="exemplos" className="relative w-full mt-50 z-30 pb-100 bg-gradient-to-b from-[#0d0d2b] via-[#282863] to-[#0d0d2b] ll:px-45 m:max-ll:px-15">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-[42px] text-center font-bold text-white mb-5 max-m:text-4xl">Exemplos</h2>



        </div>
      </section>

      <section id="preços" className="relative w-full mt-50 z-30 pb-100 bg-gradient-to-b from-[#0d0d2b] via-[#382863] to-[#0d0d2b] ll:px-45 m:max-ll:px-15">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-[42px] text-center font-bold text-white mb-5 max-m:text-4xl">Preços</h2>



        </div>
      </section>


      <section id="faq" className="relative w-full mt-50 z-30 pb-50 bg-gradient-to-b from-[#0d0d2b] via-[#1d1d3a] to-[#2b2b57] ll:px-45 m:max-ll:px-15">
        <div className="container mx-auto px-6 text-center">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">Perguntas Frequentes</h2>
          </div>
          <div className="flex flex-col w-full mx-auto max-m:w-full">
            <div className="flex flex-col w-6/9 max-xm:w-8/9 max-p:w-full mx-auto justify-between">
              <div className="bg-[#0d0d2b] rounded-4xl mb-3">
                {faqData.faqItems.map((item) => (
                <FAQItem
                  key={item.id}
                  question={item.question}
                  answer={item.answer}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    <footer className="relative w-full bg-[#0d0d2b] h-70 ">
      <div className="h-[1px] shadow-lg bg-rose-400"></div>
    <div className="flex flex-row gap-50 px-100 justify-center py-10 max-xm:px-30 max-xm:gap-5 max-xm:flex-col max-m:px-20 max-pp:py-7 max-pp:px-5 max-[300px]:px-3">
      <div className="gap-7 text-white h-full">
        <div className="mb-3 pr-40 inline-flex gap-1.5 max-p:pr-5 max-xm:flex max-xm:px-0 max-xm:justify-center max-pp:mb-2">
          <Image
            src="https://i.postimg.cc/fbwy95Ww/heart-icon.png"
            alt=""
            width={45}
            height={0}
            className="w-11 max-p:w-9 -mt-1 select-none "/>
            
          <span className="text-3xl font-bold max-pp:text-xl">LoveLink</span>
            
          </div>
          <p className="text-white/80 text-sm mb-2 ll:w-8/10 max-xm:text-center mm:max-xm:w-8/10 mm:max-xm:mx-auto max-pp:text-xs">Plataforma onde você cria um site personalizado
          do seu  relacionamento e guarda memórias especiais em um presente único.
          <br/><span className="font-bold text-white/90 max-pp:text-xs"> Feito por @arielnuness</span><br/>
          </p>
            <div className="flex flex-row gap-2 mb-7 text-sm text-white/80 max-xm:justify-center max-xm:mb-5 max-pp:text-xs">
              Me siga em:
              <Link href={"https://www.linkedin.com/in/ariel-nunes-da-silva-2a1ba924b/"} className="text-white">
                <FaLinkedin className="w-5 h-5 hover:fill-rose-400 transition-all duration-150 "/>
              </Link>
              
              <Link href={"https://github.com/ArielNunesS/"} className="text-white">
                <FaGithub className="w-5 h-5 hover:fill-rose-400 transition-all duration-150"/>
              </Link>
            </div>
          <p className="text-white/80 text-sm max-xm:text-center max-pp:text-xs">© 2025 - Todos os direitos reservados.</p>
      </div>

      <div className="flex flex-col text-white h-full max-xm:text-center text-nowrap">
        <h2 className="font-bold text-2xl mb-3 max-xm:mb-1 max-pp:text-xl">Contato</h2>
        <div className="flex flex-col gap-1.5 text-white/80 text-base max-xm:gap-0 max-pp:text-sm">
          <Link className="cursor-pointer hover:text-white transition-all duration-150" href={"https://www.tiktok.com/@lovelink"}>TikTok</Link>
          <Link className="cursor-pointer hover:text-white transition-all duration-150" href={"https://www.instagram.com/lovelink"}>Instagram</Link>
          <Link className="cursor-pointer hover:text-white transition-all duration-150" href={"mailto:lovelinkapp00@gmail.com"}>Email</Link>
        </div>
      </div>

      <div className="flex flex-col text-white h-full max-xm:text-center text-nowrap">
        <h2 className="font-bold text-2xl mb-3 max-xm:mb-1 max-pp:text-xl">Legal</h2>
        <div className="flex flex-col gap-1.5 text-white/80 text-base max-xm:gap-0 max-pp:text-sm">
          <Link className="cursor-pointer hover:text-white transition-all duration-150" href={"/terms"}>Termos de Uso</Link>
          <Link className="cursor-pointer hover:text-white transition-all duration-150" href={"/policy"}>Política de Privacidade</Link>
        </div>
      </div>
    </div>
    </footer>
    </div>
  </main>
  );
};