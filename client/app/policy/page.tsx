"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function policyPage() {
    return ( <>
    <main className="w-full min-h-screen z-50 items-center overflow-hidden text-white">
        <header className={`absolute top-0 left-0 right-0 z-20
        xl:left-65 xl:right-60
        lll:left-25 lll:right-25
        ll:left-20 ll:right-20
        l:left-15 l:right-15`}/>
        <nav className="flex items-center px-5 py-3 justify-between 
        l:mx-15 xm:mx-8 max-m:flex-col max-m:items-start max-m:px-4">
          
        <Link href="/" className="flex items-center gap-2">
        <Image
        src="https://i.postimg.cc/fbwy95Ww/heart-icon.png"
        alt=""
        width={60}
        height={60}
        className="w-15 max-xm:w-13 max-m:w-12 max-pp:w-10 select-none"
        />
        <span className="text-3xl font-bold text-white max-xm:text-2xl max-pp:text-xl select-none">
          LoveLink
        </span>
        </Link>
      </nav>

      <div className="w-6/10 mx-auto justify-center l:w-5/10 max-m:w-8/10">
        <h1 className="text-center text-4xl font-bold mt-10">Política de Privacidade</h1>

        <div>
          <h2 className="mt-2 text-center text-sm">Última atualização: 26/11/2025</h2>
        </div>
          <div className="flex flex-col justify-between gap-5 mt-10">

            <div className="w-full p-3 bg-[#0d0d2b] border-1 rounded-2xl border-[#1d1d3a]">
              <h2 className="text-lg px-2 py-1 font-bold text-rose-400">1. Introdução</h2>
              <p className="px-2 pb-1 justify-between font-normal text-sm text-left">Sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você utiliza nossa plataforma.</p>
            </div>

            <div className="w-full p-3 bg-[#0d0d2b] border-1 rounded-2xl border-[#1d1d3a]">
              <h2 className="text-lg px-2 py-1 font-bold text-rose-400">2. Informações que Coletamos</h2>
              <p className="px-2 pb-1 justify-between font-normal text-sm text-left">Coletamos as seguintes informações quando você utiliza nossa plataforma:Informações de Cadastro: Nome, data de início do relacionamento, mensagem personalizada, fotos do casal e endereço de email cadastrado. Informações de Pagamento: Endereço de email cadastrado no PagBank para processamento do pagamento e envio do link da página personalizada.</p>
            </div>

            <div className="w-full p-3 bg-[#0d0d2b] border-1 rounded-2xl border-[#1d1d3a]">
              <h2 className="text-lg px-2 py-1 font-bold text-rose-400">3. Como Usamos Suas Informações</h2>
              <p className="px-2 pb-1 justify-between font-normal text-sm text-left">Utilizamos suas informações para: Processar o pagamento e enviar o link da página personalizada via email. Personalizar e criar a página do casal com as informações fornecidas. Melhorar nossos serviços e suporte ao cliente.</p>
            </div>
            <div className="w-full p-3 bg-[#0d0d2b] border-1 rounded-2xl border-[#1d1d3a]">
              <h2 className="text-lg px-2 py-1 font-bold text-rose-400">4. Compartilhamento de Informações</h2>
              <p className="px-2 pb-1 justify-between font-normal text-sm text-left">Não compartilhamos suas informações pessoais com terceiros, exceto conforme necessário para processar pagamentos (PagBank) e conforme exigido por lei.</p>
            </div>

            <div className="w-full p-3 bg-[#0d0d2b] border-1 rounded-2xl border-[#1d1d3a]">
              <h2 className="text-lg px-2 py-1 font-bold text-rose-400">5. Segurança</h2>
              <p className="px-2 pb-1justify-between font-normal text-sm text-left">Implementamos medidas de segurança para proteger suas informações pessoais contra acesso, uso ou divulgação não autorizados. No entanto, nenhuma transmissão de dados pela internet é completamente segura, e não podemos garantir a segurança absoluta.</p>
            </div>

            <div className="w-full p-3 bg-[#0d0d2b] border-1 rounded-2xl border-[#1d1d3a]">
              <h2 className="text-lg px-2 py-1 font-bold text-rose-400">6. Retenção de Dados</h2>
              <p className="px-2 pb-1 justify-between font-normal text-sm text-left">Reteremos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletadas ou conforme exigido por lei.</p>
            </div>

            <div className="w-full p-3 bg-[#0d0d2b] border-1 rounded-2xl border-[#1d1d3a]">
              <h2 className="text-lg px-2 py-1 font-bold text-rose-400">7. Seus Direitos</h2>
              <p className="px-2 pb-1 justify-between font-normal text-sm text-left">Você tem o direito de acessar ou excluir suas informações pessoais. Para exercer esses direitos, entre em contato conosco pelo email: lovelinkapp00@gmail.com</p>
            </div>     

            <div className="w-full p-3 bg-[#0d0d2b] border-1 rounded-2xl border-[#1d1d3a]">
              <h2 className="text-lg px-2 py-1 font-bold text-rose-400">8. Alterações nesta Política de Privacidade</h2>
              <p className="px-2 pb-1 justify-between font-normal text-sm text-left">Podemos atualizar esta Política de Privacidade periodicamente. Quando fizermos isso, vamos corrigir a data da `última atualização` no topo desta página. É sua responsabilidade revisar esta política periodicamente para se manter informado sobre quaisquer alterações.</p>
            </div>

            <div className="w-full p-3 bg-[#0d0d2b] border-1 rounded-2xl border-[#1d1d3a]">
              <h2 className="text-lg px-2 py-1 font-bold text-rose-400">9. Contato</h2>
              <p className="px-2 pb-1 justify-between font-normal text-sm text-left">Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco pelo email: lovelinkapp00@gmail.com</p>
            </div>
          </div>
      </div>
    </main>
    </> );
};