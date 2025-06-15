
import { Award, Coins, ShieldCheck } from "lucide-react";

const beneficios = [
  {
    titulo: "Autoridade & Visibilidade",
    desc: "Potencialize sua marca pessoal e se destaque como referência no seu setor.",
    icone: <Award size={36} className="text-[#f05a39] drop-shadow-md bg-white/60 rounded-full p-1.5" />
  },
  {
    titulo: "Novas Fontes de Renda",
    desc: "Cursos online oferecem receita escalável, previsível e ampliam seu impacto.",
    icone: <Coins size={34} className="text-[#6985c0] drop-shadow-md bg-white/60 rounded-full p-1.5" />
  },
  {
    titulo: "Zero Complexidade Técnica",
    desc: "A Trilo resolve tudo: tecnologia, edição, plataforma e atendimento ao aluno.",
    icone: <ShieldCheck size={36} className="text-[#f05a39] drop-shadow-md bg-white/60 rounded-full p-1.5" />
  }
];

const Beneficios = () => (
  <section className="w-full max-w-5xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-black mb-10 text-center tracking-tight">
      Por que escolher a <span className="text-[#f05a39]">Trilo?</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {beneficios.map((b, i) => (
        <div
          key={b.titulo}
          className="bg-white/90 border border-[#fff0ea] rounded-3xl p-8 flex flex-col items-center shadow-xl transition-transform duration-300 group hover:scale-105 hover:shadow-2xl animate-fade-in"
          style={{ animationDelay: `${i * 80 + 100}ms` }}
        >
          <div className="group-hover:scale-125 transition-transform duration-200 mb-2 shadow">{b.icone}</div>
          <h3 className="mt-2 text-lg font-bold text-[#f05a39] text-center">{b.titulo}</h3>
          <p className="mt-2 text-base text-[#2d2d2d] text-center font-medium">{b.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Beneficios;
