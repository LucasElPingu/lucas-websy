import type { Metadata } from "next";
import About from './components/About';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import PostsPreview from './components/PostsPreview';
import ScrollReveal from './components/ScrollReveal';
import Services from './components/Services';

/**
 * Metadados específicos para a página inicial
 */
export const metadata: Metadata = {
  title: "Lucas Websy - Desenvolvimento de Sites Profissionais | Início",
  description: "Transforme sua presença digital com sites profissionais, modernos e otimizados. Lucas Websy cria soluções web que geram resultados para seu negócio.",
  alternates: {
    canonical: "https://lucaswebsy.com.br",
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

      {/* Footer com rodapé apenas */}
      <Footer />
    </>
  );
}
