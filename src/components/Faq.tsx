
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
      <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={faq.pergunta}
            className="border border-gray-200 rounded-xl px-6 py-4 bg-white shadow animate-fade-in"
          >
            <button
              className="w-full flex items-center justify-between text-lg font-semibold focus:outline-none text-[#6985c0] transition-colors"
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              <span>{faq.pergunta}</span>
              <span className={`ml-4 transition-transform ${open === idx ? "rotate-180" : ""}`}>▼</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${open === idx ? "max-h-48 py-3 opacity-100" : "max-h-0 py-0 opacity-0"}`}
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
