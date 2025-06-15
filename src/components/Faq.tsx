
import * as React from "react";

const faqs = [
  {
    pergunta: "Preciso já ter experiência com cursos online?",
    resposta: "Não! Basta ter conhecimento real na sua área. A Trilo cuida de todo o processo para você transformar esse saber em cursos digitais de sucesso."
  },
  {
    pergunta: "Quais temas posso abordar?",
    resposta: "Cursos livres, técnicos, profissionais, acadêmicos... qualquer tema em que você realmente tenha domínio e possa entregar valor ao público."
  },
  {
    pergunta: "Como funciona o pagamento?",
    resposta: "O modelo é personalizado: você pode escolher entre porcentagem sobre vendas, pagamento único, ou dividir a receita conforme seu projeto."
  }
];

const Faq = () => {
  const [open, setOpen] = React.useState<number | null>(null);

  return (
    <section className="w-full max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-black mb-8 text-center">
        Perguntas <span className="text-[#f05a39]">Frequentes</span>
      </h2>
      <div className="space-y-5">
        {faqs.map((faq, idx) => (
          <div
            key={faq.pergunta}
            className="border border-[#ffdfd6] rounded-xl px-6 py-4 bg-white/90 shadow-md animate-fade-in transition-shadow duration-150 group"
          >
            <button
              className="w-full flex items-center justify-between text-lg font-semibold focus:outline-none text-[#f05a39] transition-colors select-text"
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
              aria-controls={`faq-content-${idx}`}
            >
              <span>{faq.pergunta}</span>
              <span className={`ml-4 text-xl transition-transform ${open === idx ? "rotate-180" : ""}`}>▼</span>
            </button>
            <div
              id={`faq-content-${idx}`}
              className={`overflow-hidden transition-all duration-300 ${
                open === idx ? "max-h-48 py-3 opacity-100" : "max-h-0 py-0 opacity-0"
              }`}
              aria-hidden={open !== idx}
            >
              <p className="text-base text-gray-700">{faq.resposta}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
