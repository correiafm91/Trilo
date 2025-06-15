
const Footer = () => (
  <footer className="w-full text-center py-10 px-4 text-gray-500 border-t border-[#ffe5de] bg-white relative">
    {/* Linha gradiente sutil base */}
    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#6985c0] via-[#f05a3999] to-[#f05a39] opacity-80 pointer-events-none" />
    <span className="relative z-10">
      © {new Date().getFullYear()} <span className="text-[#f05a39] font-bold">Trilo</span>
      . Todos os direitos reservados. 
      <span className="ml-2 align-text-bottom text-xl">🌐</span>
    </span>
  </footer>
);

export default Footer;
