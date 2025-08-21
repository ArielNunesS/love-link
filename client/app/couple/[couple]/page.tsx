
import { notFound } from "next/navigation";
import { DateTime } from "luxon";
import { watch } from "fs";
import CardPreview from "../../components/CardPreview";
import CardFinal from "../../components/CardFinal";
import AnimatedBackground from "../../components/AnimatedBackground";
import BackgroundLines from "../../components/BackgroundLines";
import Image from "next/image";
import "dotenv/config";

export default async function CouplePage({ params }: { params: Promise<{ couple: string }> }) {
    const resolvedParams = await params
    const coupleSlug = resolvedParams.couple;
    let coupleData = null;

    try {
        const backendAPIURL = process.env.NEXT_PUBLIC_BACKEND_URL

        const res = await fetch(`${backendAPIURL}/couples/${coupleSlug}`, {
            cache: "no-store",
        });

        if(!res) {
            console.log("Error in response")
        }

        coupleData = await res.json();

         if (!coupleData) {
             console.error("Data received is invalid.");
             console.log(coupleData);
             notFound();
        }

        console.log(coupleData);

    } catch(error) {
        console.error(`Error during data search for couple ${coupleSlug}`)
    }

  const now = DateTime.now();
  const start = DateTime.fromISO(coupleData.startDate);

  const diff = now.diff(start, ["years", "months", "days"]).toObject();

  const years = Math.floor(diff.years ?? 0);
  const months = Math.floor(diff.months ?? 0);
  const days = Math.floor(diff.days ?? 0);

    return ( <>
    <main className="w-full min-h-screen z-30 items-center bg-gradient-to-br from-purple-800/80 via-[#412131] to-rose-900/70">
        <div className="min-h-screen flex items-center justify-center p-4 text-white z-30">
        {/* <h1>oi {coupleData.name}</h1>

        <CardPreview
            name={coupleData.name}
            email={coupleData.email}
            title={coupleData.title}
            message={coupleData.message}
            startDate={coupleData.startDate}
            image={null}
        />

        <div>
        <span className="ml-45">foto</span>
        <img alt="" src={coupleData.image} className="absolut w-100 h-100"/>
        </div> */}

        <div>
        <CardFinal
            name={coupleData.name}
            email={coupleData.email}
            title={coupleData.title}
            message={coupleData.message}
            startDate={coupleData.startDate}
            years={years}
            months={months}
            days={days - 1}
            image={coupleData.image}
        />
        </div>
        </div>
    </main>
    </>
    )
}