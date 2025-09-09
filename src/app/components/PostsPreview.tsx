import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from '../posts/data';
import styles from '../posts/posts.module.css';

export default function PostsPreview() {
  const posts = getAllPosts();
  if (!posts || posts.length === 0) return null;

  return (
    <>
      <div className="section-divider" />
      <section id="posts" className={`section ${styles.previewSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionNumber}>05</div>
            <div className={styles.headerContent}>
              <div className={styles.labelContainer}>
                <span className={styles.label}>Conteúdo</span>
                <div className={styles.labelLine}></div>
              </div>
              <h2 className={styles.title}>
                <span className={styles.titleLine}>Posts e Artigos</span>
              </h2>
              <p className={styles.subtitle}>
                Uma seleção de conteúdos para ajudar seu negócio a crescer com a internet. Novos artigos serão adicionados aqui.
              </p>
            </div>
          </div>

          <div className={styles.previewPostsGrid}>
            {posts.slice(0, 3).map((post) => (
              <article key={post.slug} className={styles.postCard}>
                <Link href={`/posts/${post.slug}`} aria-label={post.title}>
                  <div className={styles.previewCoverWrap}>
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.coverMedia}
                    />
                  </div>
                </Link>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                  </h3>
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

          <div className={styles.previewActions}>
            <Link href="/posts" className={styles.seeAllButton}>Ver todos os posts</Link>
          </div>
        </div>
      </section>
    </>
  );
}
