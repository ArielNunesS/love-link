"use client"

import React from "react";
import Link from "next/link";
import { Calendar, Heart, Clock, Music, Camera, Mail, MailOpen } from "lucide-react";
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
  image: FileList | null,
}

export default function CardPreview(props: CardPreviewProps){
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
          <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] overflow-hidden
          shadow-2xl border-8 border-gray-800">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl z-10"></div>
              
              {/* Screen */}
            <div className="relative bg-gradient-to-br from-purple-900/80 via-[#1a1a2e] to-rose-900/50 pt-5 pb-4 h-170 overflow-hidden">
                <div className="px-4 py-2 flex items-center justify-between">
                    <div className="text-white/80 text-xs cursor-default">21:30</div>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-white/80"></div>
                      <div className="w-1 h-1 rounded-full bg-white/80"></div>
                      <div className="w-1 h-1 rounded-full bg-white/80"></div>
                    </div>
                </div>
                  
              {/* URL Bar */}
              <div className="mx-4 mt-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 flex items-center">
                  <div className="w-1 h-1 rounded-full bg-rose-400 mr-2"></div>
                  <p className="text-white/80 text-xs">love-link-app.com.br/00{props.name}</p>
              </div>

              {/* Content */}
              <div className="px-4 mt-6">

              {/* Profile Section */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-0.5 bg-conic/[from_var(--border-angle)] from-purple-700 via-purple-600 to-purple-500 rounded-full animate-rotate-border">
                  <div className="w-16 h-16 rounded-full bg-pink-600 flex items-center justify-center">
                    <button onClick={() => setShowMessage(!showMessage)} className="w-full h-full rounded-full flex items-center justify-center cursor-pointer">
                      <Mail/>
                    </button>
                  </div>
                </div>
                  <p className="text-xl font-semibold " style={{ fontFamily: "var(--font-dancing-script)" }}>{props.title}</p>
              </div>
                <div className="max-w-xs wrap-break-word">
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
      </div>
    )
  }
    return (
      <div className="max-xpp:w-[290px] max-pp:w-[320px] max-p:w-[340px] w-[360px] ll:mt-10">
      <div className="relative mx-auto">
          <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] overflow-hidden
          shadow-2xl border-8 border-gray-800">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl z-10"></div>
              
              {/* Screen */}
            <div className="relative bg-gradient-to-br from-purple-900/80 via-[#1a1a2e] to-rose-900/50 pt-5 pb-4 h-170 overflow-hidden">
                <div className="px-4 py-2 flex items-center justify-between">
                    <div className="text-white/80 text-xs cursor-default">21:30</div>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-white/80"></div>
                      <div className="w-1 h-1 rounded-full bg-white/80"></div>
                      <div className="w-1 h-1 rounded-full bg-white/80"></div>
                    </div>
                </div>

              {/* URL Bar */}
              <div className="mx-4 mt-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 flex items-center">
                  <div className="w-1 h-1 rounded-full bg-rose-400 mr-2"></div>
                  <p className="text-white/80 text-xs text-nowrap overflow-hidden">love-link-app.com.br/00{props.name}</p>
              </div>

              {/* Content */}
              <div className="px-4 mt-6">

              {/* Profile Section */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-0.5 bg-conic/[from_var(--border-angle)] from-purple-700 via-purple-600 to-purple-500 rounded-full animate-rotate-border">
                  <div className="w-16 h-16 rounded-full bg-pink-600 flex items-center justify-center">
                    <button onClick={() => setShowMessage(!showMessage)} className="w-full h-full rounded-full flex items-center justify-center cursor-pointer">
                      <Mail/>
                    </button>
                  </div>
                </div>
                  <div>
                    <h3 className="text-white font-bold text-lg cursor-default">{props.name}</h3>
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
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-4 cursor-default">
                <div className="bg-white/10 backdrop-blur-lg justify-center rounded-2xl w-78 h-50 p-5 flex items-center gap-2
                      max-xpp:w-60.5 max-pp:w-68 max-p:w-73"
                    >
                    <Camera className="w-15 h-15 text-rose-400
                      max-xpp:w-10 max-xpp:h-10 max-pp:w-14 max-pp:h-14"/>
                    <span className="text-white ml-2 font-medium text-lg max-xpp:text-base max-m:text-xl">Sua Foto Aqui</span>
                </div>
              </div>
            </div>
          </div>
        </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-24 h-24 text-rose-500/50">
                <Heart className="w-full h-full fill-rose-500/35 animate-pulse
                  max-p:size-20 max-p:mt-3 max-p:ml-0
                  max-pp:size-17 max-pp:mt-5
                  max-xpp:size-15 max-xpp:mt-5 max-xpp:ml-2"
                />
              </div>
              <div className="absolute bottom-2 -left-7 w-16 h-16 text-rose-500/50">
                <Heart className="w-full h-full fill-rose-500/35 animate-ping
                  max-p:size-14 max-p:mt-7 max-p:ml-6
                  max-pp:size-12 max-pp:mt-9 max-pp:ml-7
                  max-xpp:size-10 max-xpp:mt-9 max-xpp:ml-7"
                />
              </div>
      </div>
          </div>
    )
} 
