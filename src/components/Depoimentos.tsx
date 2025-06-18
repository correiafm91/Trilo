
import { Star, Quote, User } from "lucide-react";

const depoimentos = [
  {
    nome: "Dr. Carlos Silva",
    cargo: "Médico Cardiologista",
    texto: "A Kirvo transformou meus 20 anos de experiência em cardiologia em um curso que já impactou mais de 5.000 profissionais. O processo foi incrivelmente profissional.",
    estrelas: 5
  },
  {
    nome: "Marina Santos",
    cargo: "Consultora de Marketing",
    texto: "Em 6 meses, meu curso de marketing digital se tornou referência no mercado. A equipe da Kirvo cuidou de tudo enquanto eu focava no que sei fazer melhor.",
    estrelas: 5
  },
  {
    nome: "Prof. João Oliveira",
    cargo: "Engenheiro de Software",
    texto: "Nunca imaginei que seria tão fácil transformar meu conhecimento técnico em um negócio lucrativo. A Kirvo fez toda a diferença na minha carreira.",
    estrelas: 5
  }
];

const Depoimentos = () => (
  <section className="w-full max-w-6xl mx-auto py-20 px-4 bg-black">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight text-white">
        O que nossos <span style={{ color: "#BCB9B2" }}>parceiros</span> dizem
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Profissionais que já transformaram seu conhecimento em cursos de sucesso com a Kirvo
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {depoimentos.map((dep, i) => (
        <div
          key={dep.nome}
          className="bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 group animate-fade-in relative overflow-hidden backdrop-blur-sm"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-800 opacity-20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
          
          <div className="relative z-10">
            <Quote className="text-gray-400 mb-4 opacity-70" size={32} />
            
            <p className="text-white mb-6 font-medium leading-relaxed italic">
              "{dep.texto}"
            </p>

            <div className="flex items-center gap-1 mb-4">
              {[...Array(dep.estrelas)].map((_, idx) => (
                <Star key={idx} size={20} className="text-gray-300 fill-gray-300" />
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                <User size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">{dep.nome}</h4>
                <p className="text-gray-400 font-medium">{dep.cargo}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Depoimentos;
