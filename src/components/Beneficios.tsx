
const beneficios = [
  {
    titulo: "Autoridade & Visibilidade",
    desc: "Potencialize sua marca pessoal e se destaque como referência no seu setor.",
    icone: (
      <span className="text-2xl text-[#6985c0]">🏆</span>
    )
  },
  {
    titulo: "Novas Fontes de Renda",
    desc: "Cursos online oferecem receita escalável, previsível e ampliam seu impacto.",
    icone: (
      <span className="text-2xl text-[#6985c0]">💸</span>
    )
  },
  {
    titulo: "Zero Complexidade Técnica",
    desc: "A Trilo resolve tudo: tecnologia, edição, plataforma e atendimento ao aluno.",
    icone: (
      <span className="text-2xl text-[#6985c0]">🔒</span>
    )
  }
];

const Beneficios = () => (
  <section className="w-full max-w-5xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-bold mb-10 text-center">
      Por que escolher a <span className="text-[#6985c0]">Trilo?</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {beneficios.map((b, idx) => (
        <div
          key={b.titulo}
          className="bg-[#6985c0] bg-opacity-10 rounded-2xl p-8 flex flex-col items-center shadow hover:scale-105 transition-transform"
        >
          <div>{b.icone}</div>
          <h3 className="mt-4 text-xl font-bold text-[#6985c0] text-center">{b.titulo}</h3>
          <p className="mt-2 text-base text-[#1a1a1a] text-center">{b.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Beneficios;
