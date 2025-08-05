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
                  <h1 className="text-6xl font-bold mb-5 mt-15 max-xpp:text-4xl max-pp:text-5xl">
                      <span className="text-rose-500">
                            Eternize </span>
                            cada momento do seu
                      <span className="text-rose-400"> AMOR </span>
                  </h1>
                    <p className="text-xl text-white/80 mb-8
                      max-xpp:text-[15.4px]
                      max-pp:text-lg">
                      
                      Crie um site personalizado com contador de tempo do seu relacionamento e compartilhe memórias especiais
                      com seu parceiro em um endereço único.<br/>
                      <span className="font-bold text-xl text-rose-400 max-xpp:text-xl max-pp:text-[22px]">Leva menos de 5 minutos!</span>
                    </p>
                  
                  <Link href="/create" className="inline-block mx-auto rounded-full bg-rose-500 text-white font-medium
                    px-10 py-5 text-2xl shadow-lg shadow-rose-500/40 hover:bg-rose-600
                    transition-all duration-300 hover:shadow-rose-500/70
                    max-xpp:text-center max-xpp:m-auto max-xpp:items-center max-xpp:block max-xpp:py-4 max-xpp:w-9/10 max-xpp:text-xl
                    max-pp:text-center max-pp:m-auto max-pp:items-center max-pp:block max-pp:text-[22px]">
                    Criar meu LoveLink!
                  </Link>
                </div>

                {/* Right side - Preview*/}
              <div className="w-full flex flex-col items-center justify-center mt-15">
                <div className="flex flex-wrap justify-center">
                    <CardPreview
                          name="joao e maria"
                          email=""
                          title="joao e maria"
                          message="klaskdals"
                          startDate={new Date(11111111)}
                          image={null}
                        />

                    {/* Button */}
                    <div className="relative w-130 group rounded-xl border-container
                      max-xpp:w-90">
                    <div className="absolute mt-14 h-7 inset-0 rounded-xl bg-rose-600 animate-border-move opacity-80 blur-md
                      max-xpp:w-70 max-xpp:mx-auto"/>
                        <Link href={"/create"} className="relative z-10 w-full bg-rose-500 text-white py-3 mt-15 
                          rounded-xl font-medium shadow-lg hover:bg-rose-600 transition-all duration-300 hover:shadow-rose-500/70 text-center block
                          max-xpp:w-3/4 max-xpp:mx-auto max-xpp:text-lg max-xpp:h-20">
                          Fazer meu LoveLink <br className="hidden max-xpp:inline"/>AGORA MESMO!
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