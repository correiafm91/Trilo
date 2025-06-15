
const etapas = [
  {
    titulo: "1. Encontro de Estratégia",
    desc: "Entendemos seu conhecimento, público e objetivos. Construa com a gente o melhor formato para seu curso.",
    icone: (
      <span className="text-3xl text-[#6985c0]">🎯</span>
    )
  },
  {
    titulo: "2. Produção Profissional",
    desc: "Equipe, roteiro, gravação, edição: tudo com padrão de qualidade global, você focado apenas no conteúdo.",
    icone: (
      <span className="text-3xl text-[#6985c0]">🎬</span>
    )
  },
  {
    titulo: "3. Lançamento e Suporte",
    desc: "Do lançamento ao suporte, cuidamos do marketing, vendas e plataforma. Seu sucesso é o nosso compromisso.",
    icone: (
      <span className="text-3xl text-[#6985c0]">🚀</span>
    )
  }
];

const ComoFunciona = () => (
  <section className="w-full max-w-5xl mx-auto py-20 px-4">
    <h2 className="text-3xl font-bold mb-10 text-center">Como funciona?</h2>
    <div className="flex flex-col md:flex-row gap-8 md:justify-between">
      {etapas.map((e, idx) => (
        <div
          key={e.titulo}
          className="flex-1 bg-[#f6f8fb] rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-transform duration-200"
        >
          <div>{e.icone}</div>
          <h3 className="mt-4 text-xl font-bold text-[#6985c0]">{e.titulo}</h3>
          <p className="mt-2 text-base text-gray-700">{e.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ComoFunciona;
