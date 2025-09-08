import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../post-detail.module.css";
import { getPostBySlug, getAllPosts } from "../data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
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
    },
  };
}

export default async function PostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <>
      <Header />

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
                return <p key={i}>{block.text}</p>;
              }
              if (block.type === "list") {
                return (
                  <ul key={i} className={styles.contentList}>
                    {block.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
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

      <div className="section-divider" />
      <Footer />
    </>
  );
}
