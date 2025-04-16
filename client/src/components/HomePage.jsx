"use client"

import Link from "next/link";

export default function HomePage() {
    return (
    <main className="min-h-screen">
        <div className="absolute inset-0 z-0">
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
                        <Link href="/criar"
                        className="inline-block rounded-full bg-rose-500 hover:bg-rose-700 text-white font-medium px-8 py-4 text-lg
                        transition-all duration-300 shadow-lg hover:shadow-rose-500/30"
                        >
                        Criar seu LoveLink
                    </Link>
                    </div>
                </div>
            </section>
        </div>
        </div>
    </main>
    )
}