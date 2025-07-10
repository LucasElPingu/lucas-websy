import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucas Websy - Sites Profissionais e Modernos",
  description:
    "Sites rápidos, modernos e personalizados para sua empresa ou projeto. Criação de sites profissionais, e-commerce e landing pages.",
  keywords:
    "criação de sites, desenvolvimento web, sites profissionais, e-commerce, landing pages, Lucas Websy",
  authors: [{ name: "Lucas Silva" }],
  openGraph: {
    title: "Lucas Websy - Sites Profissionais e Modernos",
    description:
      "Sites rápidos, modernos e personalizados para sua empresa ou projeto.",
    url: "https://lucaswebsy.com.br",
    siteName: "Lucas Websy",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/share.png",
        width: 1200,
        height: 630,
        alt: "Lucas Websy - Sites Profissionais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Websy - Sites Profissionais e Modernos",
    description:
      "Sites rápidos, modernos e personalizados para sua empresa ou projeto.",
      images: ["/images/share.png"],
  },
  other: {
    "og:image": "https://lucaswebsy.com.br/images/share.png",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": "Lucas Websy - Sites Profissionais",
    "og:type": "website",
    "og:site_name": "Lucas Websy",
    "og:locale": "pt_BR",
    "og:url": "https://lucaswebsy.com.br",
    "og:title": "Lucas Websy - Sites Profissionais e Modernos",
    "og:description":
      "Sites rápidos, modernos e personalizados para sua empresa ou projeto.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Lucas Websy",
              description: "Criação de sites profissionais e modernos",
              url: "https://lucaswebsy.com.br",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-83-9-9332-4678",
                contactType: "customer service",
                availableLanguage: "Portuguese",
              },
              founder: {
                "@type": "Person",
                name: "Lucas Silva",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
