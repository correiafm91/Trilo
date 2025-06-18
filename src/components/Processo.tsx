
import { User, FileText, Video, Globe, TrendingUp } from "lucide-react";

const processos = [
  {
    numero: "01",
    titulo: "Análise do seu conhecimento",
    descricao: "Identificamos sua expertise e definimos o público-alvo ideal para maximizar o potencial do seu curso.",
    icone: User,
    cor: "from-gray-600 to-gray-800"
  },
  {
    numero: "02", 
    titulo: "Criação do roteiro completo",
    descricao: "Nossa equipe desenvolve todo o roteiro estruturado, com metodologia pedagógica para garantir aprendizado efetivo.",
    icone: FileText,
    cor: "from-gray-600 to-gray-800"
  },
  {
    numero: "03",
    titulo: "Gravação e edição profissional", 
    descricao: "Você grava seguindo nosso roteiro e nossa equipe cuida de toda a edição, motion graphics e finalização.",
    icone: Video,
    cor: "from-gray-600 to-gray-800"
  },
  {
    numero: "04",
    titulo: "Publicação em plataformas",
    descricao: "Colocamos seu curso nas principais plataformas de ensino online com toda a configuração técnica necessária.",
    icone: Globe,
    cor: "from-gray-600 to-gray-800"
  },
  {
    numero: "05",
    titulo: "Estratégias de marketing",
    descricao: "Implementamos campanhas de marketing digital personalizadas para alavancar as vendas do seu curso.",
    icone: TrendingUp,
    cor: "from-gray-600 to-gray-800"
  }
];

const Processo = () => (
  <section className="w-full max-w-7xl mx-auto py-20 px-4 bg-black">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight text-white animate-fade-in">
        Nosso <span style={{ color: "#807f7e" }}>Processo</span> Completo
      </h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
        Do seu conhecimento ao curso online de sucesso: cuidamos de cada detalhe para você focar no que sabe fazer melhor
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {processos.map((processo, i) => {
        const IconeComponente = processo.icone;
        return (
          <div
            key={processo.numero}
            className="bg-gray-900 rounded-3xl p-6 shadow-xl border border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 group animate-fade-in relative overflow-hidden backdrop-blur-sm"
            style={{ animationDelay: `${i * 150 + 400}ms` }}
          >
            {/* Background gradient */}
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${processo.cor} opacity-10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500`} />
            
            <div className="relative z-10">
              {/* Número */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-gray-500 opacity-50">
                  {processo.numero}
                </span>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${processo.cor} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                  <IconeComponente size={24} className="text-white" />
                </div>
              </div>

              {/* Conteúdo */}
              <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                {processo.titulo}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
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
