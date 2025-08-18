import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="flex items-center px-5 py-3 justify-between l:mx-15 xm:mx-8 max-m:flex-col max-m:items-start max-m:px-4">
        <Link href="/" className="flex items-center gap-2">
        <Image
        src="https://i.postimg.cc/fbwy95Ww/heart-icon.png"
        alt=""
        width={60}
        height={60}
        className="w-15 max-p:w-13 max-pp:w-12 max-xpp:w-10 select-none"
        />

          <span className="text-3xl font-bold text-white max-p:text-2xl max-xpp:text-xl select-none">
            LoveLink
          </span>
        </Link>

        <div className="flex items-center gap-8 max-xm:w-full max-xm:hidden">
          <Link
            href="/exemplos"
            className="text-2xl font-bold text-white max-m:hidden select-none"
          >
            Exemplos
          </Link>

          <Link
            href="/como-funciona"
            className="text-2xl font-bold text-white max-m:text-lg max-m:w-full max-m:text-center select-none"
          >
            Como Funciona
          </Link>
        </div>
      </nav>
    </header>
  );
}