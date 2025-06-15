
const Footer = () => (
  <footer id="contato" className="w-full text-center py-16 px-4 text-gray-600 border-t border-[#ffe5de] bg-white relative">
    {/* Linha gradiente sutil base */}
    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#f05a39] via-[#f05a3999] to-[#f05a39] opacity-80 pointer-events-none" />
    
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-[#f05a39] mb-6">Entre em Contato</h3>
      <p className="text-lg mb-8 text-gray-700">
        Pronto para transformar seu conhecimento em um curso de sucesso?
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
        <a 
          href="mailto:contato@trilo.com.br"
          className="bg-[#f05a39] text-white font-bold px-8 py-3 rounded-full hover:bg-[#c84527] transition-all duration-200 hover:scale-105"
        >
          Enviar E-mail
        </a>
      </div>
    </div>
    
    <div className="relative z-10 border-t border-gray-200 pt-8">
      <span>
        © {new Date().getFullYear()} <span className="text-[#f05a39] font-bold">Trilo</span>
        . Todos os direitos reservados.
      </span>
    </div>
  </footer>
);

export default Footer;

