import Card from "../../components/Card";

export default function CriarPage() {
    return (
        <main className="min-h-screen flex items-center justify-end bg-[#09091d] px-4">
            <Card   
                nome={"João e Maria"}
                mensagem={"mensagem"}
                anos={2}
                meses={7}
                dias={15}
                horas={3}
                minutos={24}
                segundos={12}
                fotos={[]} />
        </main>
    );
}