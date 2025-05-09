"use client"

import { useState } from "react";
import Card from "../../components/Card";

export default function CriarPage() {
    const [ name, setName ] = useState<string>("");
    const [ mensagem, setMensagem ] = useState<string>("");
    const [ anos, setAnos ] = useState<number>(0);

    return (
        <main className="min-h-screen flex items-center justify-end bg-[#09091d] px-4">
            <form>
                <input type="name" placeholder="Nome do Casal"/>
                <input type="title" placeholder="Titulo da Mensagem" maxLength={15}/>
                <input type="email" placeholder="Email para receber o site"/>
                <input type="date" />
                <input type="file" placeholder="Photos" className="custom-file-label" />
            </form>
            <Card
                name={"let"}
                title={"çklas"}
                message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                years={2}
                months={7}
                days={15}
                hours={3}
                minutes={24}
                seconds={12}
                photos={[]} />
        </main>
    );
}