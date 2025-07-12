"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";
import HomePage from "../src/components/HomePage";
import Navbar from "../src/components/Navbar";
import AnimatedBackground from "../src/components/AnimatedBackground";
import BackgroundLines from "../src/components/BackgroundLines";

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