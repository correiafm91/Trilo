
import { Target, Clapperboard, Rocket } from "lucide-react";

const etapas = [
  {
    titulo: "1. Encontro de Estratégia",
    desc: "Entendemos seu conhecimento, público e objetivos. Juntos desenhamos o melhor formato para o seu curso digital.",
    icone: <Target size={44} className="text-white drop-shadow-lg bg-gray-700 rounded-full p-2" />
  },
  {
    titulo: "2. Produção Profissional",
    desc: "Equipe, roteiro, gravação, edição — padrão global, você só foca no conteúdo. Todo o resto é conosco.",
    icone: <Clapperboard size={42} className="text-white drop-shadow-lg bg-gray-700 rounded-full p-2" />
  },
  {
    titulo: "3. Lançamento e Suporte",
    desc: "Cuidamos de marketing, vendas, plataforma e suporte ao aluno. Seu sucesso é nosso compromisso.",
    icone: <Rocket size={44} className="text-white drop-shadow-lg bg-gray-700 rounded-full p-2" />
  }
];

const ComoFunciona = () => (
  <section className="w-full max-w-5xl mx-auto py-20 px-4 bg-black">
    <h2 className="text-3xl font-black mb-12 text-center tracking-tight text-white animate-fade-in">
      Como funciona <span style={{ color: "#807f7e" }}>na prática?</span>
    </h2>
    <div className="flex flex-col md:flex-row gap-10 md:gap-8 md:justify-between">
      {etapas.map((e, i) => (
        <div
          key={e.titulo}
          className="flex-1 bg-gray-900 border border-gray-700 rounded-3xl shadow-2xl p-10 flex flex-col items-center group hover:scale-105 hover:shadow-gray-800/20 transition-transform duration-300 animate-fade-in backdrop-blur-sm"
          style={{ animationDelay: `${i * 200 + 200}ms` }}
        >
          <div className="mb-3 group-hover:scale-125 transition-transform duration-300">{e.icone}</div>
          <h3 className="mt-1 text-xl font-bold text-white text-center">{e.titulo}</h3>
          <p className="mt-3 text-base text-gray-300 text-center font-medium">{e.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ComoFunciona;
