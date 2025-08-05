import React from "react";
import Link from "next/link";
import { Heart, Calendar, Clock, Camera, Gift, Music, Mail } from "lucide-react";
import CardPreview from "./CardPreview";

export default function HomePage() {
    return (
    <main className="min-h-screen z-10">
        <div className="absolute mt-15 inset-0 bg-gradient-to-b from-[#0a0a20] via-[#141432] to-[#09091d]">
        <section className="relative flex items-center justify-center overflow-x-clip">
            <div className="relative z-10 container mx-auto px-4 top flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left">
                  <h1 className="text-6xl font-bold mb-5 mt-15 max-xpp:text-4xl max-pp:text-[42px] max-p:text-[46px]">
                      <span className="text-rose-500">
                            Eternize </span>
                            cada momento do seu
                      <span className="text-rose-400 animate-pulse"> AMOR </span>
                  </h1>
                    <p className="text-xl text-white/80 mb-8
                      max-p:text-lg
                      max-pp:text-[17px]
                      max-xpp:text-[15.4px]"
                      >
                      Crie um site personalizado com contador de tempo do seu relacionamento e compartilhe memórias especiais
                      com seu parceiro em um endereço único.<br/>
                      <span className="font-bold text-xl text-rose-400 max-xpp:text-xl max-pp:text-[21px] max-p:text-[22                                      px]">Leva menos de 5 minutos!</span>
                    </p>
                  
                  <Link href="/create" className="inline-block mx-auto rounded-full bg-rose-500 text-white font-medium
                    px-10 py-5 text-2xl shadow-lg shadow-rose-500/40 hover:bg-rose-600
                    transition-all duration-300 hover:shadow-rose-500/70
                    max-p:text-center max-p:w-9/10 max-p:items-center max-p:block max-p:m-auto max-p:text-[22px]
                    max-pp:text-[21px]
                    max-xpp:py-4 max-xpp:text-xl
                    ">
                    Criar meu LoveLink!
                  </Link>
                </div>

                {/* Right side - Preview*/}
              <div className="w-full flex flex-col items-center justify-center mt-15">
                <div className="flex flex-wrap justify-center">
                    <CardPreview
                          name="joao e maria"
                          email=""
                          title="Te Amooo"
                          message="Aqui um texto para que nunca se esqueça do quanto eu te amo"
                          startDate={new Date(11111111)}
                          image={null}
                        />

                    {/* Button */}
                    <div className="relative w-130 group rounded-xl border-container
                      max-xpp:w-90">
                    <div className="absolute mt-14 h-7 inset-0 rounded-xl bg-rose-600 animate-border-move opacity-80 blur-md
                      max-xpp:w-70 max-xpp:mx-auto max-pp:w-85 max-p:mx-auto max-p:w-90"/>
                        <Link href={"/create"} className="relative z-10 w-full bg-rose-500 text-white py-3 mt-15 
                          rounded-xl font-medium shadow-lg hover:bg-rose-600 transition-all duration-300 hover:shadow-rose-500/70 text-center block
                          max-xpp:w-3/4 max-xpp:text-lg max-xpp:h-20
                          max-pp:w-5/8 max-pp:text-xl max-pp:h-21
                          max-p:w-6/9 max-p:mx-auto max-p:text-xl">
                          Fazer meu LoveLink <br className="hidden max-p:inline"/>AGORA MESMO!
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