'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const INSTAGRAM = 'https://www.instagram.com/orangeislandng/';

/** Full four-column footer on the home page, compact footer on inner pages (as in the design). */
export default function SiteFooter() {
  const pathname = usePathname() || '/';
  if (pathname.startsWith('/admin')) return null;

  if (pathname !== '/') {
    return (
      <footer className="tpl" style={{ background: '#0E2838', color: '#D6DFE5', paddingTop: '40px', paddingBottom: '28px' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px', fontSize: '14px' }}>
          <Image src="/logo-white.png" alt="Orange Island" width={1047} height={484} style={{ height: '48px', width: 'auto', display: 'block' }} />
          <span style={{ lineHeight: 1.6 }}>
            hello@orangeislandng.com · +234 813 299 2279
            <br />
            On Oba Ademola Elegushi Boulevard, Lagoon District, Freedom Way, Lekki Phase 1, Lagos.
          </span>
          <span style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <span>©2026 Orange Island</span>
            <a href="#" style={{ color: '#D6DFE5' }}>Terms &amp; Conditions</a>
            <a href="#" style={{ color: '#D6DFE5' }}>Privacy Policy</a>
          </span>
        </div>
      </footer>
    );
  }

  return (
    <footer id="contact" className="tpl" style={{ background: '#0E2838', color: '#D6DFE5', paddingTop: '56px', paddingBottom: '32px' }}>
      <div className="wrap">
        <div className="g4" style={{ gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Image src="/logo-white.png" alt="Orange Island" width={1047} height={484} style={{ height: '56px', width: 'auto', display: 'block', alignSelf: 'flex-start', marginBottom: '6px' }} />
            <span style={{ fontSize: '14px', lineHeight: 1.6 }}>Orange Island Development Company<br />On Oba Ademola Elegushi Boulevard,<br />Lagoon District, Freedom Way,<br />Lekki Phase 1, Lagos.</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px' }}>
            <span style={{ fontWeight: 700, color: '#FFFFFF' }}>Contact</span>
            <a href="mailto:hello@orangeislandng.com" style={{ color: '#F2A65A' }}>hello@orangeislandng.com</a>
            <a href="tel:+2348132992279" style={{ color: '#F2A65A' }}>+234 813 299 2279</a>
            <span>Facilities team: [FACILITIES PHONE / EMAIL]</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px' }}>
            <span style={{ fontWeight: 700, color: '#FFFFFF' }}>The island</span>
            <Link href="/about" style={{ color: '#D6DFE5' }}>Who we are</Link>
            <Link href="/utilities" style={{ color: '#D6DFE5' }}>Utilities &amp; infrastructure</Link>
            <Link href="/building" style={{ color: '#D6DFE5' }}>Building on the island</Link>
            <Link href="/blog" style={{ color: '#D6DFE5' }}>News &amp; media</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px' }}>
            <span style={{ fontWeight: 700, color: '#FFFFFF' }}>Follow us</span>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" style={{ color: '#D6DFE5' }}>Instagram @orangeislandng</a>
            <span style={{ marginTop: '12px', fontSize: '13px', letterSpacing: '2px', color: '#F2A65A', fontWeight: 700 }}>PROUDLY NIGERIAN</span>
          </div>
        </div>
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #2E4A5B', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '12px', fontSize: '13px' }}>
          <span>©2026 Orange Island</span>
          <span style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: '#D6DFE5' }}>Terms &amp; Conditions</a>
            <a href="#" style={{ color: '#D6DFE5' }}>Privacy Policy</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
