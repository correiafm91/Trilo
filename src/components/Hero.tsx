
const Hero = () => (
  <section className="relative w-full pt-24 pb-16 px-6 md:px-8 flex flex-col items-center text-center bg-gradient-to-b from-white via-[#fff7f4] to-white">
    <div className="absolute inset-0 pointer-events-none select-none opacity-20">
      {/* Leve detalhe decorativo "bubbles", se quiser intensificar ainda mais a UX pode adicionar outro SVG */}
    </div>
    <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight max-w-3xl drop-shadow-sm">
      Transforme <span className="text-[#f05a39]">seu conhecimento</span> em <span className="text-[#f05a39]">cursos online</span> de sucesso com a <span className="text-[#f05a39]">Trilo</span>
    </h1>
    <p className="text-lg md:text-2xl text-gray-700 max-w-2xl mb-9 font-medium">
      É especialista em sua área? A Trilo é a ponte para transformar a sua experiência em treinamentos online que entregam autoridade, resultados e renda recorrente.<br className="hidden md:inline" /> Comece sem complexidade, com equipe premiada em educação digital.
    </p>
    <a
      href="#formulario"
      className="inline-block bg-[#f05a39] text-white text-lg md:text-xl font-bold px-10 py-4 rounded-full shadow-lg hover:bg-[#c84527] active:scale-95 transition-all duration-150 animate-fade-in focus:ring-2 focus:ring-[#f05a39]/40"
    >
      Comece Agora
    </a>
  </section>
);

export default Hero;
