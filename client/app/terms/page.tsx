"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function termsPage() {
    return ( <>
    <main className="w-full min-h-screen z-50 items-center overflow-hidden text-white">
        <header className={`absolute top-0 left-0 right-0 z-20
        xl:left-65 xl:right-60
        lll:left-25 lll:right-25
        ll:left-20 ll:right-20
        l:left-15 l:right-15`}/>
        <nav className="flex items-center px-5 py-3 justify-between 
        l:mx-15 xm:mx-8 max-m:flex-col max-m:items-start max-m:px-4">
          
        <Link href="/" className="flex items-center gap-2">
        <Image
        src="https://i.postimg.cc/fbwy95Ww/heart-icon.png"
        alt=""
        width={60}
        height={60}
        className="w-15 max-xm:w-13 max-m:w-12 max-pp:w-10 select-none"
        />
        <span className="text-3xl font-bold text-white max-xm:text-2xl max-pp:text-xl select-none">
          LoveLink
        </span>
        </Link>  
      </nav>    
    </main>
    </> );
};