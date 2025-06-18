
import { Trophy, Users, Award, Globe2 } from "lucide-react";
import { useState, useEffect } from "react";

const estatisticas = [
  {
    numero: "134+",
    descricao: "Cursos lançados",
    icone: Trophy,
    cor: "text-gray-400"
  },
  {
    numero: "1M+",
    descricao: "Alunos impactados",
    icone: Users,
    cor: "text-gray-400"
  },
  {
    numero: "5M+",
    descricao: "Em vendas",
    icone: Award,
    cor: "text-gray-400"
  },
  {
    numero: "4+",
    descricao: "Países atendidos",
    icone: Globe2,
    cor: "text-gray-400"
  },
  {
    numero: "6",
    descricao: "Anos de mercado",
    icone: Award,
    cor: "text-gray-400"
  }
];

const AnimatedNumber = ({ numero, delay }: { numero: string; delay: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span 
      className={`text-3xl md:text-4xl font-black text-white mb-2 transition-all duration-700 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      {numero}
    </span>
  );
};

const LiderancaLatina = () => (
  <section className="w-full bg-black py-20 px-4 relative overflow-hidden">
    {/* Background decorativo */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-10 left-10 w-40 h-40 bg-gray-600 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-gray-600 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gray-600 rounded-full blur-2xl"></div>
    </div>

    <div className="relative z-10 max-w-6xl mx-auto text-center">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 bg-gray-800 backdrop-blur-sm rounded-full px-6 py-3 mb-6 animate-fade-in">
          <Trophy className="text-gray-300" size={24} />
          <span className="text-gray-300 font-bold text-lg">Liderança Continental</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight animate-fade-in" style={{ animationDelay: "200ms" }}>
          A Maior Empresa<br />
          de Produção de Cursos<br />
          da <span style={{ color: "#807f7e" }}>América Latina</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed animate-fade-in" style={{ animationDelay: "400ms" }}>
          Transformamos conhecimento em negócios digitais há mais de uma década, 
          sendo referência absoluta em educação online em todo o continente.
        </p>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {estatisticas.map((stat, i) => {
          const IconeComponente = stat.icone;
          return (
            <div
              key={stat.descricao}
              className="bg-gray-900 backdrop-blur-sm rounded-3xl p-6 hover:bg-gray-800 transition-all duration-300 group animate-fade-in border border-gray-700"
              style={{ animationDelay: `${i * 150 + 600}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-2xl bg-gray-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconeComponente size={32} className="text-gray-300" />
                </div>
                <AnimatedNumber numero={stat.numero} delay={i * 150 + 800} />
                <span className="text-gray-300 font-medium text-center">
                  {stat.descricao}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default LiderancaLatina;
