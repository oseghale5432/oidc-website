import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FacilitiesForm from '@/components/site/FacilitiesForm';

export const metadata: Metadata = {
  title: 'Utilities & Infrastructure - Orange Island Lagos',
  description: 'Power, connectivity, water, sewage and waste services on Orange Island, and how to contact the facilities team.',
};

export default function UtilitiesPage() {
  return (
    <div className="tpl tpl-utilities">
      {/* page title */}
      <section style={{ background: "#0E2838", color: "#FFFFFF" }}>
        <div className="wrap" style={{ paddingTop: "28px", paddingBottom: "64px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C3D2DB", marginBottom: "28px" }}><Link href="/" style={{ color: "#C3D2DB" }}>Home</Link> / Utilities &amp; infrastructure</nav>
          <h1 style={{ margin: "0 0 20px", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "64px", lineHeight: 1.02 }}>Utilities &amp; Infrastructure</h1>
          <p style={{ margin: "0", fontSize: "20px", lineHeight: 1.55, color: "#D6DFE5", maxWidth: "760px" }}>Orange Island is fully serviced. Every plot is supported by a central water supply, a vacuum sewage network, reliable power and modern connectivity — managed day to day by our on-island facilities team.</p>
        </div>
      </section>
      {/* jump links */}
      <nav aria-label="On this page" style={{ background: "#FFFFFF", borderBottom: "1px solid #E5DED3" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "8px 28px", paddingTop: "16px", paddingBottom: "16px", fontSize: "15px", fontWeight: 700 }}>
          <a href="#power">Electricity</a>
          <a href="#connectivity">Connectivity</a>
          <a href="#water">Water</a>
          <a href="#sewage">Sewage</a>
          <a href="#waste">Waste collection</a>
          <a href="#venco">Venco</a>
          <a href="#estate">Estate infrastructure</a>
          <a href="#facilities">Contact facilities</a>
        </div>
      </nav>
      {/* resident benefits */}
      <section style={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
          <div style={{ flex: "1 1 360px", minWidth: "0" }}>
            <h2 style={{ margin: "0 0 12px", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "40px", lineHeight: 1.05 }}>What every plot is connected to</h2>
            <p style={{ margin: "0", fontSize: "17px", lineHeight: 1.6, color: "#3A4650" }}>Our infrastructure is built and operational. Here is what residents and builders can rely on today.</p>
          </div>
          <ul style={{ flex: "1 1 560px", minWidth: "0", margin: "0", padding: "0", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "14px 24px", fontSize: "16px" }}>
            <li style={{ display: "flex", gap: "10px" }}><span aria-hidden="true" style={{ color: "#4A6A3C", fontWeight: 700 }}>✓</span>Approx. 20 hours of daily EKEDC supply</li>
            <li style={{ display: "flex", gap: "10px" }}><span aria-hidden="true" style={{ color: "#4A6A3C", fontWeight: 700 }}>✓</span>IPP partnership with DEL / Viathan</li>
            <li style={{ display: "flex", gap: "10px" }}><span aria-hidden="true" style={{ color: "#4A6A3C", fontWeight: 700 }}>✓</span>Backup generators for emergencies</li>
            <li style={{ display: "flex", gap: "10px" }}><span aria-hidden="true" style={{ color: "#4A6A3C", fontWeight: 700 }}>✓</span>MTN network connection</li>
            <li style={{ display: "flex", gap: "10px" }}><span aria-hidden="true" style={{ color: "#4A6A3C", fontWeight: 700 }}>✓</span>24/7 potable water from a central plant</li>
            <li style={{ display: "flex", gap: "10px" }}><span aria-hidden="true" style={{ color: "#4A6A3C", fontWeight: 700 }}>✓</span>Centralised vacuum sewage system</li>
            <li style={{ display: "flex", gap: "10px" }}><span aria-hidden="true" style={{ color: "#4A6A3C", fontWeight: 700 }}>✓</span>Weekly household waste collection</li>
            <li style={{ display: "flex", gap: "10px" }}><span aria-hidden="true" style={{ color: "#4A6A3C", fontWeight: 700 }}>✓</span>Shore protection, streetlights and gated access</li>
          </ul>
        </div>
      </section>
      {/* power */}
      <section id="power" style={{ background: "#FFFFFF", paddingTop: "72px", paddingBottom: "72px", borderTop: "1px solid #E5DED3" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 540px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
            <span style={{ fontSize: "13px", letterSpacing: "3px", color: "#A9481A", fontWeight: 700 }}>ELECTRICITY</span>
            <h2 style={{ margin: "0", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "48px", lineHeight: 1.05 }}>Reliable power, built for resilience</h2>
            <p style={{ margin: "0", fontSize: "17px", lineHeight: 1.65, color: "#3A4650" }}>The primary source of power on Orange Island is EKEDC, providing approximately 20 hours of electricity supply daily. To complement this, we have integrated with an Independent Power Producer (IPP) — our partnership with <strong>DEL / Viathan</strong> — to enhance our energy resilience and long-term sustainability. Backup generators are also on standby for emergency situations.</p>
            <div style={{ background: "#FFF6EE", border: "1px solid #F1D2B4", padding: "20px", fontSize: "16px", lineHeight: 1.6 }}><strong>Advice for residents:</strong> we strongly advise all residents to install solar connections in their homes as an additional and reliable alternative power source.</div>
            <p style={{ margin: "0", fontSize: "15px", color: "#5B6670" }}>[Add IPP details to confirm: plant capacity, hours of supply, tariff/metering arrangement, go-live date.]</p>
          </div>
          <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ padding: "20px", border: "1px solid #E5DED3", display: "flex", gap: "16px", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "40px", fontWeight: 700, color: "#0E2838", width: "64px" }}>1</span>
              <div>
                <div style={{ fontWeight: 700 }}>EKEDC grid supply</div>
                <div style={{ fontSize: "14px", color: "#5B6670" }}>Primary source · approx. 20 hours daily</div>
              </div>
            </div>
            <div style={{ padding: "20px", border: "1px solid #E5DED3", display: "flex", gap: "16px", alignItems: "center", background: "#FFF6EE" }}>
              <span style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "40px", fontWeight: 700, color: "#A9481A", width: "64px" }}>2</span>
              <div>
                <div style={{ fontWeight: 700 }}>IPP — DEL / Viathan</div>
                <div style={{ fontSize: "14px", color: "#5B6670" }}>Independent power for resilience and sustainability</div>
              </div>
            </div>
            <div style={{ padding: "20px", border: "1px solid #E5DED3", display: "flex", gap: "16px", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "40px", fontWeight: 700, color: "#0E2838", width: "64px" }}>3</span>
              <div>
                <div style={{ fontWeight: 700 }}>Backup generators</div>
                <div style={{ fontSize: "14px", color: "#5B6670" }}>On standby for emergency situations</div>
              </div>
            </div>
            <div style={{ padding: "20px", border: "1px solid #E5DED3", display: "flex", gap: "16px", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "40px", fontWeight: 700, color: "#0E2838", width: "64px" }}>4</span>
              <div>
                <div style={{ fontWeight: 700 }}>Home solar (recommended)</div>
                <div style={{ fontSize: "14px", color: "#5B6670" }}>Your own additional alternative source</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* connectivity */}
      <section id="connectivity" style={{ paddingTop: "72px", paddingBottom: "72px" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
          <div style={{ flex: "1 1 440px", minWidth: "0", height: "360px", background: "#E6ECEF", display: "flex", alignItems: "flex-end", padding: "16px", boxSizing: "border-box", position: "relative", overflow: "hidden" }}>
            <Image src="/images/MTN.jpg" alt="MTN network equipment" fill sizes="(max-width: 1000px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
          <div style={{ flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
            <span style={{ fontSize: "13px", letterSpacing: "3px", color: "#A9481A", fontWeight: 700 }}>CONNECTIVITY</span>
            <h2 style={{ margin: "0", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "48px", lineHeight: 1.05 }}>Connected to MTN</h2>
            <p style={{ margin: "0", fontSize: "17px", lineHeight: 1.65, color: "#3A4650" }}>Orange Island is connected to MTN’s network, giving residents, businesses and building sites access to [fibre / high-speed internet — confirm service]. Smart homes, remote working and security systems are all supported from day one.</p>
            <ul style={{ margin: "0", paddingLeft: "20px", fontSize: "16px", lineHeight: 1.8, color: "#3A4650" }}>
              <li>[How residents request a connection]</li>
              <li>[Available packages / speeds]</li>
              <li>[Support contact for connectivity issues]</li>
            </ul>
          </div>
        </div>
      </section>
      {/* water / sewage / waste cards */}
      <section style={{ background: "#FFFFFF", paddingTop: "72px", paddingBottom: "72px", borderTop: "1px solid #E5DED3", borderBottom: "1px solid #E5DED3" }}>
        <div className="wrap">
          <h2 style={{ margin: "0 0 32px", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "44px" }}>Water, sewage &amp; waste</h2>
          <div className="g3">
            <article id="water" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px", border: "1px solid #E5DED3", background: "#FBF8F3" }}>
              <span style={{ fontSize: "13px", letterSpacing: "3px", color: "#A9481A", fontWeight: 700 }}>WATER</span>
              <h3 style={{ margin: "0", fontSize: "24px" }}>24/7 clean, potable water</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: 1.6, color: "#3A4650" }}>The water supply system features a central water treatment plant capable of delivering clean, potable water to all residents 24 hours a day, 7 days a week. All residents are required to connect directly to our central system.</p>
              <p style={{ margin: "0", fontSize: "15px", fontWeight: 700, color: "#7E3411" }}>Please note: private boreholes are not permitted on the island.</p>
            </article>
            <article id="sewage" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px", border: "1px solid #E5DED3", background: "#FBF8F3" }}>
              <span style={{ fontSize: "13px", letterSpacing: "3px", color: "#A9481A", fontWeight: 700 }}>SEWAGE</span>
              <h3 style={{ margin: "0", fontSize: "24px" }}>Central vacuum network</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: 1.6, color: "#3A4650" }}>Our sewage management system features a state-of-the-art centralised vacuum system, designed to efficiently handle all wastewater across the island. We are currently facilitating connections from residents’ internal sewage systems to the central vacuum network.</p>
              <a href="#facilities" style={{ fontWeight: 700 }}>Book your connection with the facilities team →</a>
            </article>
            <article id="waste" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px", border: "1px solid #E5DED3", background: "#FBF8F3" }}>
              <span style={{ fontSize: "13px", letterSpacing: "3px", color: "#A9481A", fontWeight: 700 }}>WASTE COLLECTION</span>
              <h3 style={{ margin: "0", fontSize: "24px" }}>Every Thursday</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: 1.6, color: "#3A4650" }}>Residents are required to ensure their waste bins are placed at a central, easily accessible point for pickup. For building waste, construction debris or other industrial waste, please contact our facilities team directly to arrange a dedicated collection.</p>
              <a href="#facilities" style={{ fontWeight: 700 }}>Arrange a debris collection →</a>
            </article>
          </div>
        </div>
      </section>
      {/* venco */}
      <section id="venco" style={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center", padding: "32px", border: "1px dashed #C9B8A6", background: "#FFFFFF" }}>
          <div style={{ flex: "1 1 480px", minWidth: "0" }}>
            <span style={{ fontSize: "13px", letterSpacing: "3px", color: "#A9481A", fontWeight: 700 }}>VENCO</span>
            <h2 style={{ margin: "8px 0 10px", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "36px" }}>Estate access &amp; security with the Venco app</h2>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: 1.6, color: "#3A4650" }}>Through our partnership with Venco, residents can pre-register visitors with secure QR codes for gate entry, top up utilities, report issues to the facilities team and receive estate announcements. Available to all plot owners with up-to-date payments and subscriptions.</p>
          </div>
          <Link href="/venco-app" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 20px", background: "#0E2838", color: "#FFFFFF", textDecoration: "none", fontWeight: 700 }}>Get the Venco app</Link>
        </div>
      </section>
      {/* estate infrastructure (Eko-style explore cards) */}
      <section id="estate" style={{ background: "#0E2838", color: "#FFFFFF", paddingTop: "72px", paddingBottom: "72px" }}>
        <div className="wrap">
          <h2 style={{ margin: "0 0 8px", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "44px" }}>Estate infrastructure</h2>
          <p style={{ margin: "0 0 32px", fontSize: "17px", color: "#D6DFE5" }}>Delivered by our development team and maintained by Orange Island Development Company.</p>
          <div className="g4">
            <div style={{ padding: "24px", border: "1px solid #2E5569", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontWeight: 700, fontSize: "18px" }}>Shore protection &amp; lake</span>
              <span style={{ fontSize: "14px", color: "#C3D2DB" }}>Engineered shoreline protecting the island’s perimeter and central lake</span>
            </div>
            <div style={{ padding: "24px", border: "1px solid #2E5569", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontWeight: 700, fontSize: "18px" }}>Roads &amp; drainage</span>
              <span style={{ fontSize: "14px", color: "#C3D2DB" }}>27.53 ha of road reserve across the masterplan</span>
            </div>
            <div style={{ padding: "24px", border: "1px solid #2E5569", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontWeight: 700, fontSize: "18px" }}>Street lighting</span>
              <span style={{ fontSize: "14px", color: "#C3D2DB" }}>Lit streets and thoroughfares across the island</span>
            </div>
            <div style={{ padding: "24px", border: "1px solid #2E5569", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontWeight: 700, fontSize: "18px" }}>Gate house &amp; access</span>
              <span style={{ fontSize: "14px", color: "#C3D2DB" }}>Controlled gate systems for a safe, secure community</span>
            </div>
            <div style={{ padding: "24px", border: "1px solid #2E5569", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontWeight: 700, fontSize: "18px" }}>Water treatment</span>
              <span style={{ fontSize: "14px", color: "#C3D2DB" }}>Filtration and separation technology at the central plant</span>
            </div>
            <div style={{ padding: "24px", border: "1px solid #2E5569", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontWeight: 700, fontSize: "18px" }}>Irrigation</span>
              <span style={{ fontSize: "14px", color: "#C3D2DB" }}>Supporting 17.33 ha of open space and greenery</span>
            </div>
            <div style={{ padding: "24px", border: "1px solid #2E5569", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontWeight: 700, fontSize: "18px" }}>Access land bridge</span>
              <span style={{ fontSize: "14px", color: "#C3D2DB" }}>Linking the island to Freedom Way, Lekki Phase 1</span>
            </div>
            <div style={{ padding: "24px", border: "1px solid #2E5569", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontWeight: 700, fontSize: "18px" }}>Environmental care</span>
              <span style={{ fontSize: "14px", color: "#C3D2DB" }}>Ongoing environmental management of the lagoon setting</span>
            </div>
          </div>
        </div>
      </section>
      {/* facilities contact form */}
      <section id="facilities" style={{ paddingTop: "72px", paddingBottom: "72px" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
          <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
            <h2 style={{ margin: "0", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "44px", lineHeight: 1.05 }}>Contact the facilities team</h2>
            <p style={{ margin: "0", fontSize: "17px", lineHeight: 1.6, color: "#3A4650" }}>Book a sewage or water connection, arrange a debris collection, or report an issue on the island.</p>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: 1.7 }}><a href="mailto:hello@orangeislandng.com">hello@orangeislandng.com</a><br /><a href="tel:+2348132992279">+234 813 299 2279</a><br />[Facilities direct line]</p>
          </div>
          <FacilitiesForm />
        </div>
      </section>
    </div>
  );
}
