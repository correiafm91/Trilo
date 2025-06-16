
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full pt-28 pb-16 px-6 md:px-8 flex flex-col items-center text-center bg-[#ff4a4a] overflow-hidden">
      {/* Background interativo */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.2) 0%, rgba(255,74,74,0.1) 50%, transparent 100%)`
        }}
      />

      {/* Partículas flutuantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              transform: `scale(${0.5 + Math.random() * 1.5})`
            }}
          />
        ))}
      </div>

      {/* SVG decorativo com animação */}
      <svg
        width="100%"
        height="260"
        viewBox="0 0 600 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 top-0 -translate-x-1/2 select-none pointer-events-none animate-fade-in opacity-40"
        style={{ zIndex: 0 }}
      >
        <ellipse cx="120" cy="90" rx="80" ry="40" fill="#f05a3930" className="animate-pulse" />
        <ellipse cx="370" cy="120" rx="140" ry="50" fill="#fee2e230" className="animate-pulse" style={{ animationDelay: '1s' }} />
        <ellipse cx="500" cy="50" rx="60" ry="25" fill="#f05a3950" className="animate-pulse" style={{ animationDelay: '2s' }} />
        <ellipse cx="570" cy="180" rx="50" ry="24" fill="#f05a3913" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      </svg>

      {/* Título principal com efeitos especiais */}
      <h1 className="relative z-10 text-4xl md:text-6xl font-black mb-6 leading-tight max-w-3xl drop-shadow-lg text-white">
        <span className="inline-block animate-fade-in hover:scale-105 transition-transform duration-300">Transforme </span>
        <span className="inline-block animate-fade-in bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>seu conhecimento</span>
        <br/>
        <span className="inline-block animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>em </span>
        <span className="inline-block animate-fade-in bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 relative" style={{ animationDelay: '0.3s' }}>
          cursos online
          {/* Efeito de brilho */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
        </span>
        <span className="inline-block animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.4s' }}> de sucesso </span>
        <br />
        <span className="inline-block animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.5s' }}>com a </span>
        <span className="inline-block animate-fade-in bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 font-extrabold" style={{ animationDelay: '0.6s' }}>Trilo</span>
      </h1>

      {/* Subtítulo com animação */}
      <p className="relative z-10 text-lg md:text-2xl text-white max-w-2xl mb-10 font-medium animate-fade-in opacity-90 hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '0.8s' }}>
        <span className="bg-white/20 px-2 py-1 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-105 inline-block">É especialista em sua área?</span>
        <br className="my-2" />
        A Trilo é a ponte para transformar a sua experiência em treinamentos online que entregam autoridade, resultados e renda recorrente.
        <br className="hidden md:inline" />
        <span className="opacity-80"> Comece sem complexidade, com equipe premiada em educação digital.</span>
      </p>

      {/* Botão CTA com efeitos especiais */}
      <a
        href="#contato"
        className="relative z-10 group inline-block bg-white text-[#ff4a4a] text-lg md:text-xl font-bold px-10 py-4 rounded-full shadow-2xl hover:shadow-white/20 active:scale-95 transition-all duration-300 animate-fade-in focus:ring-4 focus:ring-white/40 overflow-hidden"
        style={{ animationDelay: '1s' }}
      >
        {/* Fundo animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white group-hover:from-gray-50 group-hover:via-white group-hover:to-gray-50 transition-all duration-300"></div>
        
        {/* Efeito de ondas */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-full border-2 border-[#ff4a4a]/30 animate-ping"></div>
        </div>

        {/* Texto com efeito de hover */}
        <span className="relative z-10 group-hover:scale-105 transition-transform duration-200">
          Comece Agora
        </span>

        {/* Efeito de brilho no hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </a>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
