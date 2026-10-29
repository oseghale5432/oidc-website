'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SERIF = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";

const NAV = [
  { href: '/about', label: 'Who we are', match: ['/about', '/team'] },
  {
    href: '/utilities',
    label: 'Utilities & infrastructure',
    match: ['/utilities', '/water', '/electricity', '/sewage-management', '/waste-collection', '/venco-app', '/del', '/intercontra'],
  },
  {
    href: '/building',
    label: 'Building on the island',
    match: ['/building', '/approval-process', '/physical-planning-document', '/properties-investment'],
  },
  { href: '/blog', label: 'News & media', match: ['/blog'] },
  { href: '/contact', label: 'Contact', match: ['/contact'] },
];

export default function SiteHeader() {
  const pathname = usePathname() || '/';
  if (pathname.startsWith('/admin')) return null;

  return (
    <div className="tpl">
      {/* utility bar */}
      <div style={{ background: '#0E2838', color: '#E8EDF0', fontSize: '14px' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '8px', paddingTop: '10px', paddingBottom: '10px' }}>
          <span>A Public Private Partnership with the Lagos State Government</span>
          <nav aria-label="Audience" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/utilities" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Residents</Link>
            <Link href="/building" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Plot owners &amp; builders</Link>
            <Link href="/utilities#facilities" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Facilities helpdesk</Link>
          </nav>
        </div>
      </div>

      {/* header */}
      <header style={{ background: '#FFFFFF', borderBottom: '1px solid #E5DED3' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', paddingTop: '18px', paddingBottom: '18px' }}>
          <Link href="/" aria-label="Orange Island home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span style={{ fontFamily: SERIF, fontWeight: 700, fontSize: '30px', letterSpacing: '2px', color: '#7A2E14', lineHeight: 1 }}>ORANGE ISLAND</span>
            <span style={{ fontSize: '11px', letterSpacing: '3px', color: '#7A2E14' }}>LAGOS</span>
          </Link>
          <nav aria-label="Main" className="main-nav" style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', fontSize: '16px', fontWeight: 500 }}>
            {NAV.map((item) => {
              const active = item.match.some((m) => pathname === m || pathname.startsWith(m + '/'));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  style={
                    active
                      ? { color: '#A9481A', textDecoration: 'none', borderBottom: '2px solid #A9481A' }
                      : { color: '#1B2228', textDecoration: 'none' }
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </div>
  );
}
