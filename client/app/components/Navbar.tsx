import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="absolute top-3 left-0 right-0 z-20">
      <nav className="container mx-auto flex items-center px-5 py-5 justify-between max-md:flex-col max-md:items-start max-md:px-4">
        <Link href="/" className="flex items-center gap-2">
          <img
            width="60"
            height="60"
            src="https://i.postimg.cc/fbwy95Ww/heart-icon.png"
            className="w-15 max-p:w-13 max-pp:w-12 max-xpp:w-10"
            alt=""
          />
          <span className="text-3xl font-bold text-white max-p:text-2xl max-xpp:text-xl">
            LoveLink
          </span>
        </Link>

        <div className="flex items-center gap-8 max-md:w-full max-md:hidden">
          <Link
            href="/exemplos"
            className="text-2xl font-bold text-white max-md:hidden"
          >
            Exemplos
          </Link>

          <Link
            href="/como-funciona"
            className="text-2xl font-bold text-white max-md:text-lg max-md:w-full max-md:text-center"
          >
            Como Funciona
          </Link>
        </div>
      </nav>
    </header>
  );
}