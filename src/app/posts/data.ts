export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; width?: number; height?: number };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO string
  coverImage: string; // public path
  tags: string[];
  blocks: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "5-motivos-para-ter-um-site-em-2025",
    title: "5 motivos para ter um site em 2025",
    excerpt:
      "Credibilidade, funcionamento 24/7, presença no Google, fortalecimento de marca e integração com redes e vendas.",
    date: "2025-01-01T00:00:00.000Z",
    coverImage: "/images/imagem1.png",
    tags: ["negócios", "marketing", "site", "2025"],
    blocks: [
      {
        type: "paragraph",
        text: "1️⃣ Mais credibilidade para o seu negócio — Um site profissional passa confiança aos clientes. Ter uma presença online bem construída mostra que você leva seu negócio a sério e facilita a primeira impressão para novos clientes.",
      },
      {
        type: "paragraph",
        text: "2️⃣ Seu site funciona 24h por dia — Diferente das redes sociais, um site está sempre disponível para apresentar seus serviços, responder dúvidas e converter visitantes mesmo fora do horário comercial.",
      },
      {
        type: "paragraph",
        text: "3️�� Aparece no Google e atrai novos clientes — Com SEO e conteúdo bem trabalhado, seu site pode ser encontrado por quem busca pelos seus serviços. Isso gera tráfego qualificado e novas oportunidades de negócio.",
      },
      {
        type: "paragraph",
        text: "4️⃣ Fortalece sua marca e diferencia da concorrência — Um site permite controlar a narrativa da sua marca, mostrar portfólio, depoimentos e cases. Isso ajuda a destacar seus diferenciais frente à concorrência.",
      },
      {
        type: "paragraph",
        text: "5️⃣ Integração com redes sociais e canais de vendas — Seu site pode centralizar canais de venda, integrações com WhatsApp, redes sociais e ferramentas de pagamento, facilitando a jornada do cliente.",
      },
      { type: "image", src: "/images/imagem1.png", alt: "Exemplo de site profissional" },
      {
        type: "list",
        items: [
          "Use imagens e ilustrações para tornar o conteúdo mais atrativo.",
          "Inclua chamadas para ação claras: orçamento, contato ou compra.",
          "Mantenha o conteúdo atualizado para melhorar SEO e relevância.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): Post[] {
  return posts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
