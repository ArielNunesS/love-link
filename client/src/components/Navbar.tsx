import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function Navbar(){

    return (
    <header className="absolute top-3 left-0 right-0 z-20">
        <nav className="container mx-auto flex items-center px-5 py-5 justify-between">
            <Link href="/" className="flex items-center gap-2">
                <Heart className="w-7 h-7 text-rose-400 fill-rose-400"/>
                <span className="text-2xl font-bold text-white">LoveLink</span>
            </Link>
    
            <div className="flex items-center gap-8">
                <Link href="/" className="text-2xl font-bold text-white">
                    
                </Link>
                <Link href="/exemplos" className="text-2xl font-bold text-white">
                    Exemplos
                </Link>
        
                <Link href="/como-funciona" className="text-2xl font-bold text-white">
                    Como Funciona
                </Link>
                
            </div>
        </nav>
    </header>
    )
}
