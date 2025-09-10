import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getAllPosts } from "./data";
import styles from "./posts.module.css";

export const metadata: Metadata = {
  title: "Posts | Lucas Websy",
  description:
    "Artigos sobre desenvolvimento web, sites profissionais e estratégias digitais por Lucas Websy.",
  alternates: { canonical: "https://lucaswebsy.com.br/posts" },
  openGraph: {
    type: "website",
    title: "Blog Lucas Websy",
    description:
      "Dicas e conteúdos sobre presença digital, performance e negócios online.",
    url: "https://lucaswebsy.com.br/posts",
    images: [{ url: "/images/share.png", width: 1200, height: 630 }],
  },
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog Lucas Websy",
            "url": "https://lucaswebsy.com.br/posts",
            "inLanguage": "pt-BR",
            "publisher": { "@type": "Organization", "name": "Lucas Websy" }
          })
        }}
      />

      <section id="posts" className={`section ${styles.blogSection}`}>
        <div className="container">
          <header className={styles.blogHeader}>
            <span className={styles.blogKicker}>Conteúdo</span>
            <h1 className={styles.blogTitle}>Posts e Artigos</h1>
            <div className="line-accent line-accent-center" />
            <p className={styles.blogIntro}>
              Uma seleção de conteúdos para ajudar seu negócio a crescer com a internet. Novos artigos serão adicionados aqui.
            </p>
          </header>

          <div className={styles.postsGrid}>
            {posts.map((post) => (
              <article key={post.slug} className={styles.postCard}>
                <Link href={`/posts/${post.slug}`} aria-label={post.title}>
                  <div className={styles.coverWrap}>
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.coverMedia}
                      priority
                    />
                  </div>
                </Link>
                <div className={styles.cardBody}>
                  <h2 className={styles.cardTitle}>
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <div className={styles.cardMeta}>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("pt-BR")}
                    </time>
                    <div className={styles.tagList}>
                      {post.tags.map((t) => (
                        <span key={t} className={styles.tag}>#{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer showContact={false}/>
    </>
  );
}
