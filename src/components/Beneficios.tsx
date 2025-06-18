
import { Award, Coins, ShieldCheck } from "lucide-react";

const beneficios = [
  {
    titulo: "Autoridade & Visibilidade",
    desc: "Potencialize sua marca pessoal e se destaque como referência no seu setor.",
    icone: <Award size={36} className="text-white drop-shadow-md bg-gray-700 rounded-full p-1.5" />
  },
  {
    titulo: "Novas Fontes de Renda",
    desc: "Cursos online oferecem receita escalável, previsível e ampliam seu impacto.",
    icone: <Coins size={34} className="text-white drop-shadow-md bg-gray-700 rounded-full p-1.5" />
  },
  {
    titulo: "Zero Complexidade Técnica",
    desc: "A Kirvo resolve tudo: tecnologia, edição, plataforma e atendimento ao aluno.",
    icone: <ShieldCheck size={36} className="text-white drop-shadow-md bg-gray-700 rounded-full p-1.5" />
  }
];

const Beneficios = () => (
  <section className="w-full max-w-5xl mx-auto py-16 px-4 bg-black">
    <h2 className="text-3xl font-black mb-10 text-center tracking-tight text-white animate-fade-in">
      Por que escolher a <span style={{ color: "#807f7e" }}>Kirvo?</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {beneficios.map((b, i) => (
        <div
          key={b.titulo}
          className="bg-gray-900 border border-gray-700 rounded-3xl p-8 flex flex-col items-center shadow-xl transition-all duration-300 group hover:scale-105 hover:shadow-2xl animate-fade-in backdrop-blur-sm"
          style={{ animationDelay: `${i * 150 + 100}ms` }}
        >
          <div className="group-hover:scale-125 transition-transform duration-300 mb-2 shadow">{b.icone}</div>
          <h3 className="mt-2 text-lg font-bold text-white text-center">{b.titulo}</h3>
          <p className="mt-2 text-base text-gray-300 text-center font-medium">{b.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Beneficios;
