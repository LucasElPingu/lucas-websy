import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Lado esquerdo - LinkedIn */}
          <div className={styles.socialSection}>
            <a
              href="https://www.linkedin.com/in/lucas-silva-569ba430b"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinLink}
            >
              <div className={styles.linkedinIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Centro - Logo/Nome */}
          <div className={styles.logoSection}>
            <div className={styles.logo}>
              <h3>Lucas Websy</h3>
              <p>Sites profissionais que geram resultados</p>
            </div>
          </div>

          {/* Lado direito - Copyright */}
          <div className={styles.copyrightSection}>
            <p>
              &copy; {currentYear} Lucas Websy – Todos os direitos reservados
            </p>
          </div>
        </div>

        {/* Linha divisória */}
        <div className={styles.divider}></div>

        {/* Links adicionais e informações extras */}
        <div className={styles.footerBottom}>
          <div className={styles.additionalInfo}>
            <p>Desenvolvido com ❤️ para impulsionar seu negócio online</p>
          </div>

          <div className={styles.quickLinks}>
            <a href="#home" className={styles.quickLink}>
              Home
            </a>
            <a href="#services" className={styles.quickLink}>
              Serviços
            </a>
            <a href="#about" className={styles.quickLink}>
              Sobre
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
