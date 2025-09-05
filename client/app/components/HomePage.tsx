import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import Image from "next/image";
import CardPreview from "./CardPreview";

export default function HomePage() {
    return (
    <main className="min-h-screen z-10">
        <div className="absolute mt-15 inset-0 bg-gradient-to-b from-[#0a0a20] via-[#141432] to-[#020203]">
        <section className="relative flex items-center justify-center overflow-x-clip">
            <div className="relative z-10 container mx-auto px-4 top flex flex-col items-center justify-between gap-8 xm:flex-row">
                <div className="text-left max-m:ml-0 max-l:ml-7 l:mx-10 ll:ml-10 lll:ml-65">
                  <h1 className="text-6xl font-bold mb-5 -mt-15 max-xpp:text-4xl max-pp:text-[42px] max-p:text-[46px] max-m:text-[52px] max-xm:text-6xl max-m:mt-15 max-xm:mt-18 ">
                      <span className="text-rose-500">
                            Eternize </span>
                            cada momento do seu
                      <span className="text-rose-400 animate-pulse"> AMOR </span>
                  </h1>
                    <p className="text-xl text-white/80 mb-8
                      max-m:text-lg
                      max-p:text-lg
                      max-pp:text-[17px]
                      max-xpp:text-[15.4px]"
                      >
                      Crie um site personalizado com contador de tempo do seu relacionamento e compartilhe memórias especiais
                      com seu parceiro em um endereço único.<br/>
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
                    Criar meu LoveLink !
                  </Link>
                </div>

                {/* Right side - Preview*/}
              <div className="w-full flex flex-col items-center justify-center mt-12
                xl:mt-15
                lll:mr-30
                ll:mt-7 ll:mr-10">
                <div className="flex flex-wrap justify-center">
                    <CardPreview
                          name="Ariel e Letícia"
                          email=""
                          title="Feliz 6 Meses Amor"
                          message="Aqui um texto para que nunca se esqueça do quanto eu te amo..."
                          startDate={new Date("2024-01-01")}
                          image={null}
                        />
                </div>
              </div>
            </div>

            </section>

        <section className="relative w-full py-50 z-30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-15">
              <h2 className="text-4xl font-bold text-white mb-3">Como Fazer?</h2>
            </div>

            <div className="grid grid-cols-1 m:grid-cols-2 gap-8 w-5/7 h-120 mx-auto max-m:w-full">

              <div className="bg-[#101030] rounded-2xl shadow-lg p-5 text-center flex flex-col items-center">
                <p className="text-lg font-semibold text-white mb-5">1. Preencha os Dados</p>
                <Image 
                  src="https://i.postimg.cc/cLgjjzNj/love-link-form.png"
                  alt=""
                  width={500}
                  height={500}
                  className="mb-4 rounded-4xl"
                />
              </div>

              <div className="bg-[#101030] rounded-2xl shadow-lg p-6 text-center flex flex-col items-center">
                <p className="text-lg font-semibold text-white">2. Faça o Pagamento</p>
                <Image 
                  src="https://i.postimg.cc/28VvZRk4/love-link-payment.pngpng"
                  alt=""
                  width={450}
                  height={450}
                  className="mt-20"
                />
              </div>

              <div className="bg-[#101030] rounded-2xl shadow-lg p-6 text-center flex flex-col items-center">
                <p className="text-lg font-semibold text-white">3. Receba o seu Site <br/>+<br/>QR Code no e-mail</p>
                <Image 
                  src="https://i.postimg.cc/cLgjjzNj/love-link-form.png"
                  alt=""
                  width={300}
                  height={300}
                  className="mb-4"
                />
              </div>

              <div className="bg-[#101030] rounded-2xl shadow-lg p-6 text-center flex flex-col items-center">
                <p className="text-lg font-semibold text-white">4. Surpreenda seu amor</p>
                <Image 
                  src="https://i.postimg.cc/cLgjjzNj/love-link-form.png"
                  alt=""
                  width={300}
                  height={300}
                  className="mb-4"
                />
              </div>
            </div>
          </div>
      </section>

        <section className="relative w-full py-50 mt-100 z-30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-15">
              <h2 className="text-4xl font-bold text-white mb-3">Pergutas Frequentes</h2>
            </div>

            <div className=" w-5/7 mx-auto max-m:w-full">
                <p className="text-3xl mt-5 font-semibold text-white">1. Preencha os Dados</p>
                <p className="text-3xl mt-5 font-semibold text-white">2. Faça o Pagamento</p>
                <p className="text-3xl mt-5 font-semibold text-white">3. Receba o seu Site QR Code no e-mail</p>
                <p className="text-3xl mt-5 font-semibold text-white">4. Surpreenda seu amor</p>
            </div>
          </div>
      </section>

        </div>
    </main>
    )
}