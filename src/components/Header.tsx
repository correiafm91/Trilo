
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full py-6 px-8 md:px-16 flex items-center justify-between border-b border-white/20 bg-[#ff4a4a] sticky top-0 z-30 transition-all duration-500 ${
      scrolled ? 'shadow-2xl backdrop-blur-md bg-[#ff4a4a]/95 py-4' : 'shadow-sm'
    }`}>
      {/* Linha gradiente sutil topo */}
      <div className="absolute left-0 top-0 w-full h-1.5 bg-gradient-to-r from-white via-white/50 to-white opacity-80 pointer-events-none animate-pulse" />
      
      {/* Logo com efeitos */}
      <div className="group">
        <div className={`text-2xl md:text-3xl font-extrabold tracking-tight text-white select-none drop-shadow-sm transition-all duration-300 hover:scale-110 cursor-pointer relative ${
          scrolled ? 'text-xl md:text-2xl' : ''
        }`}>
          Trilo
          {/* Efeito de brilho no hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          
          {/* Partículas decorativas */}
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
        </div>
      </div>
      
      {/* Botão CTA com efeitos especiais */}
      <a
        href="#contato"
        className="group relative bg-white text-[#ff4a4a] font-bold px-6 py-2 rounded-full shadow-lg hover:shadow-2xl active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 text-base md:text-lg overflow-hidden"
      >
        {/* Background animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white group-hover:from-gray-50 group-hover:via-white group-hover:to-gray-50 transition-all duration-300 rounded-full"></div>
        
        {/* Texto */}
        <span className="relative z-10 group-hover:scale-110 transition-transform duration-200">
          Entre em Contato
        </span>

        {/* Efeito de ondas */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
          <div className="absolute inset-0 rounded-full border-2 border-[#ff4a4a]/30 animate-ping"></div>
        </div>

        {/* Efeito de brilho */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full"></div>
        
        {/* Partículas no hover */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#ff4a4a] rounded-full animate-bounce opacity-60"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </a>
    </header>
  );
};

export default Header;
