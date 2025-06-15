
import Header from "../components/Header";
import Hero from "../components/Hero";
import ComoFunciona from "../components/ComoFunciona";
import Processo from "../components/Processo";
import LiderancaLatina from "../components/LiderancaLatina";
import Beneficios from "../components/Beneficios";
import Depoimentos from "../components/Depoimentos";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col relative overflow-hidden">
      {/* Fundo decorativo */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-[#f05a39]/5 to-[#f05a39]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-20 w-96 h-96 bg-gradient-to-bl from-[#fee2e2]/30 to-[#f05a39]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-gradient-to-tr from-[#f05a39]/3 to-[#fef2f2]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-tl from-[#f05a39]/8 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main className="flex-1 w-full">
          <Hero />
          <ComoFunciona />
          <Processo />
          <LiderancaLatina />
          <Beneficios />
          <Depoimentos />
          <Faq />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
