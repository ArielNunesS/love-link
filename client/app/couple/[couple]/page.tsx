import Card from "../../components/Card";
import { notFound } from "next/navigation";
import "dotenv/config";

export default async function CouplePage({ params }: { params: Promise<{ couple: string }> }) {
    const coupleId = await params;
    let coupleData = null;

    try {
        const backendAPIURL = process.env.NEXT_PUBLIC_BACKEND_URL

        const res = await fetch(`${backendAPIURL}/couples/${coupleId}`, {
            cache: "no-store",
        });

        // if(!res.ok) {
        //     notFound();
        // }

        coupleData = await res.json();
    } catch(error) {
        console.error(`Erro ao buscar dados para o casal ${coupleId}`)
    }

    return ( <>
        <div className="min-h-screen bg-[#09091d] flex items-center justify-center p-4 text-white">

        <h1>Casal {coupleData.name}</h1>

        <Card 
            name={coupleData.name}
            email={coupleData.email}
            title={coupleData.title}
            message={coupleData.message}
            startDate={coupleData.startDate}
            image={null}
        />

        </div>
    </>
    )
}