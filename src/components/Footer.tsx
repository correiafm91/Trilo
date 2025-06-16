
import { useState } from "react";
import { Mail, Heart, Sparkles } from "lucide-react";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer id="contato" className="w-full text-center py-16 px-4 text-white border-t border-white/20 bg-[#ff4a4a] relative overflow-hidden">
      {/* Background animado */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-white to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Linha gradiente sutil base */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-white via-white/50 to-white opacity-80 pointer-events-none animate-pulse" />
      
      {/* Partículas flutuantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Título com efeitos */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4 animate-fade-in flex items-center justify-center gap-3">
            <Sparkles className="text-white animate-pulse" size={28} />
            Entre em Contato
            <Sparkles className="text-white animate-pulse" size={28} style={{ animationDelay: '0.5s' }} />
          </h3>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto animate-pulse"></div>
        </div>
        
        <p className="text-lg md:text-xl mb-10 text-white animate-fade-in max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
          Pronto para transformar seu conhecimento em um curso de sucesso?
          <br />
          <span className="opacity-80">Vamos começar essa jornada juntos!</span>
        </p>
        
        {/* Botão de contato com efeitos especiais */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
          <a 
            href="mailto:contato@trilo.com.br"
            className="group relative bg-white text-[#ff4a4a] font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 animate-fade-in overflow-hidden transform hover:scale-110"
            style={{ animationDelay: '0.4s' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white group-hover:from-gray-50 group-hover:via-white group-hover:to-gray-50 transition-all duration-300 rounded-full"></div>
            
            {/* Conteúdo */}
            <div className="relative z-10 flex items-center gap-3">
              <Mail size={20} className={`transition-all duration-300 ${isHovered ? 'rotate-12 scale-125' : ''}`} />
              <span className="group-hover:scale-105 transition-transform duration-200">
                Enviar E-mail
              </span>
            </div>

            {/* Efeitos visuais */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
              <div className="absolute inset-0 rounded-full border-2 border-[#ff4a4a]/30 animate-ping"></div>
              <div className="absolute inset-1 rounded-full border border-[#ff4a4a]/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Efeito de brilho */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full"></div>
            
            {/* Partículas */}
            {isHovered && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-[#ff4a4a] rounded-full animate-bounce opacity-60"
                    style={{
                      left: `${15 + i * 15}%`,
                      top: `${20 + (i % 3) * 30}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
            )}
          </a>
        </div>
      </div>
      
      {/* Copyright com efeitos */}
      <div className="relative z-10 border-t border-white/20 pt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <div className="flex items-center justify-center gap-2 text-white/90 hover:text-white transition-colors duration-300">
          <span>© {new Date().getFullYear()}</span>
          <span className="font-bold bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent">
            Trilo
          </span>
          <Heart size={16} className="text-red-300 animate-pulse mx-1" />
          <span>Todos os direitos reservados.</span>
        </div>
        
        {/* Linha decorativa */}
        <div className="mt-4 w-24 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto animate-pulse"></div>
      </div>
    </footer>
  );
};

export default Footer;
