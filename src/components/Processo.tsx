
import { Search, Lightbulb, Video, Rocket, Trophy } from "lucide-react";

const processos = [
  {
    numero: "01",
    titulo: "Análise e Pesquisa",
    desc: "Analisamos seu conhecimento, mercado e concorrência para identificar as melhores oportunidades.",
    icone: <Search size={40} className="text-[#f05a39]" />
  },
  {
    numero: "02",
    titulo: "Estratégia e Planejamento",
    desc: "Desenvolvemos a estratégia completa do curso, definindo formato, público-alvo e estrutura de conteúdo.",
    icone: <Lightbulb size={40} className="text-[#f05a39]" />
  },
  {
    numero: "03",
    titulo: "Produção de Conteúdo",
    desc: "Criamos roteiros, gravamos vídeos profissionais e editamos todo o material com qualidade cinematográfica.",
    icone: <Video size={40} className="text-[#f05a39]" />
  },
  {
    numero: "04",
    titulo: "Plataforma e Tecnologia",
    desc: "Configuramos a plataforma, sistemas de pagamento e toda a infraestrutura tecnológica necessária.",
    icone: <Rocket size={40} className="text-[#f05a39]" />
  },
  {
    numero: "05",
    titulo: "Lançamento e Otimização",
    desc: "Executamos o lançamento com estratégias de marketing e fazemos otimizações contínuas para maximizar resultados.",
    icone: <Trophy size={40} className="text-[#f05a39]" />
  }
];

const Processo = () => (
  <section className="w-full max-w-7xl mx-auto py-20 px-4 bg-gradient-to-b from-white to-[#fff7f4]">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
        Nosso <span className="text-[#f05a39]">Processo</span> Completo
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Seguimos uma metodologia testada e aprovada para transformar seu conhecimento em um curso de sucesso
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
      {processos.map((processo, i) => (
        <div
          key={processo.titulo}
          className="bg-white rounded-3xl p-8 shadow-xl border border-[#ffe5de] hover:shadow-2xl hover:scale-105 transition-all duration-300 group animate-fade-in relative overflow-hidden"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          {/* Número do processo */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-[#f05a39] to-[#c84527] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">{processo.numero}</span>
          </div>

          {/* Background pattern */}
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#f05a39]/5 to-[#f05a39]/10 rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-500" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
              {processo.icone}
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {processo.titulo}
            </h3>
            
            <p className="text-gray-600 font-medium leading-relaxed">
              {processo.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Processo;
