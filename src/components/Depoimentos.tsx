
import { Star, Quote, User } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const depoimentos = [
  {
    nome: "Dr. Carlos Silva",
    cargo: "Médico Cardiologista",
    texto: "A Trilo transformou meus 20 anos de experiência em cardiologia em um curso que já impactou mais de 5.000 profissionais. O processo foi incrivelmente profissional.",
    estrelas: 5,
    cor: "from-blue-400 to-blue-600"
  },
  {
    nome: "Marina Santos",
    cargo: "Consultora de Marketing",
    texto: "Em 6 meses, meu curso de marketing digital se tornou referência no mercado. A equipe da Trilo cuidou de tudo enquanto eu focava no que sei fazer melhor.",
    estrelas: 5,
    cor: "from-purple-400 to-purple-600"
  },
  {
    nome: "Prof. João Oliveira",
    cargo: "Engenheiro de Software",
    texto: "Nunca imaginei que seria tão fácil transformar meu conhecimento técnico em um negócio lucrativo. A Trilo fez toda a diferença na minha carreira.",
    estrelas: 5,
    cor: "from-green-400 to-green-600"
  }
];

const AnimatedTestimonial = ({ depoimento, index }) => {
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
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative group transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
      } ${isHovered ? 'scale-105 -translate-y-2' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background com gradiente animado */}
      <div className={`absolute inset-0 bg-gradient-to-br ${depoimento.cor} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl transform scale-110`}></div>
      
      <div className="relative bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-white/10 hover:bg-white/20 hover:border-white/40 transition-all duration-500 backdrop-blur-md overflow-hidden">
        {/* Partículas de fundo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-40 transition-all duration-700 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                transitionDelay: `${i * 100}ms`
              }}
            />
          ))}
        </div>

        {/* Background pattern animado */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 group-hover:rotate-90 transition-all duration-700" />
        
        <div className="relative z-10">
          {/* Quote icon com animação */}
          <Quote className="text-white mb-4 opacity-70 group-hover:opacity-100 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" size={32} />
          
          {/* Texto do depoimento */}
          <p className="text-white mb-6 font-medium leading-relaxed italic group-hover:text-white transition-colors duration-300 relative">
            "{depoimento.texto}"
            {/* Aspas decorativas */}
            <span className="absolute -top-2 -left-2 text-4xl text-white/20 font-serif">"</span>
            <span className="absolute -bottom-6 -right-2 text-4xl text-white/20 font-serif">"</span>
          </p>

          {/* Estrelas com animação em cascata */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(depoimento.estrelas)].map((_, idx) => (
              <Star 
                key={idx} 
                size={20} 
                className={`text-white fill-white group-hover:scale-125 transition-all duration-300`}
                style={{ 
                  transitionDelay: `${idx * 100}ms`,
                  filter: isHovered ? 'drop-shadow(0 0 8px rgba(255,255,255,0.8))' : 'none'
                }}
              />
            ))}
          </div>

          {/* Profile section */}
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${depoimento.cor} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
              <User size={24} className="text-white" />
              {/* Anel animado */}
              <div className="absolute w-16 h-16 rounded-full border-2 border-white/30 opacity-0 group-hover:opacity-100 animate-ping"></div>
            </div>
            <div>
              <h4 className="font-bold text-white text-lg group-hover:text-white transition-colors duration-300 relative">
                {depoimento.nome}
                {/* Sublinhado animado */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </h4>
              <p className="text-white font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">{depoimento.cargo}</p>
            </div>
          </div>
        </div>

        {/* Efeito de borda pulsante */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-3xl border-2 border-white/30 animate-pulse"></div>
          <div className="absolute inset-1 rounded-3xl border border-white/20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
    </div>
  );
};

const Depoimentos = () => (
  <section className="w-full max-w-6xl mx-auto py-20 px-4 bg-[#ff4a4a] relative overflow-hidden">
    {/* Background animado */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-white to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-white to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse opacity-50" style={{ animationDelay: '3s' }}></div>
    </div>

    <div className="relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight text-white animate-fade-in">
          O que nossos <span className="bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent">parceiros</span> dizem
        </h2>
        <p className="text-lg text-white max-w-2xl mx-auto animate-fade-in opacity-90" style={{ animationDelay: '0.2s' }}>
          Profissionais que já transformaram seu conhecimento em cursos de sucesso com a Trilo
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {depoimentos.map((depoimento, i) => (
          <AnimatedTestimonial key={depoimento.nome} depoimento={depoimento} index={i} />
        ))}
      </div>

      {/* Indicador de navegação */}
      <div className="flex justify-center mt-12 gap-2">
        {depoimentos.map((_, i) => (
          <div 
            key={i}
            className="w-2 h-2 rounded-full bg-white/50 animate-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Depoimentos;
