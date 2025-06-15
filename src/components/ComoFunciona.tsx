
const etapas = [
  {
    titulo: "1. Encontro de Estratégia",
    desc: "Entendemos seu conhecimento, público e objetivos e juntos desenhamos o melhor formato para o seu curso digital.",
    icone: (
      <span className="text-3xl text-[#f05a39]">🎯</span>
    )
  },
  {
    titulo: "2. Produção Profissional",
    desc: "Equipe, roteiro, gravação, edição — padrão global, você só foca no conteúdo. Todo resto é conosco.",
    icone: (
      <span className="text-3xl text-[#f05a39]">🎬</span>
    )
  },
  {
    titulo: "3. Lançamento e Suporte",
    desc: "Cuidamos de marketing, vendas, plataforma e suporte ao aluno. Seu sucesso é nosso compromisso.",
    icone: (
      <span className="text-3xl text-[#f05a39]">🚀</span>
    )
  }
];

const ComoFunciona = () => (
  <section className="w-full max-w-5xl mx-auto py-20 px-4">
    <h2 className="text-3xl font-black mb-10 text-center">
      Como funciona?
    </h2>
    <div className="flex flex-col md:flex-row gap-8 md:justify-between">
      {etapas.map((e) => (
        <div
          key={e.titulo}
          className="flex-1 bg-white border border-[#fff0ea] rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-[1.04] hover:shadow-2xl transition-transform duration-300"
        >
          <div className="mb-2">{e.icone}</div>
          <h3 className="mt-1 text-xl font-bold text-[#f05a39]">{e.titulo}</h3>
          <p className="mt-2 text-base text-gray-700 text-center font-medium">{e.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ComoFunciona;
