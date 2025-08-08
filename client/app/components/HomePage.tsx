import React from "react";
import Link from "next/link";
import { Heart, Calendar, Clock, Camera, Gift, Music, Mail } from "lucide-react";
import CardPreview from "./CardPreview";

export default function HomePage() {
    return (
    <main className="min-h-screen z-10">
        <div className="absolute mt-15 inset-0 bg-gradient-to-b from-[#0a0a20] via-[#141432] to-[#09091d]">
        <section className="relative flex items-center justify-center overflow-x-clip">
            <div className="relative z-10 container xm:flex-row mx-auto px-4 top flex flex-col items-center justify-between gap-8">
                <div className="text-left max-m:ml-0 ml-7">
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
                  
                  <Link href="/create" className="inline-block mx-auto rounded-full bg-rose-700 text-white font-medium
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
              <div className="w-full flex flex-col items-center justify-center mt-20">
                <div className="flex flex-wrap justify-center">
                    <CardPreview
                          name="joão-e-maria"
                          email=""
                          title="Te Amooo"
                          message="Aqui um texto para que nunca se esqueça do quanto eu te amo"
                          startDate={new Date(11111111)}
                          image={null}
                        />

                    {/* Button */}
                    <div className="relative w-130 group rounded-xl border-container
                      max-xpp:w-90">
                    <div className="absolute mt-3 h-8 inset-0 rounded-xl bg-rose-600 animate-border-move opacity-80 blur-md
                      max-xpp:w-65 max-xpp:mx-auto max-pp:w-80 max-p:w-80 max-m:w-100 max-xm:w-110 max-xm:mx-auto"/>
                        <Link href={"/create"} className="relative z-10 w-full bg-rose-700 text-white text-lg py-3 mt-4
                          rounded-full font-medium shadow-lg hover:bg-rose-600 transition-all duration-150 hover:shadow-rose-500/70 text-center block
                          max-xm:w-9/10 max-xm:mx-auto max-xm:h-15 max-xm:text-[22px]
                          max-m:w-8/10 max-m:text-[22px] max-m:h-20
                          max-p:w-6/9 max-p:text-xl
                          max-pp:w-5/8 max-pp:text-xl max-pp:h-21
                          max-xpp:w-3/4 max-xpp:text-lg max-xpp:h-20
                          ">
                          Fazer meu LoveLink <br className="hidden max-m:inline"/>AGORA MESMO!
                        </Link>
                    </div>
                </div>
              </div>
            </div>

            </section>
        </div>
    </main>
    )
}