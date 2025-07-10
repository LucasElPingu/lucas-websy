import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Header fixo com navegação */}
      <Header />

      {/* Seção Hero - Apresentação principal */}
      <Hero />

      {/* Seção de Serviços oferecidos */}
      <Services />

      {/* Seção de Benefícios e Diferenciais */}
      <Benefits />

      {/* Seção Sobre mim */}
      <About />

      {/* Footer com contatos e links */}
      <Footer />
    </>
  );
}
