import type { Metadata } from "next";
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import About from './components/About';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import PostsPreview from './components/PostsPreview';

/**
 * Metadados específicos para a página inicial
 */
export const metadata: Metadata = {
  title: "Lucas Websy - Desenvolvimento de Sites Profissionais | Início",
  description: "Transforme sua presença digital com sites profissionais, modernos e otimizados. Lucas Websy cria soluções web que geram resultados para seu negócio.",
  alternates: {
    canonical: "https://lucaswebsy.com",
  },
};

/**
 * Página inicial - Home
 * Contém todas as seções principais do site
 */
export default function Home() {
  return (
    <>
      {/* Componente para animações de scroll reveal */}
      <ScrollReveal />
      
      {/* Header fixo com navegação minimalista */}
      <Header />
      
      {/* Hero Section com storytelling visual */}
      <Hero />
      
      {/* Seção de Serviços com elementos gráficos lineares */}
      <Services />
      
      {/* Seção de Benefícios com layout limpo e espaçoso */}
      <Benefits />
      
      {/* Seção Sobre mim com microinterações */}
      <About />

      {/* Preview de posts na home */}
      <PostsPreview />

      {/* Footer com estilo consistente */}
      <Footer />
    </>
  );
}
