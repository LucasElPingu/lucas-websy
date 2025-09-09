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
    coverImage: "/images/5-motivos-site.png",
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
        text: "3️⃣ Aparece no Google e atrai novos clientes — Com SEO e conteúdo bem trabalhado, seu site pode ser encontrado por quem busca pelos seus serviços. Isso gera tráfego qualificado e novas oportunidades de negócio.",
      },
      {
        type: "paragraph",
        text: "4️⃣ Fortalece sua marca e diferencia da concorrência — Um site permite controlar a narrativa da sua marca, mostrar portfólio, depoimentos e cases. Isso ajuda a destacar seus diferenciais frente à concorrência.",
      },
      {
        type: "paragraph",
        text: "5️⃣ Integração com redes sociais e canais de vendas — Seu site pode centralizar canais de venda, integrações com WhatsApp, redes sociais e ferramentas de pagamento, facilitando a jornada do cliente.",
      },
      { type: "image", src: "/images/5-motivos-img2.png", alt: "Exemplo de site profissional" },
    ],
  },
  {
    slug: "como-escolher-melhor-layout",
    title: "Como Escolher o Melhor Layout Para o Seu Site",
    excerpt: "Escolher o layout certo é fundamental para a experiência do usuário e conversão. Veja como escolher o layout ideal para seu site em 2025.",
    date: "2025-02-01T00:00:00.000Z",
    coverImage: "/images/stickman-think.png",
    tags: ["design", "layout", "responsivo"],
    blocks: [
      { type: "paragraph", text: "Escolher o layout certo é fundamental para o sucesso do seu site. Um bom design não é apenas visualmente agradável, mas também facilita a navegação, melhora a experiência do usuário e aumenta suas chances de conversão. Neste post, vamos mostrar como escolher o layout ideal para o seu site em 2025." },
      { type: "list", items: [
        "Priorize um Layout Limpo e Organizado — Use espaços em branco, organize o conteúdo em seções claras e evite excesso de elementos.",
        "Responsividade é Essencial — Certifique-se de que seu layout se adapta perfeitamente a qualquer tamanho de tela.",
        "Velocidade de Carregamento — Prefira designs que carreguem rápido, otimizando imagens e scripts.",
        "Coerência com Sua Identidade Visual — Escolha cores, fontes e elementos que reflitam a sua marca.",
        "Inspiração e Exemplos — Pesquise sites do seu segmento e use referências para criar algo único."
      ]},
      { type: "image", src: "/images/share.png", alt: "Comparação de layouts limpos x confusos" }
    ]
  },
  {
    slug: "erros-comuns-criar-site",
    title: "Erros Comuns ao Criar um Site e Como Evitá-los",
    excerpt: "Erros comuns comprometem performance, usabilidade e SEO. Saiba o que evitar ao criar seu site.",
    date: "2025-03-01T00:00:00.000Z",
    coverImage: "/images/errors-image.png",
    tags: ["erros", "boas-praticas", "seo"],
    blocks: [
      { type: "paragraph", text: "Criar um site pode parecer simples, mas muitos cometem erros que prejudicam a performance, a usabilidade e até o SEO. Neste post, você vai conhecer os principais erros e como evitá-los." },
      { type: "list", items: [
        "Site Lento e Pesado — Otimize imagens, scripts e escolha um layout leve.",
        "Layout Confuso ou Desorganizado — Um design limpo ajuda o usuário a encontrar o que precisa.",
        "Falta de Responsividade — Teste em diferentes dispositivos antes de publicar.",
        "SEO Malfeito — Use títulos, meta descrições, URLs amigáveis e sitemap.xml.",
        "Conteúdo Difícil de Ler — Evite textos muito longos, fontes pequenas ou cores inadequadas."
      ]},
      { type: "image", src: "/images/share.png", alt: "Checklist de boas práticas" }
    ]
  }
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): Post[] {
  return posts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
