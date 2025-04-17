import React from "react";
import { Fira_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LoveLink - Crie um card virtual personalizado para seu amor",
  description: "Eternize cada momento do seu amor com um card virtual personalizado e contador de tempo de relacionamento",
};

export default function RootLayout({
  children, }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="pt-BR">
        <body className={`${firaSans.variable} antialiased`}>
          {children}
        </body>
      </html>
    )
  }