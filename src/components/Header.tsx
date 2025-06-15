
const Header = () => (
  <header className="w-full py-6 px-8 md:px-16 flex items-center justify-between border-b border-gray-100 shadow-sm bg-white sticky top-0 z-30">
    <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#f05a39] select-none drop-shadow-sm">
      Trilo
    </div>
    <a
      href="#formulario"
      className="bg-[#f05a39] text-white font-bold px-6 py-2 rounded-full shadow-lg hover:bg-[#c84527] active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#f05a39]/50 text-base md:text-lg"
    >
      Quero Transformar Meu Conhecimento
    </a>
  </header>
);

export default Header;
