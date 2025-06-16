
const Header = () => (
  <header className="w-full py-6 px-8 md:px-16 flex items-center justify-between border-b border-white/20 shadow-sm bg-[#ff4a4a] sticky top-0 z-30 relative">
    {/* Linha gradiente sutil topo */}
    <div className="absolute left-0 top-0 w-full h-1.5 bg-gradient-to-r from-white via-white/50 to-white opacity-80 pointer-events-none" />
    <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-white select-none drop-shadow-sm">
      Trilo
    </div>
    <a
      href="#contato"
      className="bg-white text-[#ff4a4a] font-bold px-6 py-2 rounded-full shadow-lg hover:bg-gray-100 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-white/50 text-base md:text-lg hover:scale-110"
    >
      Entre em Contato
    </a>
  </header>
);

export default Header;
