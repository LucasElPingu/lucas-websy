"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para aplicar efeito no header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image
            src="/images/icon.png"
            alt="Ícone da Lucas Websy"
            width={37}
            height={37}
            className={styles.logoIcon}
          />
          <h1>Lucas Websy</h1>
        </div>

        {/* Navegação Desktop */}
        <nav className={styles.nav}>
          <button
            onClick={() => scrollToSection("home")}
            className={styles.navLink}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className={styles.navLink}
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection("benefits")}
            className={styles.navLink}
          >
            Benefícios
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={styles.navLink}
          >
            Sobre mim
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={styles.navLink}
          >
            Contato
          </button>
        </nav>

        {/* Menu Mobile - Hamburger */}
        <button
          className={styles.mobileMenuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`${styles.hamburgerLine} ${
              isMenuOpen ? styles.open : ""
            }`}
          ></span>
          <span
            className={`${styles.hamburgerLine} ${
              isMenuOpen ? styles.open : ""
            }`}
          ></span>
          <span
            className={`${styles.hamburgerLine} ${
              isMenuOpen ? styles.open : ""
            }`}
          ></span>
        </button>

        {/* Menu Mobile */}
        <div
          className={`${styles.mobileMenu} ${
            isMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          <button
            onClick={() => scrollToSection("home")}
            className={styles.mobileNavLink}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className={styles.mobileNavLink}
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection("benefits")}
            className={styles.mobileNavLink}
          >
            Benefícios
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={styles.mobileNavLink}
          >
            Sobre mim
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={styles.mobileNavLink}
          >
            Contato
          </button>
        </div>
      </div>
    </header>
  );
}
