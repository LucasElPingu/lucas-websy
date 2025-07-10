import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
  const whatsappLink =
    "https://wa.me/5583993324678?text=Olá,%20quero%20fazer%20um%20site%20com%20você";

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          {/* Conteúdo textual */}
          <div className={styles.textContent}>
            <div className={styles.sectionLabel}>
              <span>Sobre mim</span>
            </div>

            <h2 className={styles.title}>
              Desenvolvedor web com foco em presença digital de impacto
            </h2>

            <div className={styles.description}>
              <p>
                Olá! Me chamo <strong>Lucas</strong>, sou desenvolvedor web e
                fundador da <strong>Lucas Websy</strong>, uma iniciativa criada
                para ajudar pessoas e empresas a se destacarem no mundo digital
                com sites rápidos, modernos e personalizados.
              </p>

              <p>
                Acredito que todo projeto — grande ou pequeno — merece um site
                profissional que represente sua identidade e gere resultados
                reais. Meu objetivo é transformar ideias em experiências online
                que combinam design atrativo, desempenho e usabilidade.
              </p>
            </div>

            {/* Informações de contato */}
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.596z" />
                  </svg>
                </div>
                <div className={styles.contactDetails}>
                  <span className={styles.contactLabel}>WhatsApp</span>
                  <span className={styles.contactValue}>(83) 9 9332-4678</span>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className={styles.contactDetails}>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>
                    lucasfernando.soaresssilva@gmail.com
                  </span>
                </div>
              </div>
            </div>

            {/* Botão CTA */}
            <div className={styles.ctaContainer}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={styles.whatsappIcon}
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.596z" />
                </svg>
                Vamos conversar no WhatsApp
              </a>
            </div>
          </div>

          {/* Imagem de perfil */}
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageContainer}>
                <Image
                  src="/images/imagem1.png"
                  alt="Lucas Silva - Desenvolvedor Web"
                  width={300}
                  height={300}
                  className={styles.profileImage}
                />
                <div className={styles.imageOverlay}></div>
              </div>

              {/* Elementos decorativos */}
              <div className={styles.decorativeElements}>
                <div className={styles.floatingBadge}>
                  <span>💻</span>
                  <p>Dev Web</p>
                </div>
                <div className={styles.floatingBadge}>
                  <span>🚀</span>
                  <p>Performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
