"use client"

import Image from "next/image";
import Navbar from "../components/Navbar.jsx";
import HomePage from "@/components/HomePage.jsx";
import { useRouter } from "next/navigation";

export default function Home() {

    const router = useRouter();

  return (
    <div>
      <Navbar/>
      <HomePage/>
    </div>
    
  );
}