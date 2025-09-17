export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | {
      type: "image";
      src: string;
      alt: string;
      width?: number;
      height?: number;
    };

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
    date: "2025-09-10T00:00:00.000Z",
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
      {
        type: "image",
        src: "/images/5-motivos-img2.png",
        alt: "Exemplo de site profissional em 2025",
      },
    ],
  },
  {
    slug: "como-escolher-melhor-layout",
    title: "Como Escolher o Melhor Layout Para o Seu Site",
    excerpt:
      " Um layout bem planejado é a base de um site de sucesso. Veja dicas práticas para escolher o design ideal em 2025.",
    date: "2025-09-10T00:00:00.000Z",
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
      {
        type: "image",
        src: "/images/share.png",
        alt: "Exemplo comparativo de layouts limpos x confusos",
      },
    ],
  },
  {
    slug: "erros-comuns-criar-site",
    title: "Erros Comuns ao Criar um Site e Como Evitá-los",
    excerpt:
      "Veja os 5 erros mais comuns na criação de sites e como evitá-los para garantir performance, usabilidade e SEO em 2025.",
    date: "2025-09-10T00:00:00.000Z",
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
      {
        type: "image",
        src: "/images/share.png",
        alt: "Checklist de boas práticas para sites",
      },
    ],
  },
  {
    slug: "negocio-perde-clientes-sem-site",
    title: "Por que seu negócio perde clientes sem um site profissional",
    excerpt:
      "Descubra os principais motivos pelos quais empresas que não possuem um site profissional acabam perdendo clientes e oportunidades todos os dias.",
    date: "2025-09-10T00:00:00.000Z",
    coverImage: "/images/post4-image.png",
    tags: ["sites", "credibilidade", "vendas", "seo"],
    blocks: [
      {
        type: "paragraph",
        text: "Muitos empreendedores acreditam que apenas ter um perfil no Instagram ou no Facebook já é suficiente para atrair clientes. Mas a verdade é que **sem um site profissional seu negócio perde credibilidade, vendas e visibilidade online**. Em 2025, depender apenas de redes sociais é um risco que pode custar caro.",
      },
      {
        type: "list",
        items: [
          "🔍 **Você não aparece no Google** — A maioria das pessoas pesquisa no Google antes de comprar. Se sua empresa não tem site, ela simplesmente não existe para esses clientes.",
          "❌ **Falta de credibilidade** — Negócios sem site passam a impressão de serem menos profissionais. Um site bem estruturado transmite confiança imediata.",
          "⌛ **Perda de oportunidades 24/7** — Enquanto você dorme, um site pode estar vendendo ou captando clientes. Sem ele, suas oportunidades ficam limitadas ao horário de atendimento.",
          "📱 **Dificuldade de comunicação** — Um site reúne todas as informações em um só lugar: serviços, contatos, localização e até integrações com WhatsApp e redes sociais.",
          "📉 **Concorrência na frente** — Seus concorrentes que já têm site, eles aparecem antes de você e capturam os clientes que poderiam ser seus.",
        ],
      },
      {
        type: "paragraph",
        text: "Em resumo: sem um site profissional, seu negócio fica invisível para milhares de clientes em potencial. Redes sociais ajudam, mas **o site é a base da sua presença digital**.",
      },
      {
        type: "image",
        src: "/images/share.png",
        alt: "Site profissional atrai mais clientes",
      },
      {
        type: "paragraph",
        text: "⚡ Quer evitar perder clientes para a concorrência? Invista em um site rápido, moderno e otimizado para o Google. Seu negócio merece mais visibilidade e credibilidade!",
      },
    ],
  },
  {
    slug: "redes-sociais-vs-site-profissional",
    title: "Por que Redes Sociais Nunca Substituem um Site Profissional",
    excerpt:
      "Muitos negócios acreditam que basta ter um perfil no Instagram ou Facebook para estar online. Mas a verdade é que as redes sociais não substituem a presença sólida e confiável de um site profissional. Entenda os motivos .",
    date: "2025-09-17T00:00:00.000Z",
    coverImage: "/images/social-vs-site.png",
    tags: [
      "site-profissional",
      "redes-sociais",
      "credibilidade",
      "seo",
      "marketing-digital",
      "Empreendedorismo",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Ter uma página no Instagram, Facebook ou LinkedIn é um ótimo começo para divulgar sua marca, mas confiar exclusivamente nessas plataformas é como construir uma casa em um terreno alugado: você nunca tem 100% de controle. Um site profissional, por outro lado, é como ter o seu próprio endereço na internet, permanente, estruturado e confiável.",
      },
      {
        type: "paragraph",
        text: "Muitos empreendedores acreditam que as redes sociais substituem um site porque concentram grande parte da atenção dos usuários. Porém, as redes sociais seguem regras que não são suas — elas mudam algoritmos, limitam alcance orgânico e podem até excluir sua conta sem aviso prévio. É um espaço útil, mas temporário. O site é sua base sólida, que independe de terceiros.",
      },
      {
        type: "list",
        items: [
          "📌 **Controle Absoluto sobre sua Marca** — Em um site, você decide como quer apresentar seus produtos e serviços, sem restrições de layout ou limitações de conteúdo impostas por plataformas.",
          "🔎 **Visibilidade Ampliada com SEO** — Diferente das redes sociais, onde o alcance orgânico é cada vez menor, um site otimizado aparece nas buscas do Google e atrai clientes que realmente procuram por soluções.",
          "⏰ **Disponibilidade Constante** — Um perfil no Instagram depende de seguidores ativos e do algoritmo. Seu site, por outro lado, está disponível 24 horas por dia para qualquer pessoa, em qualquer lugar do mundo.",
          "💳 **Geração de Negócios Diretos** — No site, você pode integrar formulários, WhatsApp, e até sistemas de pagamento. Isso transforma visitantes em clientes de forma muito mais eficiente.",
          "📊 **Métricas Reais e Estratégicas** — No site, você pode instalar ferramentas como Google Analytics para entender o comportamento dos usuários. Já nas redes sociais, os dados são limitados ao que a plataforma quer mostrar.",
          "🏗️ **Construção de Autoridade** — Com um blog integrado ao site, sua empresa pode publicar artigos, dicas e tutoriais que mostram conhecimento e expertise no setor. Isso é impossível de forma completa nas redes sociais.",
          "⚠️ **Risco de Dependência** — Apostar tudo em redes sociais é arriscado: basta um bloqueio ou mudança de política para que sua empresa desapareça do mapa digital. O site garante independência.",
        ],
      },
      {
        type: "paragraph",
        text: "Outro ponto muitas vezes esquecido é o **profissionalismo**. Uma empresa que tem apenas redes sociais passa a imagem de improviso. Já um site bem construído transmite seriedade, segurança e solidez. É o mesmo que comparar uma loja que só vende em feiras livres com outra que tem um espaço próprio: ambas podem vender, mas a percepção do cliente é completamente diferente.",
      },
      {
        type: "paragraph",
        text: "Além disso, nas redes sociais você disputa atenção com milhares de outros perfis e conteúdos. No seu site, o cliente está 100% focado na sua marca, sem distrações. É um espaço exclusivo, onde você pode criar a jornada ideal de navegação, desde a primeira visita até a conversão final.",
      },
      {
        type: "paragraph",
        text: "Imagine perder acesso ao seu perfil no Instagram depois de anos construindo seguidores. Isso acontece todos os dias com empresas que confiam apenas nas redes sociais. Quem tem um site, por outro lado, nunca perde sua base, pois o domínio e o conteúdo são de sua propriedade.",
      },
      {
        type: "paragraph",
        text: "Portanto, as redes sociais são ferramentas essenciais de **atração e engajamento**, mas o site é o **coração da sua presença digital**. Ele centraliza sua identidade, oferece segurança e garante que seus clientes sempre encontrem você, independentemente de mudanças externas.",
      },
      {
        type: "paragraph",
        text: "Se o objetivo do seu negócio é crescer de forma consistente e profissional, investir em um site não é opcional: é estratégico e indispensável. Redes sociais são importantes, mas não substituem a base sólida que apenas um site pode oferecer.",
      },
      {
        type: "image",
        src: "/images/share.png",
        alt: "Infográfico mostrando a diferença entre site e redes sociais",
      },
    ],
  },
  {
    slug: "uso-consciente-inteligencia-artificial",
    title: "Uso de Inteligência Artificial de Forma Consciente",
    excerpt:
      "A inteligência artificial está transformando negócios, carreiras e a vida cotidiana. Mas como garantir que seu uso seja ético, responsável e realmente benéfico? Descubra boas práticas e reflexões sobre o uso consciente da IA.",
    date: "2025-09-17T00:00:00.000Z",
    coverImage: "/images/ai-conscious.png",
    tags: [
      "inteligencia-artificial",
      "tecnologia",
      "etica",
      "inovacao",
      "futuro",
      "moderno",
      "ia",
      "ai",
      "chatgpt",
      "gemini",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Nos últimos anos, a Inteligência Artificial (IA) deixou de ser um conceito distante da ficção científica para se tornar parte integrante do nosso dia a dia. Seja em assistentes virtuais, ferramentas de automação, diagnósticos médicos ou recomendações personalizadas em plataformas digitais, a IA já está moldando a forma como vivemos e trabalhamos.",
      },
      {
        type: "paragraph",
        text: "Com esse avanço acelerado, surge também uma responsabilidade: como usar a inteligência artificial de forma **consciente e responsável**? Esse é um dos maiores desafios da nossa era digital. Assim como toda tecnologia, a IA traz benefícios imensos, mas também riscos se utilizada de maneira descuidada ou sem critérios éticos claros.",
      },
      {
        type: "paragraph",
        text: "O uso consciente da IA não significa limitar seu potencial, mas sim garantir que ela seja aplicada de forma que respeite valores humanos, preserve a privacidade e contribua para o bem-estar coletivo. Isso envolve decisões estratégicas tanto para empresas quanto para indivíduos.",
      },
      {
        type: "list",
        items: [
          "⚖️ **Ética em primeiro lugar** — A IA deve ser desenvolvida e utilizada com base em princípios éticos, evitando vieses discriminatórios, decisões injustas e impactos sociais negativos.",
          "🔒 **Proteção de dados e privacidade** — Sistemas de IA dependem de grandes volumes de dados. Usá-los de forma consciente significa respeitar a privacidade e proteger informações sensíveis.",
          "🤝 **Complemento, não substituição** — A IA deve ser vista como uma ferramenta que auxilia o trabalho humano, não como algo que elimina completamente o papel das pessoas.",
          "🌍 **Impacto social e ambiental** — Empresas e desenvolvedores precisam avaliar como a aplicação de IA afeta a sociedade e o meio ambiente, garantindo que gere benefícios sustentáveis.",
          "📚 **Educação e conscientização** — Usuários e profissionais precisam ser capacitados para compreender como a IA funciona e quais são seus limites.",
        ],
      },
      {
        type: "paragraph",
        text: "Um exemplo prático do uso inconsciente da IA é quando algoritmos de recomendação priorizam apenas o engajamento, sem considerar os impactos psicológicos ou sociais. Isso pode gerar desinformação, vício em plataformas e até influenciar processos democráticos. Da mesma forma, sistemas de reconhecimento facial aplicados sem critério podem violar direitos básicos de privacidade e liberdade individual.",
      },
      {
        type: "paragraph",
        text: "Por outro lado, quando usada de forma consciente, a IA pode gerar avanços extraordinários: diagnósticos médicos mais rápidos e precisos, otimização de recursos em indústrias, soluções personalizadas para educação, ferramentas de acessibilidade para pessoas com deficiência e muito mais. A chave está no equilíbrio entre inovação e responsabilidade.",
      },
      {
        type: "paragraph",
        text: "Empresas que adotam a IA com transparência e responsabilidade conquistam maior confiança dos consumidores e parceiros. Já organizações que utilizam a tecnologia de forma obscura ou exploratória tendem a enfrentar crises de imagem e até sanções legais. A longo prazo, a confiança será o maior diferencial competitivo.",
      },
      {
        type: "paragraph",
        text: "O uso consciente da IA também passa pelo desenvolvimento de regulamentações claras. Muitos países já discutem legislações específicas para garantir que a inteligência artificial seja utilizada de forma justa, transparente e responsável. Isso inclui desde a exigência de auditoria em algoritmos até a responsabilidade legal por erros cometidos por sistemas automatizados.",
      },
      {
        type: "paragraph",
        text: "No nível individual, também é possível adotar práticas de uso consciente. Ao utilizar ferramentas baseadas em IA, questione-se: quais dados estou fornecendo? Essa tecnologia respeita minha privacidade? Os benefícios superam os riscos? Esse tipo de postura crítica fortalece a relação saudável com a tecnologia.",
      },
      {
        type: "paragraph",
        text: "Em resumo, a inteligência artificial não é boa nem má por natureza: tudo depende da forma como a utilizamos. O uso consciente é aquele que considera não apenas a eficiência e a inovação, mas também os impactos sociais, éticos e humanos. É o que garante que a IA seja uma aliada do progresso, e não uma ameaça ao nosso futuro.",
      },
      {
        type: "image",
        src: "/images/share.png",
        alt: "Representação visual da inteligência artificial sendo usada de forma consciente",
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
