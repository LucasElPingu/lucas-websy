'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

/**
 * Componente Hero - Seção principal de apresentação
 * Contém storytelling visual, animações de scroll e elementos interativos
 */
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Link direto para WhatsApp com mensagem pré-definida
  const whatsappLink = "https://wa.me/5583993324678?text=Olá,%20quero%20fazer%20um%20site%20com%20você";

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className={`${styles.hero} ${isVisible ? styles.visible : ''}`}
    >
      {/* Elementos de fundo animados */}
      <div className={styles.backgroundElements}>
        <div 
          className={styles.floatingLine}
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div 
          className={styles.floatingDot}
          style={{ transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className={styles.floatingGrid}
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        ></div>
      </div>

      <div className={styles.container}>
        <div className={styles.heroContent}>
          {/* Texto principal */}
          <div className={styles.textContent}>
            <div className={styles.labelContainer}>
              <span className={styles.label}>Desenvolvedor Web</span>
              <div className={styles.labelLine}></div>
            </div>
            
            <div className={styles.headlineWrapper}>
              <h1 className={styles.headline}>
                <span className={styles.headlineWord}>PROFISSIONALIZE</span>
                <span className={styles.headlineWord}>SUA MARCA</span>
                <span className={`${styles.headlineWord} ${styles.headlineAccent}`}>ONLINE</span>
              </h1>
              <div className={styles.headlineDecor}>
                <div className={styles.decorLine}></div>
                <div className={styles.decorDot}></div>
              </div>
            </div>

            <div className={styles.subheadlineWrapper}>
              <p className={styles.subheadline}>
                Sites rápidos, modernos e personalizados para sua empresa ou projeto.
                Transformo ideias em experiências digitais impactantes.
              </p>
            </div>

            <div className={styles.ctaWrapper}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
                aria-label="Solicitar orçamento via WhatsApp"
              >
                <span className={styles.ctaText}>SOLICITAR ORÇAMENTO</span>
                <div className={styles.ctaIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </a>
              
              <div className={styles.ctaInfo}>
                <span className={styles.ctaInfoText}>Resposta rápida via WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Elemento visual lateral */}
          <div className={styles.visualContent}>
            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <div className={styles.codeControls}>
                  <span className={styles.codeDot}></span>
                  <span className={styles.codeDot}></span>
                  <span className={styles.codeDot}></span>
                </div>
                <span className={styles.codeTitle}>lucaswebsy.tsx</span>
              </div>
              
              <div className={styles.codeContent}>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>01</span>
                  <span className={styles.codeKeyword}>const</span>
                  <span className={styles.codeVariable}> website</span>
                  <span className={styles.codeOperator}> = </span>
                  <span className={styles.codeBracket}>{'{'}</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>02</span>
                  <span className={styles.codeProperty}>  design</span>
                  <span className={styles.codeOperator}>: </span>
                  <span className={styles.codeString}>moderno</span>
                  <span className={styles.codeOperator}>,</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>03</span>
                  <span className={styles.codeProperty}>  performance</span>
                  <span className={styles.codeOperator}>: </span>
                  <span className={styles.codeString}>otimizada</span>
                  <span className={styles.codeOperator}>,</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>04</span>
                  <span className={styles.codeProperty}>  responsive</span>
                  <span className={styles.codeOperator}>: </span>
                  <span className={styles.codeBoolean}>true</span>
                  <span className={styles.codeOperator}>,</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>05</span>
                  <span className={styles.codeProperty}>  seo</span>
                  <span className={styles.codeOperator}>: </span>
                  <span className={styles.codeString}>perfeito</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>06</span>
                  <span className={styles.codeBracket}>{'}'}</span>
                </div>
              </div>
            </div>

            {/* Stats minimalistas */}
            <div className={styles.statsContainer}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Responsivo</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>Alta</span>
                <span className={styles.statLabel}>Perfomace</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>SEO</span>
                <span className={styles.statLabel}>Otimizado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollText}>SCROLL</div>
          <div className={styles.scrollLine}></div>
          <div className={styles.scrollArrow}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
