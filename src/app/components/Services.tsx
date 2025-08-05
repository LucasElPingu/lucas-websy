'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Services.module.css';

/**
 * Componente Services - Seção de serviços oferecidos
 * Apresenta os serviços em cards com animações sequenciais e elementos gráficos lineares
 */
export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  // Link direto para WhatsApp
  const whatsappLink = "https://wa.me/5583993324678?text=Olá,%20quero%20fazer%20um%20site%20com%20você";

  const services = [
    {
      number: "01",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M10 4v16"/>
          <path d="M2 10h8"/>
          <path d="M14 10h8"/>
        </svg>
      ),
      title: "Sites Profissionais",
      description: "Sites para empresas, autônomos e projetos pessoais com design moderno e funcionalidade completa."
    },
    {
      number: "02",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
      ),
      title: "E-commerce",
      description: "Lojas virtuais completas com carrinho, pagamentos integrados e gestão de produtos."
    },
    {
      number: "03",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="6" width="20" height="12" rx="2"/>
          <path d="M12 12h.01"/>
          <path d="M17 8l-5 5-5-5"/>
        </svg>
      ),
      title: "Landing Pages",
      description: "Páginas únicas otimizadas para conversão, produtos específicos ou campanhas de marketing."
    },
    {
      number: "04",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: "Integração WhatsApp",
      description: "Conexão direta com WhatsApp e redes sociais para facilitar o contato com clientes."
    },
    {
      number: "05",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="7.5,4.21 12,6.81 16.5,4.21"/>
          <polyline points="7.5,19.79 7.5,14.6 3,12"/>
          <polyline points="21,12 16.5,14.6 16.5,19.79"/>
        </svg>
      ),
      title: "Design Personalizado",
      description: "Visual único criado sob medida para refletir a identidade da sua marca."
    },
    {
      number: "06",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: "Performance Otimizada",
      description: "Sites rápidos e otimizados para todos os dispositivos com foco na experiência do usuário."
    },
    {
      number: "07",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
      title: "Inteligência Artificial",
      description: "Conteúdo automatizado, chatbots inteligentes e recursos alimentados por IA."
    },
    {
      number: "08",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),
      title: "Tradução Automática",
      description: "Site acessível globalmente com tradução automática para múltiplos idiomas."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animar cards em sequência
          services.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Divisor moderno */}
      <div className="section-divider"></div>

      <section
        id="services"
        ref={sectionRef}
        className={`${styles.services} ${isVisible ? styles.visible : ''}`}
      >
      <div className={styles.container}>
        {/* Header da seção */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionNumber}>02</div>
          <div className={styles.headerContent}>
            <div className={styles.labelContainer}>
              <span className={styles.label}>Serviços</span>
              <div className={styles.labelLine}></div>
            </div>
            <h2 className={styles.title}>
              <span className={styles.titleLine}>SOLUÇÕES</span>
              <span className={styles.titleLine}>DIGITAIS</span>
              <span className={`${styles.titleLine} ${styles.titleAccent}`}>COMPLETAS</span>
            </h2>
            <p className={styles.subtitle}>
              Do conceito à implementação, oferecemos soluções web que transformam 
              sua presença digital e impulsionam seus resultados.
            </p>
          </div>
        </div>

        {/* Grid de serviços */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${styles.serviceCard} ${visibleCards.includes(index) ? styles.cardVisible : ''}`}
            >
              <div className={styles.cardHeader}>
                <span className={styles.serviceNumber}>{service.number}</span>
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
              
              <div className={styles.cardDecor}>
                <div className={styles.decorLine}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaText}>
              <h3 className={styles.ctaTitle}>PRONTO PARA COMEÇAR?</h3>
              <p className={styles.ctaSubtitle}>
                Vamos discutir seu projeto e criar algo extraordinário juntos.
              </p>
            </div>
            
            <div className={styles.ctaActions}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
                aria-label="Iniciar projeto via WhatsApp"
              >
                <span className={styles.ctaButtonText}>INICIAR PROJETO</span>
                <div className={styles.ctaButtonIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </a>
              
              <div className={styles.ctaInfo}>
                <span className={styles.ctaInfoText}>Resposta em até 1 hora</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
