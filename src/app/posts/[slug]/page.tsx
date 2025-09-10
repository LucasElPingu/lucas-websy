import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getAllPosts, getPostBySlug } from "../data";
import styles from "../post-detail.module.css";

// Novo import para suportar Markdown nos blocos
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

// Geração de rotas estáticas
export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

// SEO dinâmico baseado no post
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Lucas Websy`,
    description: post.excerpt,
    alternates: { canonical: `https://lucaswebsy.com.br/posts/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://lucaswebsy.com.br/posts/${post.slug}`,
      images: [{ url: post.coverImage, width: 1200, height: 630 }],
      publishedTime: post.date,
      authors: ["Lucas Silva"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      creator: "@lucaswebsy",
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function PostDetail(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <>
      <Header />

      {/* Schema.org Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lucaswebsy.com.br/" },
              { "@type": "ListItem", "position": 2, "name": "Posts", "item": "https://lucaswebsy.com.br/posts" },
              { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://lucaswebsy.com.br/posts/${post.slug}` }
            ]
          })
        }}
      />

      {/* Schema.org BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": [`https://lucaswebsy.com.br${post.coverImage}`],
            "datePublished": post.date,
            "dateModified": post.date,
            "author": { "@type": "Person", "name": "Lucas Silva" },
            "publisher": { "@type": "Organization", "name": "Lucas Websy", "logo": { "@type": "ImageObject", "url": "https://lucaswebsy.com.br/images/icon.png" } },
            "mainEntityOfPage": { "@type": "WebPage", "@id": `https://lucaswebsy.com.br/posts/${post.slug}` }
          })
        }}
      />

      <section className={`section ${styles.postSection}`}>
        <div className="container">
          <header className={styles.postHeader}>
            <h1>{post.title}</h1>
            <div className={styles.metaRow}>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("pt-BR")}
              </time>
            </div>
          </header>
        </div>

        <div className="container">
          <div className={styles.coverFrame}>
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="100vw"
              className={styles.coverMedia}
              priority
            />
          </div>
        </div>

        <div className="container">
          <div className={styles.backWrap}>
            <Link href="/posts" className={styles.backButton}>
              ← Voltar para posts
            </Link>
          </div>

          <article className={styles.postContent}>
            {post.blocks.map((block, i) => {
              if (block.type === "paragraph") {
                return (
                  <div key={i} className={styles.contentParagraph}>
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                    >
                      {block.text}
                    </ReactMarkdown>
                  </div>
                );
              }

              if (block.type === "list") {
                return (
                  <ul key={i} className={styles.contentList}>
                    {block.items.map((item, idx) => (
                      <li key={idx}>
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          rehypePlugins={[rehypeRaw]}
                        >
                          {item}
                        </ReactMarkdown>
                      </li>
                    ))}
                  </ul>
                );
              }

              if (block.type === "image") {
                return (
                  <div key={i} className={styles.contentImage}>
                    <Image
                      src={block.src}
                      alt={block.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 900px"
                      className={styles.contentMedia}
                    />
                  </div>
                );
              }

              return null;
            })}
          </article>
        </div>
      </section>

      <Footer showContact={false} />
    </>
  );
}
