import React from "react";
import type { Metadata, Viewport } from "next";
import { Fira_Sans, Dancing_Script } from "next/font/google";
import { ModalProvider } from "./contexts/ModalContext";
import "./globals.css";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LoveLink - Site para seu Amor",
  description: "Eternize cada momento do seu amor com um card virtual personalizado e contador de tempo de relacionamento",
};

export const viewport: Viewport = {
  themeColor: "#09091d",
}

export default function RootLayout({
  children, }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="pt-BR" className={`${firaSans.variable} antialiased ${dancingScript.variable} antialiased custom-scroll`}>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="mobile-web-app-capable" content="yes" />
          <link rel="manifest" href="/manifest.json" />
        </head>

          <body className={`${firaSans.variable} antialiased`}>
            <ModalProvider>
              {children}
            </ModalProvider>
          </body>
      </html>
    )
  }