
import * as React from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    pergunta: "Preciso já ter experiência com cursos online?",
    resposta: "Não! Basta ter conhecimento real na sua área. A Trilo cuida de todo o processo para você transformar esse saber em cursos digitais de sucesso.",
    icone: "🎓"
  },
  {
    pergunta: "Quais temas posso abordar?",
    resposta: "Cursos livres, técnicos, profissionais, acadêmicos... qualquer tema em que você realmente tenha domínio e possa entregar valor ao público.",
    icone: "📚"
  },
  {
    pergunta: "Como funciona o pagamento?",
    resposta: "O pagamento é feito por projeto e dividido em parcelas até a conclusão. Você investe de forma parcelada conforme o andamento do seu curso.",
    icone: "💰"
  },
  {
    pergunta: "Quanto tempo leva para produzir o curso?",
    resposta: "O processo completo de produção do seu curso leva até 3 meses, desde a estratégia inicial até o lançamento final.",
    icone: "⏱️"
  }
];

const AnimatedFaqItem = ({ faq, index, isOpen, onToggle }) => {
  return (
    <div
      className={`border border-white/20 rounded-2xl bg-white/10 shadow-lg transition-all duration-500 backdrop-blur-md hover:bg-white/20 hover:border-white/40 hover:shadow-xl group animate-fade-in transform hover:scale-[1.02] ${
        isOpen ? 'bg-white/20 border-white/40 shadow-2xl scale-[1.02]' : ''
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <button
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group-hover:scale-[1.01] transition-transform duration-200"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
            {faq.icone}
          </span>
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-white transition-colors duration-300 relative">
              {faq.pergunta}
              {/* Sublinhado animado */}
              <div className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-500 ${
                isOpen ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </h3>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <HelpCircle className="text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300" size={20} />
          <ChevronDown 
            className={`text-white transition-all duration-500 group-hover:text-white ${
              isOpen ? 'rotate-180 scale-110' : 'group-hover:scale-110'
            }`} 
            size={24} 
          />
        </div>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-48 pb-6' : 'max-h-0'
        }`}
      >
        <div className="px-6">
          <div className="pl-12 pr-8">
            <p className={`text-white leading-relaxed transition-all duration-500 ${
              isOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'
            }`}>
              {faq.resposta}
            </p>
            
            {/* Efeito de partículas quando aberto */}
            {isOpen && (
              <div className="absolute right-6 top-1/2 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-60"
                    style={{
                      right: `${i * 8}px`,
                      top: `${i * 4}px`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Efeito de borda animada */}
      <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      }`}>
        <div className="absolute inset-0 rounded-2xl border-2 border-white/30 animate-pulse"></div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openItems, setOpenItems] = React.useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="w-full max-w-3xl mx-auto py-16 px-4 bg-[#ff4a4a] relative overflow-hidden">
      {/* Background animado */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-white to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-white to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-4 flex items-center justify-center gap-3 text-white animate-fade-in">
            <HelpCircle className="text-white animate-pulse" size={32} />
            Perguntas <span className="bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent">Frequentes</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto animate-pulse"></div>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <AnimatedFaqItem
              key={faq.pergunta}
              faq={faq}
              index={idx}
              isOpen={openItems.has(idx)}
              onToggle={() => toggleItem(idx)}
            />
          ))}
        </div>

        {/* Indicador de interação */}
        <div className="text-center mt-12">
          <p className="text-white/70 text-sm animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Clique nas perguntas para ver as respostas
          </p>
          <div className="flex justify-center mt-2 gap-1">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="w-1 h-1 bg-white/50 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
