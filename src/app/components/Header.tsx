"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

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

  // Função para scroll suave até seções específicas
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Fecha o menu mobile após navegação
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo principal da marca */}
        <div className={styles.logo}>
          <button
            onClick={() => scrollToSection("home")}
            className={styles.logoButton}
          >
                        <Image
              src="/images/icon.png"
              width={41}
              height={41}
              alt="Logo do site"
            />
            <span className={styles.logoText}>Lucas</span>
            <span className={styles.logoAccent}>Websy</span>
          </button>
        </div>

        {/* Navegação para desktop */}
        <nav className={styles.nav}>
          <button
            onClick={() => scrollToSection("home")}
            className={styles.navLink}
          >
            <span className={styles.navText}>Home</span>
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className={styles.navLink}
          >
            <span className={styles.navText}>Serviços</span>
          </button>
          <button
            onClick={() => scrollToSection("benefits")}
            className={styles.navLink}
          >
            <span className={styles.navText}>Benefícios</span>
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={styles.navLink}
          >
            <span className={styles.navText}>Sobre</span>
          </button>
          <Link href="/#posts" className={styles.navLink}>
            <span className={styles.navText}>Posts</span>
          </Link>
          <button
            onClick={() => scrollToSection("contact")}
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
                onClick={() => scrollToSection("home")}
                className={styles.mobileNavLink}
              >
                <span className={styles.mobileNavText}>Home</span>
                <div className={styles.mobileNavLine}></div>
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={styles.mobileNavLink}
              >
                <span className={styles.mobileNavText}>Serviços</span>
                <div className={styles.mobileNavLine}></div>
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className={styles.mobileNavLink}
              >
                <span className={styles.mobileNavText}>Benefícios</span>
                <div className={styles.mobileNavLine}></div>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={styles.mobileNavLink}
              >
                <span className={styles.mobileNavText}>Sobre</span>
                <div className={styles.mobileNavLine}></div>
              </button>
              <Link href="/#posts" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                <span className={styles.mobileNavText}>Posts</span>
                <div className={styles.mobileNavLine}></div>
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
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
