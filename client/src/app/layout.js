import { Fira_Sans } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "LoveLink - Crie um card virtual personalizado para seu amor",
  description: "Eternize cada momento do seu amor com um card virtual personalizado e contador de tempo de relacionamento",
};

export default function RootLayout({ children }) {

  return (
    <html lang="pt-BR">
      <body className={`${firaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
