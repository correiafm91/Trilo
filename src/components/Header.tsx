
const Header = () => (
  <header className="w-full py-6 px-8 md:px-16 flex items-center justify-between border-b border-gray-800 shadow-sm bg-black sticky top-0 z-30 relative">
    {/* Linha gradiente sutil topo */}
    <div className="absolute left-0 top-0 w-full h-1.5 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 opacity-60 pointer-events-none" />
    <div className="flex items-center">
      <span className="text-2xl font-bold text-white">Kirvo</span>
    </div>
    <a
      href="#contato"
      className="bg-white text-black font-bold px-6 py-2 rounded-full shadow-lg hover:bg-gray-200 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-gray-400 text-base md:text-lg hover:scale-110"
    >
      Entre em Contato
    </a>
  </header>
);

export default Header;
