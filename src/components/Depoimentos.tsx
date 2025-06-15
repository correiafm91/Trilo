
import { Star, Quote } from "lucide-react";

const depoimentos = [
  {
    nome: "Dr. Carlos Silva",
    cargo: "Médico Cardiologista",
    foto: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
    texto: "A Trilo transformou meus 20 anos de experiência em cardiologia em um curso que já impactou mais de 5.000 profissionais. O processo foi incrivelmente profissional.",
    estrelas: 5
  },
  {
    nome: "Marina Santos",
    cargo: "Consultora de Marketing",
    foto: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
    texto: "Em 6 meses, meu curso de marketing digital se tornou referência no mercado. A equipe da Trilo cuidou de tudo enquanto eu focava no que sei fazer melhor.",
    estrelas: 5
  },
  {
    nome: "Prof. João Oliveira",
    cargo: "Engenheiro de Software",
    foto: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
    texto: "Nunca imaginei que seria tão fácil transformar meu conhecimento técnico em um negócio lucrativo. A Trilo fez toda a diferença na minha carreira.",
    estrelas: 5
  }
];

const Depoimentos = () => (
  <section className="w-full max-w-6xl mx-auto py-20 px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
        O que nossos <span className="text-[#f05a39]">parceiros</span> dizem
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Profissionais que já transformaram seu conhecimento em cursos de sucesso com a Trilo
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {depoimentos.map((dep, i) => (
        <div
          key={dep.nome}
          className="bg-white rounded-3xl p-8 shadow-xl border border-[#ffe5de] hover:shadow-2xl hover:scale-105 transition-all duration-300 group animate-fade-in relative overflow-hidden"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f05a39]/5 to-[#f05a39]/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
          
          <div className="relative z-10">
            <Quote className="text-[#f05a39] mb-4 opacity-70" size={32} />
            
            <p className="text-gray-700 mb-6 font-medium leading-relaxed italic">
              "{dep.texto}"
            </p>

            <div className="flex items-center gap-1 mb-4">
              {[...Array(dep.estrelas)].map((_, idx) => (
                <Star key={idx} size={20} className="text-yellow-500 fill-current" />
              ))}
            </div>

            <div className="flex items-center gap-4">
              <img 
                src={dep.foto} 
                alt={dep.nome}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#f05a39]/20"
              />
              <div>
                <h4 className="font-bold text-[#f05a39] text-lg">{dep.nome}</h4>
                <p className="text-gray-600 font-medium">{dep.cargo}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Depoimentos;
