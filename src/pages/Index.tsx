
import Header from "../components/Header";
import Hero from "../components/Hero";
import ComoFunciona from "../components/ComoFunciona";
import Beneficios from "../components/Beneficios";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <ComoFunciona />
        <Beneficios />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
