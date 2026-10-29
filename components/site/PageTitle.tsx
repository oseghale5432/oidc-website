import Link from 'next/link';

const SERIF = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";

type Crumb = { label: string; href?: string };

/** Navy page-title band used on every inner page (same as the design's Utilities / Building / Who we are pages). */
export default function PageTitle({
  title,
  intro,
  crumbs = [],
  eyebrow,
  meta,
  children,
}: {
  title: React.ReactNode;
  intro?: React.ReactNode;
  crumbs?: Crumb[];
  eyebrow?: string;
  meta?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const trail = crumbs.length ? crumbs : [{ label: typeof title === 'string' ? title : '' }];
  return (
    <section className="tpl" style={{ background: '#0E2838', color: '#FFFFFF' }}>
      <div className="wrap" style={{ paddingTop: '28px', paddingBottom: '64px' }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: '14px', color: '#C3D2DB', marginBottom: '28px' }}>
          <Link href="/" style={{ color: '#C3D2DB' }}>Home</Link>
          {trail.map((c, i) => (
            <span key={i}>
              {' / '}
              {c.href ? <Link href={c.href} style={{ color: '#C3D2DB' }}>{c.label}</Link> : c.label}
            </span>
          ))}
        </nav>
        {eyebrow && (
          <span style={{ display: 'block', fontSize: '13px', letterSpacing: '3px', color: '#F2A65A', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase' }}>{eyebrow}</span>
        )}
        <h1 style={{ margin: '0 0 20px', fontFamily: SERIF, fontWeight: 600, fontSize: '64px', lineHeight: 1.02, maxWidth: '980px' }}>{title}</h1>
        {intro && <p style={{ margin: 0, fontSize: '20px', lineHeight: 1.55, color: '#D6DFE5', maxWidth: '760px' }}>{intro}</p>}
        {meta && <p style={{ margin: '16px 0 0', fontSize: '16px', color: '#C3D2DB' }}>{meta}</p>}
        {children}
      </div>
    </section>
  );
}
