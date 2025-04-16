"use client"

import Link from "next/link";
import { Heart } from "lucide-react";

export default function Navbar(){
    
    return (

    <header className="absolute top-3 left-0 right-0 z-50">
        <nav className="container mx-auto flex items-center px-4 py-6 justify-between">
            <Link href="/" className="flex items-center gap-2">
                <Heart className="w-6 h-6 text-rose-400 fill-rose-400"/>
                <span className="text-2xl font-bold text-white">LoveLink</span>
            </Link>
    
            <div className="flex items-center gap-8">
                <Link href="/exemplos" className="text-2xl font-bold text-white">
                    Exemplos
                </Link>
        
                <Link href="/como-funciona" className="text-2xl font-bold text-white">
                    Como Funciona
                </Link>

                <Link href="/precos" className="text-2xl font-bold text-white">
                    Preços
                </Link>

                <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    Menu
                </button>
            </div>
        </nav>
        
            {/* {isMenuOpen && (
                <div className="md:hidden bg-[#0a0a20]/95 backdrop-blur-sm">
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        <Link href="/exemplos" className="text-white py-2 px-5">
                            Exemplos
                        </Link>
                        <Link href="/como-funciona" className="text-white py-2">
                            Como Funciona
                        </Link>
                        <Link href="/precos" className="text-white py-2">
                            Preços
                        </Link>
                    </div>
                </div>
            )} */}
    </header>
    )
}
