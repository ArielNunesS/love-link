import React from "react";
import AnimatedBackground from "./AnimatedBackground";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function BackgroundLines() {
    return (
             <div className="fixed inset-0 z-1">
               <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a20] via-[#141432] to-[#0a0a20]"></div>
   
               {/* Linhas curvas decorativas */}
               <div className="absolute inset-0 overflow-hidden">
                 {/* Linha 1 */}
                 <svg className="absolute w-full h-full" preserveAspectRatio="none">
                   <path
                     d="M0,100 C300,150 500,50 1920,100"
                     fill="none"
                     stroke="rgba(244, 114, 182, 0.1)"
                     strokeWidth="2"
                   />
                 </svg>
   
                 {/* Linha 2 */}
                 <svg className="absolute w-full h-full" preserveAspectRatio="none">
                   <path
                     d="M0,200 C400,300 800,150 1920,250"
                     fill="none"
                     stroke="rgba(244, 114, 182, 0.15)"
                     strokeWidth="1.5"
                   />
                 </svg>
   
                 {/* Linha 3 - mais brilhante */}
                 <svg className="absolute w-full h-full" preserveAspectRatio="none">
                   <path
                     d="M0,350 C600,280 1200,400 1920,320"
                     fill="none"
                     stroke="rgba(244, 114, 182, 0.25)"
                     strokeWidth="2"
                   />
                 </svg>
   
                 {/* Linha 4 */}
                 <svg className="absolute w-full h-full" preserveAspectRatio="none">
                   <path
                     d="M0,500 C500,450 900,550 1920,500"
                     fill="none"
                     stroke="rgba(244, 114, 182, 0.08)"
                     strokeWidth="1.5"
                   />
                 </svg>
   
                 {/* Linha 5 - mais brilhante */}
                 <svg className="absolute w-full h-full" preserveAspectRatio="none">
                   <path
                     d="M0,650 C300,700 1200,600 1920,680"
                     fill="none"
                     stroke="rgba(236, 72, 153, 0.3)"
                     strokeWidth="2"
                   />
                 </svg>
   
                 {/* Linha 6 */}
                 <svg className="absolute w-full h-full" preserveAspectRatio="none">
                   <path
                     d="M0,800 C400,750 1000,850 1920,800"
                     fill="none"
                     stroke="rgba(244, 114, 182, 0.12)"
                     strokeWidth="1.5"
                   />
                 </svg>
               </div>
   
               {/* Partículas brilhantes */}
               <div className="absolute inset-0">
                 <div className="absolute top-1/4 left-1/5 w-1 h-1 rounded-full bg-pink-400 opacity-70"></div>
                 <div className="absolute top-1/3 left-2/3 w-1.5 h-1.5 rounded-full bg-pink-300 opacity-80"></div>
                 <div className="absolute top-2/3 left-1/4 w-1 h-1 rounded-full bg-pink-400 opacity-60"></div>
                 <div className="absolute top-5/7 left-5/11 w-1.5 h-1.5 rounded-full bg-pink-400 opacity-70"></div>
                 <div className="absolute top-7/9 left-1/3 w-1.5 h-1.5 rounded-full bg-pink-400 opacity-70"></div>
                 <div className="absolute top-1/5 left-2/4 w-2 h-2 rounded-full bg-pink-400 opacity-65"></div>
                 <div className="absolute top-1/5 left-1/10 w-1.5 h-1.5 rounded-full bg-pink-400 opacity-60"></div>
               </div>
             </div>
)
}