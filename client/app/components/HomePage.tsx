import React from "react";
import Link from "next/link";
import Image from "next/image";
import CardPreview from "./CardPreview";

export default function HomePage() {

    return (
    <main className="min-h-screen z-10 bg-gradient-to-b from-[#0d0d2b] via-[#141432] to-[#020203]">
        <div className="absolute mt-15 inset-0 bg-gradient-to-b from-[#0d0d2b] via-[#141432] to-[#020203]">
        <section className="relative flex items-center justify-center overflow-x-clip">
            <div className="relative z-10 container mx-auto px-4 top flex flex-col items-center justify-between gap-8 xm:flex-row">
                <div className="text-left max-m:ml-0 max-l:ml-7 l:mx-10 ll:ml-10 lll:ml-65">
                  <h1 className="text-6xl font-bold mb-5 -mt-15 max-xpp:text-4xl max-pp:text-[42px] max-p:text-[46px] max-m:text-[52px] max-xm:text-6xl max-m:mt-15 max-xm:mt-18 ">
                      <span className="text-rose-500">
                            Eternize </span>
                            cada momento do seu
                      <span className="text-rose-400 animate-pulse"> AMOR </span>
                  </h1>
                    <p className="text-xl text-white/90 mb-8
                      max-m:text-lg
                      max-p:text-lg
                      max-pp:text-[17px]
                      max-xpp:text-[15.4px]"
                      >
                      Crie um site personalizado com contador de tempo do seu relacionamento e compartilhe memórias especiais
                      com seu parceiro em um <span className="text-rose-400">presente único.</span><br/>
                      <span className="font-bold text-xl text-rose-400 max-xpp:text-xl max-pp:text-[21px] max-p:text-[22px] max-m:text-2xl max-xm:text-2xl">Leva menos de 5 minutos!</span>
                    </p>
                  
                  <Link href="/create" className="inline-block mx-auto rounded-full bg-rose-700 text-white font-medium select-none
                    px-10 py-5 text-2xl shadow-lg shadow-rose-500/40 hover:bg-rose-600
                    transition-all duration-150 hover:shadow-rose-500/70
                    max-xm:text-2xl max-xm:w-9/11 max-xm:text-center max-xm:items-center max-xm:block max-xm:m-auto
                    max-m:text-2xl
                    max-p:text-[22px] max-p:w-10/10
                    max-pp:text-[21px]
                    max-xpp:py-4 max-xpp:text-xl
                    ">
                    Criar meu LoveLink !
                  </Link>
                </div>

                {/* Right side - Preview*/}
              <div className="w-full flex flex-col items-center justify-center mt-12
                xl:mt-15
                lll:mr-30
                ll:mt-7 ll:mr-10">
                <div className="flex flex-wrap justify-center scale-100">
                    <CardPreview
                          name="Ariel e Letícia"
                          email=""
                          title="Feliz 6 Meses Amor"
                          message="Aqui um texto para que nunca se esqueça do quanto eu te amo..."
                          startDate={new Date("2022-04-03")}
                          image={null}
                          background="rose"
                        />
                </div>
              </div>
            </div>

            </section>

        <section id="como-fazer" className="relative w-full py-50 z-30 l:px-100 select-none">
            <div className="relative text-center mb-15">
              <h2 className="text-[42px] font-bold text-white mb-3">Como Fazer?</h2>
            </div>
          <div className="container grid l:grid-cols-4 gap-6 mx-auto px-6 m:max-xm:w-7/10">

              <div className="rounded-2xl bg-[#18183c] shadow-2xl h-100 p-5 text-center flex flex-col items-center
              max-xm:mx-auto m:max-xm:w-6/10 m:max-xm:h-100 max-m:w-7/10 max-m:h-90">
                <p className="text-2xl font-bold text-white"><span className="text-3xl text-rose-400">1. </span> Preencha os Dados</p>
                <Image
                  src="https://i.postimg.cc/FRWf3LR0/love-link-form.png"
                  alt=""
                  width={300}
                  height={300}
                  className="mt-5 rounded-2xl"
                />
                <p className="text-sm text-white mt-5">Coloque fotos, música e escreva uma mensagem personalizada para quem ama</p>
              </div>

              <div className="rounded-2xl bg-[#18183c] shadow-2xl h-100 p-5 text-center flex flex-col items-center
              max-xm:mx-auto m:max-xm:w-6/10 max-m:w-7/10 max-m:h-70">
                <p className="text-2xl font-bold text-white"><span className="text-3xl text-rose-400 text-left">2. </span> Faça o Pagamento</p>
                <Image
                  src="https://i.postimg.cc/FHpx4TZ9/love-link-payment.png"
                  alt=""
                  width={170}
                  height={170}
                  className="mt-1 rounded-2xl"
                />
                <p className="text-sm text-white mt-5.5">Faça seu pagamento de forma totalmente segura na página de pagamento PagBank<br/>Aceitamos <span className="text-green-500"><strong>PIX ou Cartão</strong></span></p>
              </div>

              <div className="rounded-2xl bg-[#18183c] shadow-2xl h-100 p-5 text-center flex flex-col items-center
              max-xm:mx-auto m:max-xm:w-6/10 max-m:w-7/10 max-m:h-65">
                <p className="text-2xl font-bold text-white"><span className="text-3xl text-rose-400">3. </span> Receba o seu acesso no Email</p>
                <Image
                  src="https://i.postimg.cc/tJ9jqSy5/love-link-email.png"
                  alt=""
                  width={200}
                  height={200}
                  className="mt-5 rounded-3xl"
                />
                <p className="text-sm text-white mt-9">Um email com o acesso à página <span className="text-rose-400">+ QR Code personalizado</span> será enviado após o pagamento ser confirmado</p>
              </div>

              <div className="rounded-2xl bg-[#18183c] shadow-2xl h-160 p-5 text-center flex flex-col items-center
                max-xm:mx-auto m:max-xm:w-6/10 max-m:w-7/10 max-m:h-112">
                <p className="text-2xl font-bold text-white"><span className="text-3xl text-rose-400">4. </span> Surpreenda seu Amor</p>
                <Image
                  src="https://i.postimg.cc/X7q3G5KV/love-link-couple-page.png"
                  alt=""
                  width={180}
                  height={180}
                  className="mt-5 rounded-2xl"
                />
                <p className="text-sm text-white mt-5">Agora é só compartilhar com seu amor e fazer deste presente um grande momento</p><p className="text-base text-rose-400 font-bold mt-4 px-3">Imprima o QR Code para surpreender ainda mais a pessoa que ama</p>
              </div>
          </div>
      </section>

        {/* <section className="relative w-full py-50 mt-100 z-30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-15">
              <h2 className="text-4xl font-bold text-white mb-3">Pergutas Frequentes</h2>
            </div>

            <div className=" w-5/7 mx-auto max-m:w-full">
                <p className="text-3xl mt-5 font-bold text-white">1. Preencha os Dados</p>
                <p className="text-3xl mt-5 font-bold text-white">2. Faça o Pagamento</p>
                <p className="text-3xl mt-5 font-bold text-white">3. Receba o seu Site QR Code no e-mail</p>
                <p className="text-3xl mt-5 font-bold text-white">4. Surpreenda seu amor</p>
            </div>
          </div>
      </section> */}

        </div>
    </main>
    )
}