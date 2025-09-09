"use client";

"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation';

/**
 * Componente Header - Navegação principal do site
 * Header fixo no topo com navegação responsiva e menu mobile
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detecta o scroll para aplicar efeitos visuais no header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();
  const router = useRouter();

  // Navega para seção; se já estiver na home faz scroll suave, caso contrário navega para /#section
  const navigateToSection = (sectionId: string) => {
    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
        return;
      }
    }

    router.push(`/#${sectionId}`);
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo principal da marca */}
        <div className={styles.logo}>
          <a
            href="/"
            className={styles.logoButton}
            onClick={(e) => {
              e.preventDefault();
              router.push('/');
              setIsMenuOpen(false);
            }}
          >
            <Image
              src="/images/icon.png"
              width={41}
              height={41}
              alt="Logo do site"
            />
            <span className={styles.logoText}>Lucas</span>
            <span className={styles.logoAccent}>Websy</span>
          </a>
        </div>

        {/* Navegação para desktop */}
        <nav className={styles.nav}>
          <button
            onClick={() => navigateToSection("home")}
            className={styles.navLink}
          >
            <span className={styles.navText}>Home</span>
          </button>
          <button
            onClick={() => navigateToSection("services")}
            className={styles.navLink}
          >
            <span className={styles.navText}>Serviços</span>
          </button>
          <button
            onClick={() => navigateToSection("benefits")}
            className={styles.navLink}
          >
            <span className={styles.navText}>Benefícios</span>
          </button>
          <button
            onClick={() => navigateToSection("about")}
            className={styles.navLink}
          >
            <span className={styles.navText}>Sobre</span>
          </button>
          <button
            onClick={() => navigateToSection("posts")}
            className={styles.navLink}
          >
            <span className={styles.navText}>Posts</span>
          </button>
          <button
            onClick={() => navigateToSection("contact")}
            className={styles.navLink}
          >
            <span className={styles.navText}>Contato</span>
          </button>
        </nav>

        {/* Botão toggle para menu mobile */}
        <button
          className={`${styles.mobileToggle} ${
            isMenuOpen ? styles.mobileToggleOpen : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className={styles.toggleLine}></span>
          <span className={styles.toggleLine}></span>
        </button>

        {/* Menu mobile com overlay completo */}
        <div
          className={`${styles.mobileMenu} ${
            isMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          <div className={styles.mobileMenuContent}>
            <nav className={styles.mobileNav}>
              <button
                onClick={() => { navigateToSection("home"); setIsMenuOpen(false); }}
                className={styles.mobileNavLink}
              >
                <span className={styles.mobileNavText}>Home</span>
                <div className={styles.mobileNavLine}></div>
              </button>
              <button
                onClick={() => { navigateToSection("services"); setIsMenuOpen(false); }}
                className={styles.mobileNavLink}
              >
                <span className={styles.mobileNavText}>Serviços</span>
                <div className={styles.mobileNavLine}></div>
              </button>
              <button
                onClick={() => { navigateToSection("benefits"); setIsMenuOpen(false); }}
                className={styles.mobileNavLink}
              >
                <span className={styles.mobileNavText}>Benefícios</span>
                <div className={styles.mobileNavLine}></div>
              </button>
              <button
                onClick={() => { navigateToSection("about"); setIsMenuOpen(false); }}
                className={styles.mobileNavLink}
              >
                <span className={styles.mobileNavText}>Sobre</span>
                <div className={styles.mobileNavLine}></div>
              </button>
              <button
                onClick={() => { navigateToSection("posts"); setIsMenuOpen(false); }}
                className={styles.mobileNavLink}
              >
                <span className={styles.mobileNavText}>Posts</span>
                <div className={styles.mobileNavLine}></div>
              </button>
              <button
                onClick={() => { navigateToSection("contact"); setIsMenuOpen(false); }}
                className={styles.mobileNavLink}
              >
                <span className={styles.mobileNavText}>Contato</span>
                <div className={styles.mobileNavLine}></div>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
