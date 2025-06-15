
import { Trophy, Users, Award, Globe2 } from "lucide-react";

const estatisticas = [
  {
    numero: "15.000+",
    descricao: "Cursos produzidos",
    icone: Trophy,
    cor: "text-yellow-600"
  },
  {
    numero: "2.5M+", 
    descricao: "Alunos impactados",
    icone: Users,
    cor: "text-blue-600"
  },
  {
    numero: "500+",
    descricao: "Especialistas parceiros",
    icone: Award,
    cor: "text-green-600"
  },
  {
    numero: "12",
    descricao: "Países atendidos",
    icone: Globe2,
    cor: "text-purple-600"
  }
];

const LiderancaLatina = () => (
  <section className="w-full bg-gradient-to-br from-[#f05a39] via-[#c84527] to-[#a63620] py-20 px-4 relative overflow-hidden">
    {/* Background decorativo */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-white rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white rounded-full blur-2xl"></div>
    </div>

    <div className="relative z-10 max-w-6xl mx-auto text-center">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
          <Trophy className="text-yellow-300" size={24} />
          <span className="text-white font-bold text-lg">Liderança Continental</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          A <span className="text-yellow-300">Maior Empresa</span><br />
          de Produção de Cursos<br />
          da <span className="text-yellow-300">América Latina</span>
        </h2>
        
        <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
          Transformamos conhecimento em negócios digitais há mais de uma década, 
          sendo referência absoluta em educação online em todo o continente.
        </p>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {estatisticas.map((stat, i) => {
          const IconeComponente = stat.icone;
          return (
            <div
              key={stat.descricao}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 hover:bg-white/20 transition-all duration-300 group animate-fade-in border border-white/20"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconeComponente size={32} className="text-white" />
                </div>
                <span className="text-3xl md:text-4xl font-black text-white mb-2">
                  {stat.numero}
                </span>
                <span className="text-white/80 font-medium text-center">
                  {stat.descricao}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to action */}
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Faça parte da nossa história de sucesso
        </h3>
        <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
          Junte-se aos milhares de especialistas que já transformaram suas carreiras 
          conosco e tornaram-se referência em suas áreas.
        </p>
        <a
          href="#contato"
          className="inline-block bg-white text-[#f05a39] text-lg font-bold px-10 py-4 rounded-full shadow-xl hover:bg-gray-100 active:scale-95 transition-all duration-150 hover:scale-105"
        >
          Quero Ser o Próximo
        </a>
      </div>
    </div>
  </section>
);

export default LiderancaLatina;
