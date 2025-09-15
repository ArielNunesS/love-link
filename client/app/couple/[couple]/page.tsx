import { notFound } from "next/navigation";
import { DateTime } from "luxon";
import { watch } from "fs";
import CardFinal from "../../components/CardFinal";
import Image from "next/image";
import "dotenv/config";

export default async function CouplePage({ params }: { params: Promise<{ couple: string }> }) {
    const resolvedParams = await params
    const coupleSlug = resolvedParams.couple;
    let coupleData = null;

    try {
        const backendAPIURL = process.env.NEXT_PUBLIC_BACKEND_URL;

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

    return ( <>
    <main className="w-full min-h-screen z-30 items-center bg-gradient-to-br from-purple-900/80 via-[#270a35] to-rose-900/50 overflow-hidden ">
        <div className="min-h-screen flex items-center justify-center p-4 text-white z-30">
        <div className="mt-7">
        <Image
            src="https://i.postimg.cc/q7rJwH17/icons8-click-66.png"
            alt=""
            width={25}
            height={25}
            className={`absolute z-10 mt-45 -ml-8 rotate-90 xm:max-ll:mt-35 m:max-xm:mt-35 m:max-xm:ml-12 max-m:mt-12 max-p:-ml-3 max-pp:-ml-0 pointer-events-none select-none`}
        />

        <CardFinal
            name={coupleData.name}
            email={coupleData.email}
            title={coupleData.title}
            message={coupleData.message}
            startDate={startDate}
            image={coupleData.image}
        />
        </div>
        </div>
    </main>
    </>
    )
}