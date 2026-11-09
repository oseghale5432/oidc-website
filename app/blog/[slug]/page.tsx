import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/content';
import PageTitle from '@/components/site/PageTitle';
import NewsCard from '@/components/site/NewsCard';
import NewsletterForm from '@/components/site/NewsletterForm';
import { formatPostDate, postKind, postSummary, readingMinutes } from '@/lib/news';

const SERIF = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";

/** Imported posts often repeat the title as their first heading; drop it since the page title shows it. */
function withoutRepeatedTitle(html: string, title: string) {
  const norm = (t: string) => t.replace(/<[^>]+>/g, '').replace(/&[#a-z0-9]+;/gi, ' ').replace(/[^a-z0-9]+/gi, ' ').trim().toLowerCase();
  const m = html.match(/^\s*<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/i);
  return m && norm(m[2]) === norm(title) ? html.slice(m[0].length) : html;
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found - Orange Island Lagos',
    };
  }

  return {
    title: `${post.title} - Orange Island Lagos`,
    description: postSummary(post, 160) || 'Read the latest news update from Orange Island Lagos.',
  };
}

// Next.js static generation of pages
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const content = withoutRepeatedTitle(post.content || '', post.title);
  const startsWithImage = /^\s*(<p>\s*)?(<figure[^>]*>\s*)?<img/i.test(content);
  const more = (await getBlogPosts()).filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="tpl">
      <PageTitle
        title={post.title}
        crumbs={[{ label: 'News & media', href: '/blog' }, { label: post.title }]}
        meta={`${postKind(post)} · ${formatPostDate(post.date)} · ${readingMinutes(post)} min read`}
      />

      <section style={{ background: '#FFFFFF', paddingTop: '56px', paddingBottom: '72px' }}>
        <div className="wrap" style={{ maxWidth: '860px' }}>
          {post.image && !startsWithImage && (
            <div style={{ position: 'relative', aspectRatio: '16 / 9', background: '#0E2838', overflow: 'hidden', marginBottom: '40px' }}>
              <Image src={post.image} alt="" fill priority sizes="(max-width: 860px) 100vw, 860px" style={{ objectFit: 'cover' }} />
            </div>
          )}
          <article className="article-body" dangerouslySetInnerHTML={{ __html: content }} />
          <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #E5DED3', display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/blog" style={{ fontWeight: 700 }}>← All news</Link>
            <span style={{ fontSize: '15px', color: '#5B6670' }}>
              Questions? Facilities team: <a href="tel:+2349069893085">0906 989 3085</a>
            </span>
          </div>
        </div>
      </section>

      {more.length > 0 && (
        <section style={{ paddingTop: '72px', paddingBottom: '72px' }}>
          <div className="wrap">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: '12px', marginBottom: '32px' }}>
              <h2 style={{ margin: 0, fontFamily: SERIF, fontWeight: 600, fontSize: '44px' }}>More from the island</h2>
              <Link href="/blog" style={{ fontWeight: 700 }}>All news</Link>
            </div>
            <div className="g3">
              {more.map((p) => (
                <NewsCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ background: '#F3ECE2', paddingTop: '56px', paddingBottom: '56px' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 0 }}>
            <h2 style={{ margin: '0 0 8px', fontFamily: SERIF, fontWeight: 600, fontSize: '34px' }}>Stay informed</h2>
            <p style={{ margin: 0, fontSize: '16px', color: '#3A4650' }}>Get development updates, service notices and our newsletter by email.</p>
          </div>
          <div style={{ flex: '1 1 420px', minWidth: 0 }}>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
