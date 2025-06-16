
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
    <div className="bg-[#ff4a4a] text-white min-h-screen flex flex-col relative overflow-hidden">
      {/* Fundo decorativo removido para manter cor sólida */}
      
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
