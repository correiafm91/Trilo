const Hero = () => (
  <section className="relative w-full pt-28 pb-16 px-6 md:px-8 flex flex-col items-center text-center bg-[#ff4a4a] overflow-hidden">
    {/* SVG decorativo bubbles */}
    <svg
      width="100%"
      height="260"
      viewBox="0 0 600 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-1/2 top-0 -translate-x-1/2 select-none pointer-events-none animate-fade-in opacity-30"
      style={{ zIndex: 0 }}
    >
      <ellipse cx="120" cy="90" rx="80" ry="40" fill="#f05a3930" />
      <ellipse cx="370" cy="120" rx="140" ry="50" fill="#fee2e230" />
      <ellipse cx="500" cy="50" rx="60" ry="25" fill="#f05a3950" />
      <ellipse cx="570" cy="180" rx="50" ry="24" fill="#f05a3913" />
    </svg>
    <h1 className="relative z-10 text-4xl md:text-6xl font-black mb-6 leading-tight max-w-3xl drop-shadow-sm text-white">
      Transforme <span className="text-white">seu conhecimento</span> <br/>
      em <span className="text-white">cursos online</span> de sucesso <br />
      com a <span className="text-white">Trilo</span>
    </h1>
    <p className="relative z-10 text-lg md:text-2xl text-white max-w-2xl mb-10 font-medium animate-fade-in">
      <span className="bg-white/20 px-1 rounded">É especialista em sua área?</span> A Trilo é a ponte para transformar a sua experiência em treinamentos online que entregam autoridade, resultados e renda recorrente.<br className="hidden md:inline" /> Comece sem complexidade, com equipe premiada em educação digital.
    </p>
    <a
      href="#contato"
      className="relative z-10 inline-block bg-white text-[#ff4a4a] text-lg md:text-xl font-bold px-10 py-4 rounded-full shadow-xl hover:bg-gray-100 active:scale-95 transition-all duration-150 animate-fade-in focus:ring-2 focus:ring-white/40 hover:scale-105"
    >
      Comece Agora
    </a>
  </section>
);

export default Hero;
