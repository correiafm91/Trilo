
import { Trophy, Users, Award, Globe2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const estatisticas = [
  {
    numero: 134,
    sufixo: "+",
    descricao: "Cursos lançados",
    icone: Trophy,
    cor: "text-yellow-400"
  },
  {
    numero: 1000000,
    sufixo: "+",
    descricao: "Alunos impactados",
    icone: Users,
    cor: "text-blue-400",
    formato: "compacto" // Para mostrar como 1M+
  },
  {
    numero: 5000000,
    sufixo: "+",
    descricao: "Em vendas",
    icone: Award,
    cor: "text-green-400",
    formato: "compacto" // Para mostrar como 5M+
  },
  {
    numero: 4,
    sufixo: "+",
    descricao: "Países atendidos",
    icone: Globe2,
    cor: "text-purple-400"
  },
  {
    numero: 6,
    sufixo: "",
    descricao: "Anos de mercado",
    icone: Award,
    cor: "text-orange-400"
  }
];

const AnimatedCounter = ({ numero, sufixo, formato, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = numero / steps;
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= numero) {
          setCount(numero);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, numero, delay]);

  const formatNumber = (num) => {
    if (formato === "compacto") {
      if (num >= 1000000) {
        return `${Math.floor(num / 1000000)}M`;
      }
      if (num >= 1000) {
        return `${Math.floor(num / 1000)}K`;
      }
    }
    return num.toLocaleString();
  };

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-black text-white">
      {formatNumber(count)}{sufixo}
    </span>
  );
};

const LiderancaLatina = () => (
  <section className="w-full bg-[#ff4a4a] py-20 px-4 relative overflow-hidden">
    {/* Background animado */}
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-white via-white/80 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-l from-white via-white/60 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-white via-white/70 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>

    {/* Partículas flutuantes */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>

    <div className="relative z-10 max-w-6xl mx-auto text-center">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 hover:bg-white/30 transition-all duration-300 hover:scale-105 animate-fade-in border border-white/30 shadow-lg">
          <Trophy className="text-white animate-pulse" size={24} />
          <span className="text-white font-bold text-lg">Liderança Continental</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
          A Maior Empresa<br />
          <span className="bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent animate-pulse">
            de Produção de Cursos
          </span><br />
          da América Latina
        </h2>
        
        <p className="text-xl text-white max-w-3xl mx-auto font-medium leading-relaxed animate-fade-in opacity-90 hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '0.4s' }}>
          Transformamos conhecimento em negócios digitais há mais de uma década, 
          sendo referência absoluta em educação online em todo o continente.
        </p>
      </div>

      {/* Estatísticas com animações incríveis */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {estatisticas.map((stat, i) => {
          const IconeComponente = stat.icone;
          return (
            <div
              key={stat.descricao}
              className="group bg-white/10 backdrop-blur-md rounded-3xl p-6 hover:bg-white/20 transition-all duration-500 animate-fade-in border border-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-white/20 hover:scale-110 transform-gpu"
              style={{ 
                animationDelay: `${i * 150}ms`,
                transform: 'translateZ(0)' // Força aceleração de hardware
              }}
            >
              <div className="flex flex-col items-center relative">
                {/* Ícone com efeitos especiais */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl relative overflow-hidden`}>
                  {/* Efeito de brilho */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <IconeComponente size={32} className={`${stat.cor} relative z-10 group-hover:text-white transition-colors duration-300`} />
                </div>

                {/* Número animado */}
                <div className="mb-2 relative">
                  <AnimatedCounter 
                    numero={stat.numero} 
                    sufixo={stat.sufixo}
                    formato={stat.formato}
                    delay={i * 200}
                  />
                  {/* Efeito de partículas no hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(3)].map((_, idx) => (
                      <div
                        key={idx}
                        className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                        style={{
                          left: `${20 + idx * 30}%`,
                          top: `${10 + idx * 20}%`,
                          animationDelay: `${idx * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Descrição */}
                <span className="text-white font-medium text-center group-hover:text-white transition-colors duration-300 relative">
                  {stat.descricao}
                  {/* Sublinhado animado */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </span>

                {/* Efeito de ondas no hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl border-2 border-white/30 animate-ping"></div>
                  <div className="absolute inset-0 rounded-3xl border border-white/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Indicador de scroll animado */}
      <div className="mt-16 flex justify-center animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  </section>
);

export default LiderancaLatina;
