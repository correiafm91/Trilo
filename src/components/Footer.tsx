
const Footer = () => (
  <footer id="contato" className="w-full text-center py-16 px-4 text-white border-t border-white/20 bg-[#ff4a4a] relative">
    {/* Linha gradiente sutil base */}
    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-white via-white/50 to-white opacity-80 pointer-events-none" />
    
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-white mb-6">Entre em Contato</h3>
      <p className="text-lg mb-8 text-white">
        Pronto para transformar seu conhecimento em um curso de sucesso?
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
        <a 
          href="mailto:contato@trilo.com.br"
          className="bg-white text-[#ff4a4a] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-105"
        >
          Enviar E-mail
        </a>
      </div>
    </div>
    
    <div className="relative z-10 border-t border-white/20 pt-8">
      <span className="text-white flex items-center justify-center gap-2">
        © {new Date().getFullYear()} 
        <img 
          src="https://i.postimg.cc/L5VJKZ29/508648700-18063735398144210-1168888630606430414-n-removebg-preview.png" 
          alt="Logo"
          className="h-6 w-auto inline"
        />
        . Todos os direitos reservados.
      </span>
    </div>
  </footer>
);

export default Footer;
