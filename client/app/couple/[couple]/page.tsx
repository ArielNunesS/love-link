import Card from "../../components/Card";
import { notFound } from "next/navigation";
import { DateTime } from "luxon";
import "dotenv/config";

export default async function CouplePage({ params }: { params: Promise<{ couple: string }> }) {
    const resolvedParams = await params
    const coupleId = resolvedParams.couple;
    let coupleData = null;

    try {
        const backendAPIURL = process.env.NEXT_PUBLIC_BACKEND_URL

        const res = await fetch(`${backendAPIURL}/couples/${coupleId}`, {
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
        console.error(`Error during data search for couple ${coupleId}`)
    }

  const now = DateTime.now();
  const start = DateTime.fromISO(coupleData.startDate);

  const diff = now.diff(start, ["years", "months", "days"]).toObject();

  const years = Math.floor(diff.years ?? 0);
  const months = Math.floor(diff.months ?? 0);
  const days = Math.floor(diff.days ?? 0);

    return ( <>
        <div className="min-h-screen bg-[#09091d] flex items-center justify-center p-4 text-white">

        <h1>oi {coupleData.name}</h1>

        <Card 
            name={coupleData.name}
            email={coupleData.email}
            title={coupleData.title}
            message={coupleData.message}
            startDate={coupleData.startDate}
            image={null}
        />

              {/* Counter Card */}
              <div className="bg-white/10 backdrtop-blur-sm rounded-xl p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-white font-medium cursor-default">Tempo Juntos</h4>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white/5 rounded-lg p-2">
                    <p className="text-rose-400 font-bold text-xl">{(years)}</p>
                    <p className="text-white/70 text-xs cursor-default">anos</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2">
                    <p className="text-rose-400 font-bold text-xl cursor-default">{months}</p>
                    <p className="text-white/70 text-xs cursor-default">meses</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2">
                    <p className="text-rose-400 font-bold text-xl cursor-default">{days - 1}</p>
                    <p className="text-white/70 text-xs cursor-default">dias</p>
                  </div>
                </div>
              </div>
              <div>

        <span className="ml-45">foto</span>
         <img alt="" src={coupleData.image} className="absolut w-100 h-100"/>
         </div>

        </div>
    </>
    )
}