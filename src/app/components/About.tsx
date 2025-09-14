'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';

/**
 * Componente About - Seção sobre o desenvolvedor
 * Inclui microinterações, efeitos de mouse e informações de contato
 */
export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Link direto para WhatsApp
  const whatsappLink = "https://wa.me/5583993324678?text=Olá,%20quero%20fazer%20um%20site%20com%20você";

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const contactItems = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.596z"/>
        </svg>
      ),
      label: "WhatsApp",
      value: "(83) 9 9332-4678",
      link: whatsappLink
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: "Email",
      value: "lucasfernando.soaresssilva@gmail.com",
      link: "mailto:lucasfernando.soaresssilva@gmail.com"
    }
  ];

  return (
    <>
      {/* Divisor moderno */}
      <div className="section-divider"></div>

      <section
        id="about"
        ref={sectionRef}
        className={`${styles.about} ${isVisible ? styles.visible : ''}`}
      >
      <div className={styles.container}>
        {/* Header da seção */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionNumber}>04</div>
          <div className={styles.headerContent}>
            <div className={styles.labelContainer}>
              <span className={styles.label}>Sobre mim</span>
              <div className={styles.labelLine}></div>
            </div>
            <h2 className={styles.title}>
              <span className={styles.titleLine}>DESENVOLVEDOR</span>
              <span className={styles.titleLine}>FOCADO EM</span>
              <span className={`${styles.titleLine} ${styles.titleAccent}`}>RESULTADOS</span>
            </h2>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className={styles.mainContent}>
          {/* Lado esquerdo - Texto */}
          <div className={styles.textContent}>
            <div className={styles.description}>
              <p className={styles.paragraph}>
                Me chamo <span className={styles.highlight}>Lucas</span>, sou desenvolvedor web e criei a <span className={styles.highlight}>Lucas Websy</span> com o objetivo de ajudar pessoas e empresas a colocarem sua presença online com qualidade, rapidez e design de impacto.
              </p>
              
              <p className={styles.paragraph}>
                Minha missão é transformar ideias em sites funcionais e atrativos, sempre priorizando a <span className={styles.highlight}>experiência do usuário</span> e os <span className={styles.highlight}>resultados do negócio</span>.
              </p>
            </div>

            {/* Informações de contato */}
            <div className={styles.contactSection}>
              <h3 className={styles.contactTitle}>VAMOS CONVERSAR</h3>
              
              <div className={styles.contactList}>
                {contactItems.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactItem}
                  >
                    <div className={styles.contactIcon}>
                      {item.icon}
                    </div>
                    <div className={styles.contactInfo}>
                      <span className={styles.contactLabel}>{item.label}</span>
                      <span className={styles.contactValue}>{item.value}</span>
                    </div>
                    <div className={styles.contactArrow}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Principal */}
            <div className={styles.ctaSection}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
                aria-label="Iniciar conversa via WhatsApp"
              >
                <span className={styles.ctaText}>INICIAR CONVERSA</span>
                <div className={styles.ctaIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </a>
              
              <p className={styles.ctaNote}>
                Resposta rápida garantida via WhatsApp
              </p>
            </div>
          </div>

          {/* Lado direito - Imagem e elementos visuais */}
          <div 
            className={styles.visualContent}
            onMouseMove={handleMouseMove}
          >
            <div className={styles.imageContainer}>
              <div 
                className={styles.imageWrapper}
                style={{
                  transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
                }}
              >
                <Image 
                  src="/images/image1.png" 
                  alt="Lucas Silva - Desenvolvedor Web"
                  width={600}
                  height={600}
                  className={styles.profileImage}
                />
                <div className={styles.imageOverlay}></div>
              </div>
              
              {/* Elementos decorativos flutuantes */}
              <div className={styles.floatingElements}>
                <div className={styles.floatingBadge} style={{
                  transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`
                }}>
                  <span className={styles.badgeIcon}>💻</span>
                  <span className={styles.badgeText}>DEV</span>
                </div>
                
                <div className={styles.floatingBadge} style={{
                  transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * -0.025}px)`
                }}>
                  <span className={styles.badgeIcon}>⚡</span>
                  <span className={styles.badgeText}>FAST</span>
                </div>
                
                <div className={styles.floatingBadge} style={{
                  transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * 0.02}px)`
                }}>
                  <span className={styles.badgeIcon}>🎯</span>
                  <span className={styles.badgeText}>FOCUS</span>
                </div>
              </div>
              
              {/* Grid decorativo */}
              <div className={styles.decorGrid}></div>
              
              {/* Linhas decorativas */}
              <div className={styles.decorLines}>
                <div className={styles.decorLine}></div>
                <div className={styles.decorLine}></div>
                <div className={styles.decorLine}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
