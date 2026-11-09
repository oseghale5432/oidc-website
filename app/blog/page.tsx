import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts } from '@/lib/content';
import { formatPostDate, postKind, postSummary, readingMinutes } from '@/lib/news';
import PageTitle from '@/components/site/PageTitle';
import NewsCard from '@/components/site/NewsCard';
import NewsletterForm from '@/components/site/NewsletterForm';

export const metadata: Metadata = {
  title: 'News & Media - Orange Island Lagos',
  description: 'The latest news, notices, partnerships and newsletters from Orange Island Lagos.',
};

const SERIF = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="tpl">
      <PageTitle
        title="News & media"
        intro="Updates from the island — partnerships, service notices, building news and our newsletters."
      />

      {!featured ? (
        <section style={{ paddingTop: '72px', paddingBottom: '72px' }}>
          <div className="wrap">
            <p style={{ margin: 0, fontSize: '18px', color: '#3A4650' }}>No news yet — please check back soon.</p>
          </div>
        </section>
      ) : (
        <>
          {/* featured story */}
          <section style={{ background: '#FFFFFF', paddingTop: '64px', paddingBottom: '64px', borderBottom: '1px solid #E5DED3' }}>
            <div className="wrap">
              <span style={{ display: 'block', marginBottom: '20px', fontSize: '13px', letterSpacing: '3px', color: '#A9481A', fontWeight: 700 }}>LATEST</span>
              <Link href={`/blog/${featured.slug}`} className="news-feature" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', textDecoration: 'none', color: '#1B2228' }}>
                <div className="news-feature-img" style={{ flex: '1 1 520px', minWidth: 0, position: 'relative', height: '400px', background: '#0E2838', overflow: 'hidden' }}>
                  {featured.image && (
                    <Image src={featured.image} alt="" fill priority sizes="(max-width: 1000px) 100vw, 55vw" className="news-card-img" style={{ objectFit: 'cover' }} />
                  )}
                </div>
                <div style={{ flex: '1 1 380px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', fontSize: '14px' }}>
                    <span style={{ letterSpacing: '2px', fontWeight: 700, color: '#A9481A', textTransform: 'uppercase', fontSize: '13px' }}>{postKind(featured)}</span>
                    <span aria-hidden="true" style={{ color: '#C9B8A6' }}>•</span>
                    <time dateTime={featured.date} style={{ color: '#5B6670' }}>{formatPostDate(featured.date)}</time>
                    <span aria-hidden="true" style={{ color: '#C9B8A6' }}>•</span>
                    <span style={{ color: '#5B6670' }}>{readingMinutes(featured)} min read</span>
                  </div>
                  <h2 style={{ margin: 0, fontFamily: SERIF, fontWeight: 600, fontSize: '48px', lineHeight: 1.05 }}>{featured.title}</h2>
                  <p style={{ margin: 0, fontSize: '18px', lineHeight: 1.6, color: '#3A4650' }}>{postSummary(featured, 260)}</p>
                  <span style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', minHeight: '48px', padding: '0 22px', background: '#0E2838', color: '#FFFFFF', fontWeight: 700 }}>Read the story</span>
                </div>
              </Link>
            </div>
          </section>

          {/* all stories */}
          {rest.length > 0 && (
            <section style={{ paddingTop: '72px', paddingBottom: '72px' }}>
              <div className="wrap">
                <h2 style={{ margin: '0 0 32px', fontFamily: SERIF, fontWeight: 600, fontSize: '44px' }}>More from the island</h2>
                <div className="g3">
                  {rest.map((post) => (
                    <NewsCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* newsletter */}
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
