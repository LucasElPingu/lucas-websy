import styles from "./Hero.module.css";

export default function Hero() {
  const whatsappLink =
    "https://wa.me/5583993324678?text=Olá,%20quero%20fazer%20um%20site%20com%20você";

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          {/* Lado esquerdo - Conteúdo principal */}
          <div className={styles.textContent}>
            <h1 className={styles.headline}>
              Profissionalize sua marca
              <span className={styles.highlight}> Online.</span>
            </h1>

            <p className={styles.subheadline}>
              Sites rápidos, modernos e personalizados para sua empresa ou
              projeto.
            </p>

            <div className={styles.ctaContainer}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                Solicitar orçamento
              </a>
            </div>
          </div>

          {/* Lado direito - Composição visual */}
          <div className={styles.visualContent}>
            <div className={styles.codeWindow}>
              <div className={styles.windowHeader}>
                <div className={styles.windowControls}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                </div>
                <span className={styles.filename}>website.tsx</span>
              </div>
              <div className={styles.codeContent}>
                <div className={styles.codeLine}>
                  <span className={styles.keyword}>const</span>
                  <span className={styles.variable}> website</span>
                  <span className={styles.operator}> = </span>
                  <span className={styles.string}>{"{"}</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.property}> design</span>
                  <span className={styles.operator}>: </span>
                  <span className={styles.string}>moderno</span>
                  <span className={styles.operator}>,</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.property}> performance</span>
                  <span className={styles.operator}>: </span>
                  <span className={styles.string}>rápido</span>
                  <span className={styles.operator}>,</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.property}> responsive</span>
                  <span className={styles.operator}>: </span>
                  <span className={styles.boolean}>true</span>
                  <span className={styles.operator}>,</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.property}> seo</span>
                  <span className={styles.operator}>: </span>
                  <span className={styles.string}>otimizado</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.string}>{"}"}</span>
                </div>
              </div>
            </div>

            {/* Elementos decorativos */}
            <div className={styles.floatingElements}>
              <div className={styles.floatingCard}>
                <span>🚀</span>
                <p>Performance</p>
              </div>
              <div className={styles.floatingCard}>
                <span>📱</span>
                <p>Responsivo</p>
              </div>
              <div className={styles.floatingCard}>
                <span>🎨</span>
                <p>Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
