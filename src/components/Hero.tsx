
const Hero = () => (
  <section className="relative w-full pt-28 pb-16 px-6 md:px-8 flex flex-col items-center text-center bg-black overflow-hidden">
    {/* SVG decorativo bubbles */}
    <svg
      width="100%"
      height="260"
      viewBox="0 0 600 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-1/2 top-0 -translate-x-1/2 select-none pointer-events-none animate-fade-in opacity-20"
      style={{ zIndex: 0 }}
    >
      <ellipse cx="120" cy="90" rx="80" ry="40" fill="#374151" />
      <ellipse cx="370" cy="120" rx="140" ry="50" fill="#4B5563" />
      <ellipse cx="500" cy="50" rx="60" ry="25" fill="#6B7280" />
      <ellipse cx="570" cy="180" rx="50" ry="24" fill="#374151" />
    </svg>
    <h1 className="relative z-10 text-4xl md:text-6xl font-black mb-6 leading-tight max-w-3xl drop-shadow-sm text-white animate-fade-in">
      Transforme <span style={{ color: "#807f7e" }}>seu conhecimento</span> <br/>
      em <span style={{ color: "#807f7e" }}>cursos online</span> de sucesso <br />
      com a <span style={{ color: "#807f7e" }}>Kirvo</span>
    </h1>
    <p className="relative z-10 text-lg md:text-2xl text-white max-w-2xl mb-10 font-medium animate-fade-in" style={{ animationDelay: "200ms" }}>
      <span className="bg-gray-800 px-1 rounded">É especialista em sua área?</span> A Kirvo é a ponte para transformar a sua experiência em treinamentos online que entregam autoridade, resultados e renda recorrente.<br className="hidden md:inline" /> Comece sem complexidade, com equipe premiada em educação digital.
    </p>
    <a
      href="#contato"
      className="relative z-10 inline-block bg-white text-black text-lg md:text-xl font-bold px-10 py-4 rounded-full shadow-xl hover:bg-gray-200 active:scale-95 transition-all duration-150 animate-fade-in focus:ring-2 focus:ring-gray-400 hover:scale-105"
      style={{ animationDelay: "400ms" }}
    >
      Comece Agora
    </a>
  </section>
);

export default Hero;
