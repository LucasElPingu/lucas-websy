import styles from "./Benefits.module.css";

export default function Benefits() {
  const benefits = [
    {
      icon: "🚀",
      title: "Entrega rápida",
      description: "Desenvolvimento ágil dependendo da complexidade do projeto",
    },
    {
      icon: "🎯",
      title: "Foco em resultados",
      description: "Sites otimizados para conversão e engajamento",
    },
    {
      icon: "📱",
      title: "Totalmente responsivo",
      description: "Perfeito em todos os dispositivos e tamanhos de tela",
    },
    {
      icon: "🧠",
      title: "Visual moderno",
      description: "Design contemporâneo adaptado ao seu negócio",
    },
    {
      icon: "📞",
      title: "Suporte pós-entrega (opcional)",
      description: "Acompanhamento e suporte técnico quando necessário",
    },
    {
      icon: "⚡",
      title: "Performance otimizada",
      description: "Sites rápidos com carregamento otimizado",
    },
  ];

  return (
    <section id="benefits" className={styles.benefits}>
      <div className={styles.container}>
        {/* Cabeçalho da seção */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Benefícios e Diferenciais</h2>
          <p className={styles.subtitle}>
            Por que escolher a Lucas Websy para seu projeto digital
          </p>
        </div>

        {/* Grid de benefícios */}
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <div className={styles.benefitHeader}>
                <div className={styles.benefitIcon}>
                  <span>{benefit.icon}</span>
                </div>
                <div className={styles.checkmark}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <polyline points="20,6 9,17 4,12"></polyline>
                  </svg>
                </div>
              </div>
              <div className={styles.benefitContent}>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Estatísticas visuais */}
        <div className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Responsivo</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>⚡</div>
              <div className={styles.statLabel}>Performance</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>🎯</div>
              <div className={styles.statLabel}>Resultados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
