import styles from "./Services.module.css";

export default function Services() {
  const whatsappLink =
    "https://wa.me/5583993324678?text=Olá,%20quero%20fazer%20um%20site%20com%20você";

  const services = [
    {
      icon: "✅",
      title: "Criação de sites profissionais",
      description: "Sites para empresas, autônomos e projetos pessoais",
    },
    {
      icon: "🛒",
      title: "Lojas virtuais (e-commerce)",
      description: "Criação de e-commerces modernos, rápidos e seguros.",
    },
    {
      icon: "📱",
      title: "Landing pages",
      description: "Páginas únicas para produtos, eventos ou serviços",
    },
    {
      icon: "🎨",
      title: "Design moderno e personalizado",
      description: "Visual feito sob medida",
    },
    {
      icon: "⚡",
      title: "Sites rápidos e mobile-first",
      description: "Otimização de desempenho",
    },
    {
      icon: "🤖",
      title: "Serviços com Inteligência Artificial",
      description: "Textos prontos, imagens, chatbot",
    },
    {
      icon: "🌍",
      title: "Tradução automática",
      description: "Acessível para visitantes internacionais",
    },
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        {/* Cabeçalho da seção */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Serviços oferecidos</h2>
          <p className={styles.subtitle}>
            Soluções completas para colocar seu negócio online com qualidade e
            eficiência
          </p>
        </div>

        {/* Grid de serviços */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <span>{service.icon}</span>
              </div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA secundário */}
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>Pronto para começar seu projeto?</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
