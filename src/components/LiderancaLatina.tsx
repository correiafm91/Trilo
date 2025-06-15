
import { Trophy, Users, Award, Globe2 } from "lucide-react";

const estatisticas = [
  {
    numero: "134+",
    descricao: "Cursos lançados",
    icone: Trophy,
    cor: "text-yellow-600"
  },
  {
    numero: "1M+",
    descricao: "Alunos impactados",
    icone: Users,
    cor: "text-blue-600"
  },
  {
    numero: "5M+",
    descricao: "Em vendas",
    icone: Award,
    cor: "text-green-600"
  },
  {
    numero: "4+",
    descricao: "Países atendidos",
    icone: Globe2,
    cor: "text-purple-600"
  },
  {
    numero: "6",
    descricao: "Anos de mercado",
    icone: Award,
    cor: "text-orange-600"
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
          <Trophy className="text-white" size={24} />
          <span className="text-white font-bold text-lg">Liderança Continental</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          A <span className="text-white">Maior Empresa</span><br />
          de Produção de Cursos<br />
          da <span className="text-white">América Latina</span>
        </h2>

        <p className="text-xl text-white max-w-3xl mx-auto font-medium leading-relaxed">
          Transformamos conhecimento em negócios digitais há mais de uma década, 
          sendo referência absoluta em educação online em todo o continente.
        </p>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                <span className="text-white font-medium text-center">
                  {stat.descricao}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default LiderancaLatina;
