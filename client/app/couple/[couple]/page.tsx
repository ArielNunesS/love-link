import { notFound } from "next/navigation";
import { DateTime } from "luxon";
import { watch } from "fs";
import CardFinal from "../../components/CardFinal";
import Image from "next/image";
import "dotenv/config";
import StarryBackground from "../../components/BackgroundLines";

export default async function CouplePage({ params }: { params: Promise<{ couple: string }> }) {
    const resolvedParams = await params;
    const coupleSlug = resolvedParams.couple;
    let coupleData = null;
    
    try {
        const backendAPIURL = process.env.NEXT_PUBLIC_BACKEND_URL;
        // "http://localhost:10000"

        const res = await fetch(`${backendAPIURL}/couples/${coupleSlug}`, {
            cache: "no-store",
        });

        if(!res) {
            console.log("Error in response")
        }

        coupleData = await res.json();

        if (!coupleData) {
            console.error("Data received is invalid.");
            notFound();
        }

    } catch(error) {
        console.error(`Error during data search for couple ${coupleSlug}`)
    }

    const startDate = new Date(coupleData.startDate);
    const backgroundClasses: Record<
      "rose" | "red" | "purple" | "blackPurple",
      string
    > = {
      rose: "bg-gradient-to-b from-purple-900/80 via-[#270a35] to-rose-900/80",
      purple: "bg-gradient-to-b from-purple-900/80 via-[#270a35] to-purple-900/60",
      red: "bg-gradient-to-b from-purple-900/80 via-[#350a2c] to-red-800/80",
      blackPurple: "bg-gradient-to-b from-[#0a0a20] via-[#422575] to-[#0a0a20]",
    };

    return ( <>
    <main className=" w-full min-h-screen items-center overflow-hidden bg-black/30 custom-scroll">
        <StarryBackground />
        <h2 className="text-5xl text-center mt-15 text-rose-400 z-50 relative" style={{ fontFamily: "var(--font-birthstone)" }}>Clique na Carta !</h2>

        <div className="min-h-screen flex items-center justify-center p-4 text-white">
        <div className="mb-50">


        <CardFinal
            name={coupleData.name}
            email={coupleData.email}
            title={coupleData.title}
            message={coupleData.message}
            startDate={startDate}
            images={coupleData.images}
            background={coupleData.background}
        />
        </div>
        </div>
    </main>
    </>
    )
}