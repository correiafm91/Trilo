
import { useState } from "react";
import { User, Mail, MessageSquare, Send } from "lucide-react";

const Formulario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    // Aqui você integraria com seu backend
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="formulario" className="w-full max-w-4xl mx-auto py-20 px-4">
      <div className="bg-gradient-to-br from-white via-[#fff7f4] to-white rounded-3xl shadow-2xl p-8 md:p-12 border border-[#ffe5de]">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
            Pronto para <span className="text-[#f05a39]">transformar</span> seu conhecimento?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Conte-nos sobre sua expertise e vamos desenhar juntos o curso perfeito para o seu público.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-[#6985c0] group-focus-within:text-[#f05a39] transition-colors" />
            </div>
            <input
              type="text"
              name="nome"
              required
              value={formData.nome}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#f05a39] focus:ring-4 focus:ring-[#f05a39]/20 transition-all duration-200 text-lg font-medium bg-white/90"
              placeholder="Seu nome completo"
            />
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-[#6985c0] group-focus-within:text-[#f05a39] transition-colors" />
            </div>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#f05a39] focus:ring-4 focus:ring-[#f05a39]/20 transition-all duration-200 text-lg font-medium bg-white/90"
              placeholder="Seu melhor e-mail"
            />
          </div>

          <div className="relative group">
            <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
              <MessageSquare className="h-5 w-5 text-[#6985c0] group-focus-within:text-[#f05a39] transition-colors" />
            </div>
            <textarea
              name="mensagem"
              required
              rows={5}
              value={formData.mensagem}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#f05a39] focus:ring-4 focus:ring-[#f05a39]/20 transition-all duration-200 text-lg font-medium bg-white/90 resize-none"
              placeholder="Conte-nos sobre sua área de expertise e que tipo de curso gostaria de criar..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#f05a39] to-[#c84527] text-white text-xl font-bold py-5 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 animate-pulse-glow"
          >
            <Send className="h-6 w-6" />
            Vamos Conversar!
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            📞 Resposta em até 24h • 🔒 Seus dados estão seguros • ✨ Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default Formulario;
