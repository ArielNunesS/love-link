import React from "react";
import Link from "next/link";
import { Heart, Calendar, Clock, Camera, Gift, Music, Mail } from "lucide-react";
import Card from "./Card";

export default function HomePage() {
    return (
    <main className="min-h-screen z-10 h-1000">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a20] via-[#141432] to-[#09091d]">
        <section className="relative h-screen flex items-center justify-center overflow-x-clip">
            <div className="relative z-10 container mx-auto px-4 top flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                      <span className="text-rose-400">
                            Eternize </span>
                            cada momento do seu
                      <span className="tex-rose-400"> AMOR </span>
                  </h1>
                    <p className="text-lg md:text-xl text-white/80 mb-8">
                    Crie um site personalizado com contador de tempo do seu relacionamento e compartilhe memórias especiais
                    com seu parceiro em um endereço único.
                    </p>
                  
                  <Link href="/create" className="inline-block rounded-full bg-rose-500 hover:bg-rose-600 text-white font-medium
                  px-8 py-4 text-lg shadow-lg shadow-rose-500/40 transition-all duration-300 hover:shadow-rose-500/70">
                    Criar seu LoveLink
                  </Link>
                </div>

                {/* Right side - Preview*/}
                <div className="w-full flex flex-col items-center justify-center mt-15">
                <div className="flex flex-wrap justify-center">
                    <Card
                          name="joao e maria"
                          email=""
                          title="joao e maria"
                          message="klaskdals"
                          startDate={new Date(55555555)}
                          image={null}
                        />
                                    {/* Button */}

                                    <div className="relative w-130 group rounded-xl border-container">
                                    <div className="absolute mt-12 h-10 inset-0 rounded-xl bg-gradient-to-r from-rose-300 to-rose-600 animate-border-move opacity-70 blur-md group-hover:opacity-100 transition"/>
                                        <Link href={"/create"} className="relative z-10 w-full bg-rose-500 hover:bg-rose-600 text-white py-3 mt-15 
                                          rounded-xl font-medium shadow-lg shadow-rose-500/40 text-center block">
                                          FAZER MEU LOVELINK AGORA MESMO
                                        </Link>
                                    </div>
                                  </div>
                                  </div>
                                  
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 text-rose-500/40 animate-pulse">
                          <Heart className="w-full h-full fill-rose-400/20"/>
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 text-rose-500/40">
                          <Heart className="w-full h-full fill-rose-400/20"/>
                        </div>
            </section>
        </div>
    </main>
    )
}