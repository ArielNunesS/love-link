"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "../contexts/ModalContext";
import { Calendar, Heart, Music, Camera, Mail, MailOpen } from "lucide-react";
import { FaEnvelope } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { DateTime } from "luxon";
import {z} from "zod";

interface CardPreviewProps {
  name: string,
  email: string,
  title: string,
  message: string,
  startDate: Date,
  images: string[] | null,
  background: "rose" | "red" | "purple" | "blackPurple";
}

export default function CardPreview(props: CardPreviewProps){
  const [isClient, setIsClient] = useState<boolean>(false)
  const [ showMessage, setShowMessage ] = useState<boolean>(false);
  const [ secondsPassed, setSecondsPassed ] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const { isOpen } = useModal()
  
  const backgroundClasses: Record<CardPreviewProps["background"], string> = {
    rose: "bg-gradient-to-b from-purple-900/80 via-[#270a35] to-rose-900/80",
    purple: "bg-gradient-to-b from-purple-900/80 via-[#270a35] to-purple-900/80",
    red: "bg-gradient-to-b from-purple-900/80 via-[#350a2c] to-red-800/80",
    blackPurple: "bg-gradient-to-b from-[#0a0a20] via-[#422575] to-[#0a0a20]",
  };

  useEffect(() => {
      if (props.images && props.images.length > 1) {
        const imageInterval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => 
            prevIndex === props.images!.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000);

        return () => clearInterval(imageInterval);
      }
    }, [props.images, currentImageIndex]);

  useEffect(() => {
      setCurrentImageIndex(0);
    }, [props.images]);


  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsPassed(prevSeconds => prevSeconds + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [])

  const now = DateTime.now().setLocale("pt-BR");
  const start = DateTime.fromJSDate(props.startDate).setZone("America/Sao_Paulo", {keepLocalTime: true});
  const diff = now.diff(start, ["years", "months", "days", "hours", "minutes", "seconds"]).toObject();

  const years = Math.floor(diff.years ?? 0);
  const months = Math.floor(diff.months ?? 0);
  const days = Math.floor(diff.days ?? 0);
  const hours = Math.floor(diff.hours ?? 0);
  const minutes = Math.floor(diff.minutes ?? 0);
  const seconds = Math.floor(diff.seconds ?? 0); + (isClient ? secondsPassed : 0);

  let displaySeconds = seconds % 60;
  let displayMinutes = minutes + Math.floor(seconds / 60);
  let displayHours = hours + Math.floor(displayMinutes / 60);

  displayMinutes = displayMinutes % 60;
  displayHours = displayHours % 24;

    return (

      <div className={`max-[300px]:scale-65 max-xpp:scale-75 max-pp:scale-80 max-p:scale-90 w-[360px] ll:mt-10
      ${isOpen ? "opacity-50" : "opacity-100"}`}>
      <div className="relative mx-auto">
          <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[40px] shadow-xl overflow-hidden border-6 border-gray-800">
            {/* Notch */}
            <div className={"absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl z-10"}></div>
            
            {/* Screen */}
            <div className={`relative pt-5 pb-5 h-170 overflow-y-scroll card-scroll ${backgroundClasses[props.background]}`}>
                <div className="px-4 ml-3 py-1 flex items-center justify-between">
                    <div className="text-white/80 text-xs cursor-default select-none">21:30</div>
                    <div className="flex items-center gap-1 mr-3">
                      <div className="w-1 h-1 rounded-full bg-white/80"></div>
                      <div className="w-1 h-1 rounded-full bg-white/80"></div>
                      <div className="w-1 h-1 rounded-full bg-white/80"></div>
                    </div>
                </div>
              
              {/* URL */}
              <div className="mx-4 mt-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 flex items-center">
                  <div className="w-1 h-1 rounded-full bg-rose-500 mr-2"></div>
                  <p className="text-white/80 text-xs text-nowrap overflow-hidden select-none">love-link-app.com.br/{props.name}</p>
              </div>

              <div className="px-4 mt-5">
        {showMessage ? (
          <>
              {/* Mail Button */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-0.5 bg-pink-700/30 rounded-full">
                  <div className="w-16 h-16 rounded-full bg-rose-700 flex items-center justify-center">
                    <button onClick={() => setShowMessage(!showMessage)} className="w-full h-full rounded-full flex items-center justify-center cursor-pointer">
                      <MailOpen className="text-white"/>
                    </button>
                  </div>
                </div>
                  <p className="text-3xl text-white font-normal wrap-anywhere select-none" style={{ fontFamily: "var(--font-birthstone)" }}>{props.title}</p>
              </div>
                <div className="max-w-xs">
                  <p className="px-1 text-xs text-white font-normal wrap-break-word whitespace-pre-wrap select-none" style={{ fontFamily: "var(--font-special-elite)" }}>{props.message}</p>
                </div>
          </>
        ) : (
          <>
              {/* Mail Button */}
              <div className="flex items-center gap-3 mb-3 wrap-break-word">
                <div className="p-0.5 bg-pink-700/30 rounded-full">
                  <div className="w-16 h-16 rounded-full bg-rose-700 flex items-center justify-center">
                    <button onClick={() => setShowMessage(!showMessage)} className="w-full h-full rounded-full flex items-center justify-center cursor-pointer">
                      <Mail className="text-white"/>
                    </button>
                  </div>
                </div>
                  <div>
                    <h3 className="text-white font-bold text-lg cursor-default wrap-break-word select-none">{props.name}</h3>
                  </div>
              </div>

              {/* Counter */}
            <div className="bg-white/10 font-normal backdrop-blur-lg rounded-2xl p-4 mb-3 cursor-default select-none">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-rose-400"/>
                <h4 className="text-rose-400 text-3xl font max-xpp:text-lg" style={{ fontFamily: "var(--font-birthstone)" }}>Tempo Juntos</h4>
              </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white/5 rounded-lg p-2">
                    <p className="text-rose-400 font-bold text-xl">{years}</p>
                    <p className="text-white/70 text-xs">anos</p>

                  </div>
                  <div className="bg-white/5 rounded-lg p-2">
                    <p className="text-rose-400 font-bold text-xl">{months}</p>
                    <p className="text-white/70 text-xs">meses</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2">
                    <p className="text-rose-400 font-bold text-xl">{days}</p>
                    <p className="text-white/70 text-xs">dias</p>
                  </div>
                </div>
                <p className="text-white/70 text-xs text-center mt-3 p-0" suppressHydrationWarning>{`${displayHours.toString().padStart(2, "0")}h ${displayMinutes.toString().padStart(2, "0")}m ${displaySeconds.toString().padStart(2, "0")}s`}</p>
              </div>
              
              <h3 className="text-4xl text-center text-red-600 select-none" style={{ fontFamily: "var(--font-birthstone)" }}>Nossas Memórias</h3>
              
              {props.images && Array.isArray(props.images) && props.images.length > 0 ? (
              <>
              <div>
                <Image
                src={props.images[currentImageIndex]}
                alt="image"
                width={310}
                height={310}
                className="object-cover border-3 rounded-2xl mx-auto transform transition-shadow duration-500"/>
              </div>
              </>
              ) :
                <div className="flex items-center gap-3 mb-4 cursor-default select-none">
                  <div className="bg-white/10 backdrop-blur-lg justify-center rounded-2xl w-full h-50 p-5 flex items-center gap-2">
                      <Camera className="w-15 h-15 text-rose-400 max-xpp:w-10 max-xpp:h-10 max-pp:w-14 max-pp:h-14"/>
                      <span className="text-white ml-2 font-medium text-lg max-xpp:text-base max-xm:text-xl">Sua Foto Aqui</span>
                  </div>
                </div>
              }

                {/* <div className="flex bg-white/10 backdrop-blur-lg justify-center rounded-2xl w-78 h-25 p-5 mt-3 items-center gap-2
                  max-xpp:w-60.5 max-pp:w-68 max-p:w-73 select-none">
                    <Music className="text-rose-400 w-10 h-10"/>
                    <span className="text-white ml-2 font-medium text-lg max-xpp:text-base max-xm:text-xl">Sua Música</span>
                </div> */}
          </>
        )}
          </div>
        </div>
      </div>
        
        <div className="absolute -top-10 -right-10 w-24 h-24 text-rose-500/40 animate-pulse">
          <Heart className="w-full h-full fill-rose-500/30
            max-p:size-20 max-p:mt-3 max-p:ml-0
            max-pp:size-17 max-pp:mt-5
            max-xpp:size-15 max-xpp:mt-5 max-xpp:ml-2"
          />
        </div>
        <div className="absolute bottom-2 -left-7 w-16 h-16 text-rose-500/50">
          <Heart className="w-full h-full animate-ping fill-rose-500/35
            max-p:size-14 max-p:mt-7 max-p:ml-6
            max-pp:size-12 max-pp:mt-9 max-pp:ml-7
            max-xpp:size-10 max-xpp:mt-9 max-xpp:ml-7"
          />
        </div>
      </div>
    </div>
  )
}