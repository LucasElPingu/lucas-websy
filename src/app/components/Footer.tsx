"use client";
import { useEffect, useRef, useState } from 'react';
import styles from './Footer.module.css';

/**
 * Componente Footer - Rodapé completo do site
 * Contém navegação, informações de contato e links sociais
 */
export default function Footer({ showContact = true }: { showContact?: boolean }) {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const node = footerRef.current;
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationLinks = [
    { id: 'home', label: 'Home', number: '01' },
    { id: 'services', label: 'Serviços', number: '02' },
    { id: 'benefits', label: 'Benefícios', number: '03' },
    { id: 'about', label: 'Sobre', number: '04' },
    { id: 'posts', label: 'posts', number: '05' }
  ];

  return (
    <>
      {/* Divisor moderno */}
      <div className="section-divider"></div>

      <footer
        id="contact"
        ref={footerRef}
        className={`${styles.footer} ${isVisible ? styles.visible : ''}`}
      >
        {showContact ? (
          <div className={styles.container}>
            {/* Header do Footer */}
            <div className={styles.footerHeader}>
              <div className={styles.sectionNumber}>06</div>
              <div className={styles.headerContent}>
                <div className={styles.labelContainer}>
                  <span className={styles.label}>Contato</span>
                  <div className={styles.labelLine}></div>
                </div>
                <h2 className={styles.title}>
                  <span className={styles.titleLine}>VAMOS CRIAR</span>
                  <span className={styles.titleLine}>ALGO</span>
                  <span className={`${styles.titleLine} ${styles.titleAccent}`}>EXTRAORDINÁRIO</span>
                </h2>
                <p className={styles.subtitle}>
                  Pronto para transformar sua presença digital? 
                  Entre em contato e vamos discutir seu projeto.
                </p>
              </div>
            </div>

            {/* Conteúdo principal do footer */}
            <div className={styles.footerContent}>
              {/* Logo e descrição */}
              <div className={styles.brandSection}>
                <div className={styles.logo}>
                  <span className={styles.logoText}>Lucas</span>
                  <span className={styles.logoAccent}>Websy</span>
                </div>
                <p className={styles.brandDescription}>
                  Desenvolvedor web especializado em criar experiências digitais 
                  modernas e eficazes que geram resultados.
                </p>

                {/* LinkedIn */}
                <div className={styles.socialSection}>
                  <a
                    href="https://www.linkedin.com/in/lucas-silva-569ba430b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedinLink}
                    aria-label="Perfil do LinkedIn de Lucas Silva"
                  >
                    <div className={styles.linkedinIcon}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <span className={styles.linkedinText}>LinkedIn</span>
                    <div className={styles.linkedinArrow}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              {/* Navegação */}
              <div className={styles.navigationSection}>
                <h3 className={styles.navTitle}>NAVEGAÇÃO</h3>
                <nav className={styles.footerNav}>
                  {navigationLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className={styles.navLink}
                    >
                      <span className={styles.navNumber}>{link.number}</span>
                      <span className={styles.navText}>{link.label}</span>
                      <div className={styles.navLine}></div>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Contato direto */}
              <div className={styles.contactSection}>
                <h3 className={styles.contactTitle}>CONTATO DIRETO</h3>

                <div className={styles.contactList}>
                  <a
                    href="https://wa.me/5583993324678?text=Olá,%20quero%20fazer%20um%20site%20com%20você"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactItem}
                    aria-label="Entrar em contato via WhatsApp"
                  >
                    <div className={styles.contactIcon}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.596z"/>
                      </svg>
                    </div>
                    <div className={styles.contactInfo}>
                      <span className={styles.contactLabel}>WhatsApp</span>
                      <span className={styles.contactValue}>(83) 9 9332-4678</span>
                    </div>
                  </a>

                  <a
                    href="mailto:lucasfernando.soaresssilva@gmail.com"
                    className={styles.contactItem}
                    aria-label="Enviar email para Lucas Silva"
                  >
                    <div className={styles.contactIcon}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div className={styles.contactInfo}>
                      <span className={styles.contactLabel}>Email</span>
                      <span className={styles.contactValue}>lucasfernando.soaresssilva@gmail.com</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Footer bottom */}
              <div className={styles.footerBottom}>
                <div className={styles.divider}></div>
                <div className={styles.bottomContent}>
                  <div className={styles.copyright}>
                    <p>&copy; {currentYear} Lucas Websy. Todos os direitos reservados</p>
                  </div>

                  <div className={styles.credits}>
                    <p>Desenvolvido com ❤️ para impulsionar seu negócio digital</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.container}>
            <div className={styles.footerBottom}>
              <div className={styles.divider}></div>
              <div className={styles.bottomContent}>
                <div className={styles.copyright}>
                  <p>&copy; {currentYear} Lucas Websy. Todos os direitos reservados.</p>
                </div>
                <div className={styles.credits}>
                  <p>Desenvolvido com ❤️ para impulsionar seu negócio digital</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </footer>
    </>
  );
}
