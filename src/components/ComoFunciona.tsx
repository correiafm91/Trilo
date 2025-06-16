
import { Target, Clapperboard, Rocket } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const etapas = [
  {
    titulo: "1. Encontro de Estratégia",
    desc: "Entendemos seu conhecimento, público e objetivos. Juntos desenhamos o melhor formato para o seu curso digital.",
    icone: <Target size={44} className="text-white drop-shadow-lg bg-white/20 rounded-full p-2" />,
    cor: "from-blue-400/20 to-blue-600/20"
  },
  {
    titulo: "2. Produção Profissional",
    desc: "Equipe, roteiro, gravação, edição — padrão global, você só foca no conteúdo. Todo o resto é conosco.",
    icone: <Clapperboard size={42} className="text-white drop-shadow-lg bg-white/20 rounded-full p-2" />,
    cor: "from-purple-400/20 to-purple-600/20"
  },
  {
    titulo: "3. Lançamento e Suporte",
    desc: "Cuidamos de marketing, vendas, plataforma e suporte ao aluno. Seu sucesso é nosso compromisso.",
    icone: <Rocket size={44} className="text-white drop-shadow-lg bg-white/20 rounded-full p-2" />,
    cor: "from-green-400/20 to-green-600/20"
  }
];

const AnimatedCard = ({ etapa, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex-1 relative group transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ 
        transitionDelay: `${index * 200}ms`,
        transform: isHovered ? 'translateY(-10px) scale(1.05)' : 'translateY(0) scale(1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background com gradiente animado */}
      <div className={`absolute inset-0 bg-gradient-to-br ${etapa.cor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
      
      <div className="relative bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 flex flex-col items-center backdrop-blur-md hover:bg-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden">
        {/* Efeito de partículas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-700 animate-bounce`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.3}s`,
                transitionDelay: `${i * 100}ms`
              }}
            />
          ))}
        </div>

        {/* Ícone com animações */}
        <div className="mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative">
          {etapa.icone}
          {/* Efeito de brilho circular */}
          <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
        </div>

        {/* Título com sublinhado animado */}
        <h3 className="mt-1 text-xl font-bold text-white text-center relative group-hover:text-white transition-colors duration-300">
          {etapa.titulo}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
        </h3>

        {/* Descrição */}
        <p className="mt-3 text-base text-white text-center font-medium group-hover:text-white transition-colors duration-300 leading-relaxed">
          {etapa.desc}
        </p>

        {/* Efeito de ondas expansivas */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-3xl border-2 border-white/30 animate-pulse"></div>
          <div className="absolute inset-2 rounded-3xl border border-white/20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
    </div>
  );
};

const ComoFunciona = () => (
  <section className="w-full max-w-5xl mx-auto py-20 px-4 bg-[#ff4a4a] relative overflow-hidden">
    {/* Background animado */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-white to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>

    <div className="relative z-10">
      <h2 className="text-3xl font-black mb-12 text-center tracking-tight text-white animate-fade-in">
        Como funciona <span className="bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent">na prática?</span>
      </h2>
      
      <div className="flex flex-col md:flex-row gap-10 md:gap-8 md:justify-between">
        {etapas.map((etapa, i) => (
          <AnimatedCard key={etapa.titulo} etapa={etapa} index={i} />
        ))}
      </div>

      {/* Conectores animados entre cards (apenas desktop) */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-1/4 w-1/4 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-1/4 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  </section>
);

export default ComoFunciona;
