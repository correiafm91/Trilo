

const Footer = () => (
  <footer id="contato" className="w-full text-center py-16 px-4 text-white border-t border-gray-800 bg-black relative animate-fade-in">
    {/* Linha gradiente sutil base */}
    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 opacity-60 pointer-events-none" />
    
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-white mb-6">Entre em Contato</h3>
      <p className="text-lg mb-8 text-gray-300">
        Pronto para transformar seu conhecimento em um curso de sucesso?
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
        <a 
          href="https://form.respondi.app/BpTXDhAa"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-200 hover:scale-105"
        >
          Entrar em contato
        </a>
      </div>
    </div>
    
    <div className="relative z-10 border-t border-gray-800 pt-8">
      <span className="text-gray-300 flex items-center justify-center gap-2">
        © {new Date().getFullYear()} Kirvo. Todos os direitos reservados.
      </span>
    </div>
  </footer>
);

export default Footer;

