import React from "react";
import Link from "next/link";
import { Heart, Calendar, Clock, Camera, Gift, Music, Mail } from "lucide-react";

export default function HomePage() {
    return (
    <main className="min-h-screen z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a20] via-[#141432] to-[#09091d]">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="relative z-10 container mx-auto px-4 top flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-1/2 text-left">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                      <span className="text-rose-400"> Eternize </span>
                              cada momento do seu
                      <span className="tex-rose-400"> AMOR </span>
                  </h1>
                    <p className="text-lg md:text-xl text-white/80 mb-8">
                    Crie um site personalizado com contador de tempo do seu relacionamento e compartilhe memórias especiais
                    com seu parceiro em um endereço único.
                    </p>
                  
                  <Link href="/criar" className="inline-block rounded-full bg-rose-500 hover:bg-rose-600 text-white font-medium
                  px-8 py-4 text-lg shadow-lg shadow-rose-500/40 transition-all duration-300 hover:shadow-rose-500/30">
                    Criar seu LoveLink
                  </Link>
                </div>

                {/* Right side - Preview*/}
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <div className="relative mx-auto max-w-[340px]">
                        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] overflow-hidden
                        shadow-2xl border-8 border-gray-800">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-900 rounded-b-xl z-10"></div>
                            
                            {/* Screen */}
                            <div className="relative bg-gradient-to-br from-purple-900/80 via-[#1a1a2e] to-rose-900/50 pt-8 pb-4
                            min-h-[600px] overflow-hidden">
                                <div className="px-4 py-2 flex items-center justify-between">
                                    <div className="text-white/80 text-xs cursor-default">21:45</div>
                                    <div className="flex items-center gap-1">
                                      <div className="w-1 h-1 rounded-full bg-white/80"></div>
                                      <div className="w-1 h-1 rounded-full bg-white/80"></div>
                                      <div className="w-1 h-1 rounded-full bg-white/80"></div>
                                    </div>
                                </div>
                                
                                {/* URL Bar */}
                                <div className="mx-4 mt-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
                                    <div className="w-1 h-1 rounded-full bg-rose-400 mr-2"></div>
                                    <p className="text-white/80 text-xs">lovelink.com/joao-e-maria</p>
                                </div>

                                {/* Content */}
                                <div className="px-4 mt-6">
                                    {/* Profile Section */}
                                    <div className="flex items-center gap-4 mb-6">
                                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 to-purple-500
                                      flex items-center justify-center">
                                          <Mail className="w-8 h-8 text-white"/>
                                      </div>
                                      <div>
                                          <h3 className="text-white font-bold text-lg cursor-default">João e Maria</h3>
                                          <p className="text-rose-300 text-sm cursor-default">Nosso amor com um clique</p>
                                      </div>
                                    </div>

                                    {/* Counter Card */}
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
                                      <div className="flex items-center gap-2 mb-2">
                                        <Calendar className="w-4 h-4 text-rose-400"/>
                                        <h4 className="text-white font-medium cursor-default">Tempo Juntos</h4>
                                      </div>
                                      <div className="grid grid-cols-3 gap-2 text-center">
                                        <div className="bg-white/5 rounded-lg p-2">
                                          <p className="text-rose-400 font-bold text-xl">2</p>
                                          <p className="text-white/70 text-xs cursor-default">Anos</p>
                                        </div>
                                        <div className="bg-white/5 rounded-lg p-2">
                                          <p className="text-rose-400 font-bold text-xl cursor-default">7</p>
                                          <p className="text-white/70 text-xs cursor-default">Meses</p>
                                        </div>
                                        <div className="bg-white/5 rounded-lg p-2">
                                          <p className="text-rose-400 font-bold text-xl cursor-default">15</p>
                                          <p className="text-white/70 text-xs cursor-default">Dias</p>
                                        </div>
                                      </div>
                                      <div className="mt-2 flex items-center justify-center gap-2">
                                        <Clock className="w-3 h-3 text-rose-300"/>
                                        <p className="text-white/60 text-xs cursor-default">3h 24m 12s</p>
                                      </div>
                                    </div>

                                    {/* Features */}
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center gap-2">
                                          <Camera className="w-5 h-8 text-rose-400"/>
                                          <span className="text-white text-sm cursor-default">Fotos</span>
                                      </div>
                                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center gap-2">
                                          <Music className="w-5 h-5 text-rose-400"/>
                                          <span className="text-white text-sm cursor-default">Música</span>
                                      </div>
                                    </div>

                                    {/* Button */}

                                    <div className="relative w-full group rounded-xl border-container">
                                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-rose-300 to-rose-600 animate-border-move opacity-70 blur-sm group-hover:opacity-100 transition"/>
                                        <Link href={"/criar"} className="relative z-10 w-full bg-rose-500 hover:bg-rose-600 text-white py-3 mt-15 
                                          rounded-xl font-medium shadow-lg shadow-rose-500/40 text-center block">
                                          Ver Nossa História
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
                    </div>
                </div>
                </div>
            </section>
        </div>
    </main>
    )
}