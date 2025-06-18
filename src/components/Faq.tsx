
import * as React from "react";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    pergunta: "Preciso já ter experiência com cursos online?",
    resposta: "Não! Basta ter conhecimento real na sua área. A Kirvo cuida de todo o processo para você transformar esse saber em cursos digitais de sucesso."
  },
  {
    pergunta: "Quais temas posso abordar?",
    resposta: "Cursos livres, técnicos, profissionais, acadêmicos... qualquer tema em que você realmente tenha domínio e possa entregar valor ao público."
  },
  {
    pergunta: "Como funciona o pagamento?",
    resposta: "O pagamento é feito por projeto e dividido em parcelas até a conclusão. Você investe de forma parcelada conforme o andamento do seu curso."
  },
  {
    pergunta: "Quanto tempo leva para produzir o curso?",
    resposta: "O processo completo de produção do seu curso leva até 3 meses, desde a estratégia inicial até o lançamento final."
  }
];

const Faq = () => {
  const [open, setOpen] = React.useState<number | null>(null);

  return (
    <section className="w-full max-w-3xl mx-auto py-16 px-4 bg-black">
      <h2 className="text-3xl font-black mb-8 text-center flex items-center justify-center gap-2 text-white animate-fade-in">
        <HelpCircle className="text-gray-400 mb-1" size={28} />
        Perguntas <span style={{ color: "#807f7e" }}>Frequentes</span>
      </h2>
      <div className="space-y-5">
        {faqs.map((faq, idx) => (
          <div
            key={faq.pergunta}
            className="border border-gray-700 rounded-2xl px-6 py-4 bg-gray-900 shadow-md animate-fade-in transition-all duration-300 group hover:shadow-lg hover:scale-[1.01] backdrop-blur-sm"
            style={{ animationDelay: `${idx * 150 + 200}ms` }}
          >
            <button
              className="w-full flex items-center justify-between text-lg font-semibold focus:outline-none text-white hover:text-gray-200 transition-colors select-text"
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
              aria-controls={`faq-content-${idx}`}
            >
              <span className="flex items-center gap-2">
                <HelpCircle className="inline text-gray-400" size={20} />
                {faq.pergunta}
              </span>
              <span className={`ml-4 text-xl transition-transform duration-300 text-gray-400 ${open === idx ? "rotate-180" : ""}`}>▼</span>
            </button>
            <div
              id={`faq-content-${idx}`}
              className={`overflow-hidden transition-all duration-300 ${
                open === idx ? "max-h-48 py-3 opacity-100" : "max-h-0 py-0 opacity-0"
              }`}
              aria-hidden={open !== idx}
            >
              <p className="text-base text-gray-300">{faq.resposta}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
