/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://lucaswebsy.com.br', // URL base do seu site
  generateRobotsTxt: true,              // Gera também o robots.txt automaticamente
  sitemapSize: 7000,                    // Número máximo de URLs por sitemap
  changefreq: 'monthly',                // Frequência de atualização recomendada
  priority: 0.7,                        // Prioridade média para indexação
  exclude: [],                          // Rotas que você quer excluir (ex: ['admin/**'])
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://lucaswebsy.com.br/sitemap-0.xml', // Para garantir que o sitemap-0.xml seja listado
    ],
  },
};
