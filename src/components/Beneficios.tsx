
const beneficios = [
  {
    titulo: "Autoridade & Visibilidade",
    desc: "Potencialize sua marca pessoal e se destaque como referência no seu setor.",
    icone: (
      <span className="text-2xl md:text-3xl text-[#f05a39]">🏆</span>
    )
  },
  {
    titulo: "Novas Fontes de Renda",
    desc: "Cursos online oferecem receita escalável, previsível e ampliam seu impacto.",
    icone: (
      <span className="text-2xl md:text-3xl text-[#f05a39]">💸</span>
    )
  },
  {
    titulo: "Zero Complexidade Técnica",
    desc: "A Trilo resolve tudo: tecnologia, edição, plataforma e atendimento ao aluno.",
    icone: (
      <span className="text-2xl md:text-3xl text-[#f05a39]">🔒</span>
    )
  }
];

const Beneficios = () => (
  <section className="w-full max-w-5xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-black mb-10 text-center">
      Por que escolher a <span className="text-[#f05a39]">Trilo?</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {beneficios.map((b) => (
        <div
          key={b.titulo}
          className="bg-white/80 border border-[#fff0ea] rounded-2xl p-8 flex flex-col items-center shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 group"
        >
          <div className="group-hover:scale-125 transition-transform duration-200 mb-2">{b.icone}</div>
          <h3 className="mt-2 text-xl font-bold text-[#f05a39] text-center">{b.titulo}</h3>
          <p className="mt-2 text-base text-[#2d2d2d] text-center font-medium">{b.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Beneficios;
