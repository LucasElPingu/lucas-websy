'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Benefits.module.css';

/**
 * Componente Benefits - Seção de benefícios e diferenciais
 * Layout limpo e espaçoso com animações de entrada sequenciais
 */
export default function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const benefits = [
    {
      number: "01",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: "Entrega Rápida",
      description: "Desenvolvimento ágil e entrega no prazo acordado, sem comprometer a qualidade.",
      highlight: "SPEED"
    },
    {
      number: "02",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 11H5a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h4m0-11V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V11m6 0V9a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        </svg>
      ),
      title: "Foco em Resultados",
      description: "Sites otimizados para conversão e crescimento do seu negócio.",
      highlight: "RESULTS"
    },
    {
      number: "03",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M7 8h10"/>
          <path d="M7 12h10"/>
          <path d="M7 16h10"/>
        </svg>
      ),
      title: "100% Responsivo",
      description: "Perfeito funcionamento em todos os dispositivos e tamanhos de tela.",
      highlight: "RESPONSIVE"
    },
    {
      number: "04",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.29,7 12,12 20.71,7"/>
          <line x1="12" y1="22" x2="12" y2="12"/>
        </svg>
      ),
      title: "Design Moderno",
      description: "Visual contemporâneo e único, adaptado à identidade da sua marca.",
      highlight: "DESIGN"
    },
    {
      number: "05",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
      title: "Performance Otimizada",
      description: "Carregamento ultra-rápido e experiência fluida para seus usuários.",
      highlight: "PERFORMANCE"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animar items em sequência
          benefits.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 200);
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
        id="benefits" 
        ref={sectionRef}
        className={`${styles.benefits} ${isVisible ? styles.visible : ''}`}
      >
        <div className={styles.container}>
          {/* Header da seção */}
          <div className={styles.sectionHeader}>
            <div className={styles.sectionNumber}>03</div>
            <div className={styles.headerContent}>
              <div className={styles.labelContainer}>
                <span className={styles.label}>Benefícios</span>
                <div className={styles.labelLine}></div>
              </div>
              <h2 className={styles.title}>
                <span className={styles.titleLine}>POR QUE</span>
                <span className={styles.titleLine}>ESCOLHER A</span>
                <span className={`${styles.titleLine} ${styles.titleAccent}`}>LUCAS WEBSY</span>
              </h2>
              <p className={styles.subtitle}>
                Combinamos expertise técnica com foco em resultados para entregar 
                soluções que fazem a diferença no seu negócio.
              </p>
            </div>
          </div>

          {/* Grid de benefícios */}
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`${styles.benefitItem} ${visibleItems.includes(index) ? styles.itemVisible : ''}`}
              >
                <div className={styles.itemNumber}>
                  {benefit.number}
                </div>
                
                <div className={styles.itemContent}>
                  <div className={styles.itemHeader}>
                    <div className={styles.itemIcon}>
                      {benefit.icon}
                    </div>
                    <div className={styles.itemHighlight}>
                      {benefit.highlight}
                    </div>
                  </div>
                  
                  <div className={styles.itemBody}>
                    <h3 className={styles.itemTitle}>{benefit.title}</h3>
                    <p className={styles.itemDescription}>{benefit.description}</p>
                  </div>
                  
                  <div className={styles.itemDecor}>
                    <div className={styles.decorLine}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section - Removido o 24H */}
          <div className={styles.statsSection}>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Clientes Satisfeitos</div>
                <div className={styles.statLine}></div>
              </div>
              
              <div className={styles.statItem}>
                <div className={styles.statNumber}>SEO</div>
                <div className={styles.statLabel}>Otimização Garantida</div>
                <div className={styles.statLine}></div>
              </div>
              
              <div className={styles.statItem}>
                <div className={styles.statNumber}>∞</div>
                <div className={styles.statLabel}>Possibilidades</div>
                <div className={styles.statLine}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
