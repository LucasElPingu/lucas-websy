import Link from 'next/link';
import Image from 'next/image';
import styles from '../posts/posts.module.css';
import { getAllPosts } from '../posts/data';

export default function PostsPreview() {
  const posts = getAllPosts();
  if (!posts || posts.length === 0) return null;

  return (
    <section id="posts" className={`section ${styles.blogSection}`}>
      <div className="container">
        <div className={styles.sectionNumber}>05</div>
        <header className={styles.blogHeader}>
          <span className={styles.blogKicker}>Conteúdo</span>
          <h2 className={styles.blogTitle}>Posts e Artigos</h2>
          <div className="line-accent line-accent-center" />
          <p className={styles.blogIntro}>
            Uma seleção de conteúdos para ajudar seu negócio a crescer com a internet. Novos artigos serão adicionados aqui.
          </p>
        </header>

        <div className={styles.postsGrid}>
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
          <Link href="/posts" className="btn btn-primary">Ver todos os posts</Link>
        </div>
      </div>
    </section>
  );
}
