"use client"

import React from "react";
import Link from "next/link";
import { Calendar, Heart, Clock, Music, Camera, Mail, MailOpen } from "lucide-react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { DateTime } from "luxon";
import Image from "next/image";
import {z} from "zod";

interface CardFinalProps {
  name: string,
  email: string,
  title: string,
  message: string,
  startDate: Date,
  years: number,
  months: number,
  days: number,
  image: string | null,
}

export default function CardFinal(props: CardFinalProps){
  const [ showMessage, setShowMessage ] = useState<boolean>(false);
  const now = DateTime.now();
  const start = DateTime.fromJSDate(props.startDate);

  const diff = now.diff(start, ["years", "months", "days"]).toObject();

  const years = Math.floor(diff.years ?? 0);
  const months = Math.floor(diff.months ?? 0);
  const days = Math.floor(diff.days ?? 0);

  if(showMessage) {
    return (
      <div className="max-xpp:w-[290px] max-pp:w-[320px] max-p:w-[340px] w-[360px] ll:mt-10">
      <div className="relative mx-auto">
              
              {/* Screen */}
            <div className="relative pt-5 pb-4 min-h-170 h-fit overflow-hidden">
                  
              {/* Content */}
              <div className="px-4 mt-6">

              {/* Profile Section */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-0.5 bg-pink-600/30 rounded-full">
                  <div className="w-16 h-16 rounded-full bg-pink-600 flex items-center justify-center animate-bounce">
                    <button onClick={() => setShowMessage(!showMessage)} className="w-full h-full rounded-full flex items-center justify-center cursor-pointer">
                      <Mail/>
                    </button>
                  </div>
                </div>
                  <p className="text-xl font-semibold wrap-break-word" style={{ fontFamily: "var(--font-dancing-script)" }}>{props.title}</p>
              </div>
                <div className="max-w-xs">
                  <p className="text-xs font-normal whitespace-pre-wrap">{props.message}</p>
                </div>
            </div>
          </div>
        </div>
              {/* Decorative Elements */}
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
    )
  }
    return (
      <div className="max-xpp:w-[290px] max-pp:w-[320px] max-p:w-[340px] w-[1000px] ll:mt-10 px-10">
      <div className="relative mx-auto">
              
            {/* Screen */}
            <div className="relative pt-5 pb-4 h-170 overflow-hidden">

              {/* Content */}
              <div className="px-4 mt-6">

              {/* Profile Section */}
              <div className="flex items-center gap-3 mb-5 wrap-break-word">
                <div className="p-0.5 bg-pink-600/30 rounded-full">
                  <div className="w-16 h-16 rounded-full bg-pink-600 flex items-center justify-center animate-bounce">
                    <button onClick={() => setShowMessage(!showMessage)} className="w-full h-full rounded-full flex items-center justify-center cursor-pointer">
                      <Mail/>
                    </button>
                  </div>
                </div>
                  <div>
                    <h3 className="text-white font-bold text-lg cursor-default wrap-break-word">{props.name}</h3>
                  </div>
              </div>

              {/* Counter Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 mb-4 cursor-default">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-rose-400"/>
                  <h4 className="text-white font-medium text-base max-xpp:text-sm">Tempo Juntos</h4>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white/5 rounded-lg p-2">
                    <p className="text-rose-400 font-bold text-xl">{props.years}</p>
                    <p className="text-white/70 text-xs">anos</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2">
                    <p className="text-rose-400 font-bold text-xl">{props.months}</p>
                    <p className="text-white/70 text-xs">meses</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2">
                    <p className="text-rose-400 font-bold text-xl">{props.days}</p>
                    <p className="text-white/70 text-xs">dias</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="justify-center gap-0 cursor-default">
              <Image
                src={props.image}
                width={440}
                height={480}
                alt=""
              />
                </div>

            </div>
          </div>
              <div className="bg-white/10 mt-5 backdrop-blur-lg justify-center rounded-2xl w-full h-25 p-5 px-4 flex items-center gap-2
                  max-xpp:w-60.5 max-pp:w-68 max-p:w-73">
                <Music className="text-rose-400 w-10 h-10"/>
                <span className="text-white ml-2 font-medium text-lg max-xpp:text-base max-xm:text-xl">Sua Música</span>
              </div>
        </div>
              {/* Decorative Elements */}
              <div className="absolute top-10 right-0 w-24 h-24 text-rose-500/50">
                <Heart className="w-full h-full fill-rose-500/35 animate-pulse
                  max-p:size-20 max-p:mt-3 max-p:ml-0
                  max-pp:size-17 max-pp:mt-5
                  max-xpp:size-15 max-xpp:mt-5 max-xpp:ml-2"
                />
              </div>
              <div className="absolute bottom-1/20 -left-7 w-16 h-16 text-rose-500/50">
                <Heart className="w-full h-full fill-rose-500/35 animate-ping
                  max-p:size-14 max-p:mt-7 max-p:ml-6
                  max-pp:size-12 max-pp:mt-9 max-pp:ml-7
                  max-xpp:size-10 max-xpp:mt-9 max-xpp:ml-7"
                />
              </div>
      </div>
    )
} 
