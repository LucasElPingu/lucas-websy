/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://lucaswebsy.com',
  generateRobotsTxt: true, // Gera também o robots.txt
  sitemapSize: 7000,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: [],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
