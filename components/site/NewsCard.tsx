import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/db';
import { formatPostDate, postKind, postSummary } from '@/lib/news';

const SERIF = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";

/** Shared news card: used on News & media and under each article. */
export default function NewsCard({ post }: { post: BlogPost }) {
  const summary = postSummary(post, 130);
  return (
    <Link href={`/blog/${post.slug}`} className="tile news-card" style={{ display: 'flex', flexDirection: 'column', background: '#FFFFFF', border: '1px solid #E5DED3', textDecoration: 'none', color: '#1B2228', height: '100%', boxSizing: 'border-box' }}>
      <div style={{ position: 'relative', height: '210px', background: '#0E2838', overflow: 'hidden' }}>
        {post.image ? (
          <Image src={post.image} alt="" fill sizes="(max-width: 1000px) 100vw, 33vw" className="news-card-img" style={{ objectFit: 'cover' }} />
        ) : (
          <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SERIF, fontSize: '28px', color: '#FFFFFF' }}>Orange Island</span>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '22px 24px 24px', flex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', fontSize: '13px' }}>
          <span style={{ letterSpacing: '2px', fontWeight: 700, color: '#A9481A', textTransform: 'uppercase' }}>{postKind(post)}</span>
          <span aria-hidden="true" style={{ color: '#C9B8A6' }}>•</span>
          <time dateTime={post.date} style={{ color: '#5B6670' }}>{formatPostDate(post.date)}</time>
        </div>
        <h3 style={{ margin: 0, fontFamily: SERIF, fontWeight: 600, fontSize: '26px', lineHeight: 1.15 }}>{post.title}</h3>
        {summary && <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3A4650' }}>{summary}</p>}
        <span style={{ marginTop: 'auto', paddingTop: '6px', fontWeight: 700, fontSize: '15px', color: '#A9481A' }}>Read more →</span>
      </div>
    </Link>
  );
}
