"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function termsPage() {
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
        <h1 className="text-center text-4xl font-bold mt-10">Termos de Uso</h1>

        <div>
          <h2 className="mt-2 text-center text-sm">Última atualização: 26/11/2025</h2>
        </div>
          <div className="flex flex-col justify-between gap-5 mt-10">

            <div className="w-full p-3 bg-[#0d0d2b] border-1 rounded-2xl border-[#1d1d3a]">
              <h2 className="text-lg px-2 py-1 font-bold text-rose-400">1. Aceitação dos Termos</h2>
              <p className="px-2 justify-between font-normal text-sm text-left">Ao acessar e utilizar a nossa plataforma, você concorda em cumprir e ficar vinculado aos seguintes Termos de Uso. Caso não concorde com qualquer parte destes termos, você não deve utilizar a plataforma.</p>
            </div>

            <div className="w-full p-3 bg-[#0d0d2b] border-1 rounded-2xl border-[#1d1d3a]">
              <h2 className="text-lg px-2 py-1 font-bold text-rose-400">2. Descrição do Serviço</h2>
              <p className="px-2 justify-between font-normal text-sm text-left">Nossa plataforma permite que casais criem uma página personalizada preenchendo um formulário com seu nome, data de início do relacionamento, uma mensagem personalizada e até 5 fotos. Após o preenchimento, o casal é direcionado para o checkout e, ao concluir o pagamento, recebe um link com um QR Code via email.</p>
            </div>

            <div className="w-full p-3 bg-[#0d0d2b] border-1 rounded-2xl border-[#1d1d3a]">
              <h2 className="text-lg px-2 py-1 font-bold text-rose-400">3. Cadastro e Segurança</h2>
              <p className="px-2 justify-between font-normal text-sm text-left">Para utilizar o serviço, você deve fornecer um endereço de email válido. Não compartilharemos seu email com terceiros.</p>
            </div>
            <div className="w-full p-3 bg-[#0d0d2b] border-1 rounded-2xl border-[#1d1d3a]">
              <h2 className="text-lg px-2 py-1 font-bold text-rose-400">4. Privacidade</h2>
              <p className="px-2 justify-between font-normal text-sm text-left">Respeitamos a sua privacidade. Não utilizamos seus dados para qualquer tipo de processamento ou venda de dados para terceiros. O email cadastrado é utilizado apenas para o envio do link da página personalizada.</p>
            </div>

            <div className="w-full p-3 bg-[#0d0d2b] border-1 rounded-2xl border-[#1d1d3a]">
              <h2 className="text-lg px-2 py-1 font-bold text-rose-400">5. Conteúdo do Usuário</h2>
              <p className="px-2 justify-between font-normal text-sm text-left">Você é responsável pelo conteúdo que insere na plataforma, incluindo fotos, mensagens e informações do relacionamento. Não nos responsabilizamos por qualquer conteúdo impróprio ou ilegal carregado pelos usuários.</p>
            </div>

            <div className="w-full p-3 bg-[#0d0d2b] border-1 rounded-2xl border-[#1d1d3a]">
              <h2 className="text-lg px-2 py-1 font-bold text-rose-400">6. Pagamentos e Reembolsos</h2>
              <p className="px-2 justify-between font-normal text-sm text-left">Todos os pagamentos são processados através do PagBank. Após a conclusão do pagamento, o casal receberá um link para a página personalizada via email. Não oferecemos reembolsos, exceto em casos excepcionais a nosso exclusivo critério.</p>
            </div>

            <div className="w-full p-3 bg-[#0d0d2b] border-1 rounded-2xl border-[#1d1d3a]">
              <h2 className="text-lg px-2 py-1 font-bold text-rose-400">7. Modificações no Serviço</h2>
              <p className="px-2 justify-between font-normal text-sm text-left">Nós nos comprometemos a sempre manter o serviço ativo e disponível. No entanto, em circunstâncias excepcionais que fujam ao nosso controle, como questões legais, técnicas ou financeiras, reservamo-nos o direito de modificar ou descontinuar o serviço.
                Caso seja necessário descontinuar o serviço, tomaremos todas as medidas possíveis para notificar os usuários com antecedência e garantir a preservação das páginas ou oferecer soluções alternativas sempre que possível. A LoveLink não se responsabiliza por eventuais perdas decorrentes de modificações ou descontinuação em situações extraordinárias, mas faremos o possível para minimizar o impacto.</p>
            </div>     

            <div className="w-full p-3 bg-[#0d0d2b] border-1 rounded-2xl border-[#1d1d3a]">
              <h2 className="text-lg px-2 py-1 font-bold text-rose-400">8. Limitação de Responsabilidade</h2>
              <p className="px-2 justify-between font-normal text-sm text-left">Em nenhuma circunstância seremos responsáveis por qualquer dano indireto, incidental, especial ou consequente decorrente de ou relacionado ao uso ou incapacidade de uso da plataforma.</p>
            </div>

            <div className="w-full p-3 bg-[#0d0d2b] border-1 rounded-2xl border-[#1d1d3a]">
              <h2 className="text-lg px-2 py-1 font-bold text-rose-400">9. Alterações nos Termos</h2>
              <p className="px-2 justify-between font-normal text-sm text-left">Podemos atualizar estes Termos de Uso periodicamente. Quando fizermos isso, vamos corrigir a data da `última atualização` no topo desta página. É sua responsabilidade revisar estes Termos de Uso periodicamente para se manter informado sobre quaisquer alterações.</p>
            </div>

            <div className="w-full p-3 bg-[#0d0d2b] border-1 rounded-2xl border-[#1d1d3a]">
              <h2 className="text-lg px-2 py-1 font-bold text-rose-400">10. Contato</h2>
              <p className="px-2 justify-between font-normal text-sm text-left">Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco pelo email: lovelinkapp00@gmail.com.</p>
            </div>
          </div>
      </div>
    </main>
    </> );
};