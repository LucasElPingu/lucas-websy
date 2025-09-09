import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/**
 * Configuração da fonte Inter para melhor legibilidade
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lucas Websy - Desenvolvimento de Sites Profissionais | Lucas Silva",
  description: "Desenvolvedor web especializado em criar sites profissionais, e-commerce e landing pages modernas. Sites rápidos, responsivos e otimizados para SEO que geram resultados para seu negócio.",
  keywords: [
    "desenvolvimento web",
    "criação de sites",
    "sites profissionais",
    "e-commerce",
    "landing pages",
    "Lucas Websy",
    "desenvolvedor web",
    "sites responsivos",
    "SEO",
    "performance web",
    "Lucas Silva",
    "sites modernos",
    "desenvolvimento frontend"
  ].join(", "),
  authors: [{ name: "Lucas Silva", url: "https://lucaswebsy.com" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lucaswebsy.com",
    siteName: "Lucas Websy",
    title: "Lucas Websy - Desenvolvimento de Sites Profissionais",
    description: "Sites rápidos, modernos e personalizados que geram resultados para seu negócio. Especialista em e-commerce e landing pages.",
    images: [
      {
        url: "/images/share.png",
        width: 1200,
        height: 630,
        alt: "Lucas Websy - Desenvolvimento Web Profissional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Websy - Desenvolvimento de Sites Profissionais",
    description: "Sites rápidos, modernos e personalizados que geram resultados para seu negócio.",
    images: ["/images/share.png"],
    creator: "@lucaswebsy",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  category: "technology",
};

// ✅ Correto: export separado para viewport
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

/**
 * Layout raiz da aplicação
 * Configuração global de HTML, fontes e estrutura básica
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Favicon e ícones */}
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16.png" />
        <link rel="manifest" href="/images/site.webmanifest" />
        
        {/* Meta tags adicionais para SEO */}
        <meta name="theme-color" content="#1F1D1D" />
        <meta name="msapplication-TileColor" content="#1F1D1D" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* JSON-LD Schema para dados estruturados */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Lucas Silva",
              "alternateName": "Lucas Websy",
              "description": "Desenvolvedor web especializado em sites profissionais e e-commerce",
              "url": "https://lucaswebsy.com",
              "image": "https://lucaswebsy.com/images/imagem1.png",
              "sameAs": [
                "https://www.linkedin.com/in/lucas-silva-569ba430b",
                "https://wa.me/5583993324678"
              ],
              "jobTitle": "Desenvolvedor Web",
              "worksFor": {
                "@type": "Organization",
                "name": "Lucas Websy"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR",
                "addressRegion": "PB"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-83-99332-4678",
                "contactType": "customer service",
                "availableLanguage": ["Portuguese", "English"],
                "contactOption": "TollFree"
              },
              "offers": {
                "@type": "Offer",
                "description": "Desenvolvimento de sites profissionais, e-commerce e landing pages",
                "category": "Web Development Services"
              }
            })
          }}
        />
        
        {/* Schema para serviços oferecidos */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Desenvolvimento de Sites Profissionais",
              "description": "Criação de sites modernos, responsivos e otimizados para SEO",
              "provider": {
                "@type": "Person",
                "name": "Lucas Silva"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Brasil"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços Web",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sites Profissionais"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E-commerce"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Landing Pages"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Container principal da aplicação */}
        <div id="root">
          {children}
        </div>
        
      </body>
    </html>
  );
}
