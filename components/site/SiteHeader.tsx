'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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
  const [open, setOpen] = useState(false);
  const [openedOn, setOpenedOn] = useState(pathname);

  // Close the mobile menu after navigating to another page.
  if (open && openedOn !== pathname) {
    setOpen(false);
  }

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (pathname.startsWith('/admin')) return null;

  const isActive = (match: string[]) => match.some((m) => pathname === m || pathname.startsWith(m + '/'));

  return (
    <div className="tpl">
      {/* utility bar */}
      <div style={{ background: '#0E2838', color: '#E8EDF0', fontSize: '14px' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '8px', paddingTop: '10px', paddingBottom: '10px' }}>
          <span>A Public Private Partnership with the Lagos State Government</span>
          <nav aria-label="Audience" className="audience-nav" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/utilities" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Residents</Link>
            <Link href="/building" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Plot owners &amp; builders</Link>
            <Link href="/utilities#facilities" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Facilities helpdesk</Link>
          </nav>
        </div>
      </div>

      {/* header */}
      <header style={{ background: '#FFFFFF', borderBottom: '1px solid #E5DED3' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', paddingTop: '18px', paddingBottom: '18px' }}>
          <Link href="/" aria-label="Orange Island Lagos home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Image src="/orange-island-logo.png" alt="Orange Island Lagos" width={434} height={200} priority style={{ height: '56px', width: 'auto', display: 'block' }} />
          </Link>
          <nav aria-label="Main" className="main-nav" style={{ flexWrap: 'wrap', gap: '28px', fontSize: '16px', fontWeight: 500 }}>
            {NAV.map((item) => {
              const active = isActive(item.match);
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

          {/* mobile menu button (shown below 900px) */}
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => {
              setOpenedOn(pathname);
              setOpen((o) => !o);
            }}
            style={{ alignItems: 'center', gap: '10px', minHeight: '44px', padding: '0 14px', background: open ? '#0E2838' : '#FFFFFF', color: open ? '#FFFFFF' : '#0E2838', border: '2px solid #0E2838', fontFamily: 'inherit', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" style={{ display: 'block' }}>
              {open ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
            {open ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* mobile menu panel */}
        {open && (
          <nav id="mobile-menu" aria-label="Mobile" className="mobile-menu" style={{ borderTop: '1px solid #E5DED3', background: '#FFFFFF' }}>
            <div className="wrap" style={{ paddingTop: '8px', paddingBottom: '20px' }}>
              {NAV.map((item) => {
                const active = isActive(item.match);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '52px', borderBottom: '1px solid #E5DED3', fontSize: '18px', fontWeight: active ? 700 : 500, color: active ? '#A9481A' : '#1B2228', textDecoration: 'none' }}
                  >
                    {item.label}
                    <span aria-hidden="true" style={{ color: '#A9481A' }}>→</span>
                  </Link>
                );
              })}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
                <Link href="/utilities#facilities" onClick={() => setOpen(false)} style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', padding: '0 16px', background: '#A9481A', color: '#FFFFFF', textDecoration: 'none', fontWeight: 700 }}>Facilities helpdesk</Link>
                <a href="tel:+2348132992279" style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', padding: '0 16px', border: '2px solid #0E2838', color: '#0E2838', textDecoration: 'none', fontWeight: 700, boxSizing: 'border-box' }}>Call +234 813 299 2279</a>
              </div>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
}
