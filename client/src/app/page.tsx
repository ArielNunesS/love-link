"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";
import HomePage from "../components/HomePage";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import BackgroundLines from "../components/BackgroundLines";

export default function Home() {
    const router = useRouter();

  return (
    <div>
      <BackgroundLines/>
      <Navbar/>
      <HomePage/>
      <AnimatedBackground/>
    </div>
  );
}