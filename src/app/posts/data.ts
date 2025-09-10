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
    title: "5 Motivos Para Ter um Site em 2025",
    excerpt:
      "Descubra por que ter um site profissional em 2025 é essencial: credibilidade, presença no Google, funcionamento 24h, fortalecimento da marca e integração com redes sociais e vendas.",
    date: "2025-01-01T00:00:00.000Z",
    coverImage: "/images/5-motivos-site.png",
    tags: ["negócios", "marketing", "site", "2025"],
    blocks: [
      {
        type: "paragraph",
        text: "1️⃣ **Mais credibilidade para o seu negócio** — Em 2025, os consumidores pesquisam tudo antes de tomar uma decisão. Ter um site profissional não é mais luxo: é sinal de seriedade. Um site bem estruturado transmite confiança e se torna seu cartão de visita digital.",
      },
      {
        type: "paragraph",
        text: "2️⃣ **Seu site funciona 24h por dia** — Diferente de redes sociais, que dependem de algoritmos, o site está sempre disponível. Isso significa que, enquanto você dorme, ele pode atrair clientes, responder dúvidas e gerar vendas.",
      },
      {
        type: "paragraph",
        text: "3️⃣ **Apareça no Google e atraia novos clientes** — Quando alguém procura por serviços ou produtos que você oferece, o Google é o primeiro lugar onde essa pessoa vai. Com SEO bem feito, seu site pode aparecer no topo, trazendo tráfego qualificado de forma orgânica.",
      },
      {
        type: "paragraph",
        text: "4️⃣ **Fortaleça sua marca e se destaque da concorrência** — Redes sociais são ótimas, mas são limitadas. No seu site, você tem liberdade total para criar páginas de portfólio, cases de sucesso e depoimentos de clientes. Isso cria uma narrativa única para a sua marca.",
      },
      {
        type: "paragraph",
        text: "5️⃣ **Integração com redes sociais e canais de vendas** — Seu site pode centralizar WhatsApp, Instagram, checkout online e até chatbots. Isso facilita o caminho do cliente e aumenta as chances de conversão.",
      },
      { type: "image", src: "/images/5-motivos-img2.png", alt: "Exemplo de site profissional em 2025" },
    ],
  },
  {
    slug: "como-escolher-melhor-layout",
    title: "Como Escolher o Melhor Layout Para o Seu Site",
    excerpt:
      " Um layout bem planejado é a base de um site de sucesso. Veja dicas práticas para escolher o design ideal em 2025.",
    date: "2025-02-01T00:00:00.000Z",
    coverImage: "/images/stickman-think.png",
    tags: ["design", "layout", "responsivo"],
    blocks: [
      {
        type: "paragraph",
        text: "O layout do seu site é como a vitrine de uma loja. Se for confusa, ninguém entra. Se for atraente, clara e organizada, o visitante se sente confortável para explorar. Em 2025, o layout certo é essencial para transmitir profissionalismo e garantir uma boa experiência do usuário.",
      },
      {
        type: "list",
        items: [
          "✅ **Priorize um Layout Limpo e Organizado** — Evite excesso de elementos e use espaços em branco para destacar o que realmente importa.",
          "📱 **Responsividade é Essencial** — O site deve se adaptar a qualquer tela, do celular ao desktop, sem perder usabilidade.",
          "⚡ **Velocidade de Carregamento** — Usuários abandonam sites lentos. Otimize imagens e minimize scripts para ganhar performance.",
          "🎨 **Coerência com a Identidade Visual** — Use cores, fontes e elementos que reflitam sua marca. A consistência gera confiança.",
          "💡 **Busque Inspiração** — Analise sites do seu segmento, veja boas práticas e crie algo único, adaptado ao seu público.",
        ],
      },
      { type: "image", src: "/images/share.png", alt: "Exemplo comparativo de layouts limpos x confusos" },
    ],
  },
  {
    slug: "erros-comuns-criar-site",
    title: "Erros Comuns ao Criar um Site e Como Evitá-los",
    excerpt:
      "Veja os 5 erros mais comuns na criação de sites e como evitá-los para garantir performance, usabilidade e SEO em 2025.",
    date: "2025-03-01T00:00:00.000Z",
    coverImage: "/images/errors-image.png",
    tags: ["erros", "boas-praticas", "seo"],
    blocks: [
      {
        type: "paragraph",
        text: " Muitos sites falham logo na largada porque cometem erros básicos que poderiam ser facilmente evitados. Esses erros prejudicam a experiência do usuário, derrubam o SEO e podem fazer seu site perder credibilidade. Aqui estão os principais pontos de atenção:",
      },
      {
        type: "list",
        items: [
          "🐢 **Site Lento e Pesado** — Otimize imagens, use hospedagem confiável e evite excesso de plugins.",
          "🌀 **Layout Confuso** — Um design desorganizado desmotiva o visitante. Use menus claros e hierarquia visual.",
          "📱 **Falta de Responsividade** — Teste em celulares, tablets e desktops. A maioria dos acessos hoje é mobile.",
          "🔍 **SEO Malfeito** — Configure títulos, descrições, sitemap.xml e URLs amigáveis para ser encontrado no Google.",
          "📖 **Conteúdo Difícil de Ler** — Prefira textos objetivos, fontes legíveis e contraste adequado de cores.",
        ],
      },
      { type: "image", src: "/images/share.png", alt: "Checklist de boas práticas para sites" },
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
