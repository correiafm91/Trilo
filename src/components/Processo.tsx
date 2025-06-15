
import { User, FileText, Video, Globe, TrendingUp } from "lucide-react";

const processos = [
  {
    numero: "01",
    titulo: "Análise do seu conhecimento",
    descricao: "Identificamos sua expertise e definimos o público-alvo ideal para maximizar o potencial do seu curso.",
    icone: User,
    cor: "from-[#f05a39] to-[#c84527]"
  },
  {
    numero: "02", 
    titulo: "Criação do roteiro completo",
    descricao: "Nossa equipe desenvolve todo o roteiro estruturado, com metodologia pedagógica para garantir aprendizado efetivo.",
    icone: FileText,
    cor: "from-[#c84527] to-[#a63620]"
  },
  {
    numero: "03",
    titulo: "Gravação e edição profissional", 
    descricao: "Você grava seguindo nosso roteiro e nossa equipe cuida de toda a edição, motion graphics e finalização.",
    icone: Video,
    cor: "from-[#a63620] to-[#8b2e1a]"
  },
  {
    numero: "04",
    titulo: "Publicação em plataformas",
    descricao: "Colocamos seu curso nas principais plataformas de ensino online com toda a configuração técnica necessária.",
    icone: Globe,
    cor: "from-[#8b2e1a] to-[#702615]"
  },
  {
    numero: "05",
    titulo: "Estratégias de marketing",
    descricao: "Implementamos campanhas de marketing digital personalizadas para alavancar as vendas do seu curso.",
    icone: TrendingUp,
    cor: "from-[#702615] to-[#f05a39]"
  }
];

const Processo = () => (
  <section className="w-full max-w-7xl mx-auto py-20 px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
        Nosso <span className="text-[#f05a39]">Processo</span> Completo
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        Do seu conhecimento ao curso online de sucesso: cuidamos de cada detalhe para você focar no que sabe fazer melhor
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {processos.map((processo, i) => {
        const IconeComponente = processo.icone;
        return (
          <div
            key={processo.numero}
            className="bg-white rounded-3xl p-6 shadow-xl border border-[#ffe5de] hover:shadow-2xl hover:scale-105 transition-all duration-300 group animate-fade-in relative overflow-hidden"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            {/* Background gradient */}
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${processo.cor} opacity-10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500`} />
            
            <div className="relative z-10">
              {/* Número */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-[#f05a39] opacity-50">
                  {processo.numero}
                </span>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${processo.cor} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                  <IconeComponente size={24} className="text-white" />
                </div>
              </div>

              {/* Conteúdo */}
              <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
                {processo.titulo}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {processo.descricao}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default Processo;
