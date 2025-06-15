
import Header from "../components/Header";
import Hero from "../components/Hero";
import ComoFunciona from "../components/ComoFunciona";
import Beneficios from "../components/Beneficios";
import Depoimentos from "../components/Depoimentos";
import Faq from "../components/Faq";
import Formulario from "../components/Formulario";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <ComoFunciona />
        <Beneficios />
        <Depoimentos />
        <Faq />
        <Formulario />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
