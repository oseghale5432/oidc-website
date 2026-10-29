import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts } from '@/lib/content';
import HomeSearch from '@/components/site/HomeSearch';
import NewsletterForm from '@/components/site/NewsletterForm';

export const metadata: Metadata = {
  title: 'Orange Island Lagos - Secure Lakeside Living',
  description: 'A master planned community and forward-thinking neighbourhood on the Lagos Lagoon, now in its facilities and development stage.',
};

export default async function Home() {
  const posts = (await getBlogPosts()).slice(0, 3);

  return (
    <div className="tpl tpl-home">
      {/* service notice */}
      <div style={{ background: "#FFF1E3", borderBottom: "1px solid #F1D2B4" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", paddingTop: "12px", paddingBottom: "12px", fontSize: "15px" }}>
          <span style={{ background: "#A9481A", color: "#FFFFFF", fontWeight: 700, fontSize: "12px", letterSpacing: "1px", padding: "4px 10px", borderRadius: "2px" }}>SERVICE NOTICE</span>
          {' '}
          <span>Waste collection is every <strong>Thursday</strong>. Please place bins at your central collection point. Sewage network connections are now being scheduled — <Link href="/utilities">book yours</Link>.</span>
        </div>
      </div>
      {/* hero */}
      <section style={{ background: "#0E2838", color: "#FFFFFF" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center", paddingTop: "80px", paddingBottom: "80px" }}>
          <div style={{ flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
            <span style={{ fontSize: "13px", letterSpacing: "3px", color: "#F2A65A", fontWeight: 700 }}>NOW IN OUR FACILITIES &amp; DEVELOPMENT STAGE</span>
            <h1 className="hero-h" style={{ margin: "0", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "68px", lineHeight: 1.02 }}>Welcome to Orange Island</h1>
            <p style={{ margin: "0", fontSize: "20px", lineHeight: 1.55, color: "#D6DFE5", maxWidth: "560px" }}>A master planned community and forward-thinking neighbourhood on the Lagos Lagoon. The island is reclaimed, serviced and in operation — now we are building the facilities and the community that will call it home.</p>
            <HomeSearch />
          </div>
          <div style={{ flex: "1 1 420px", minWidth: "0", height: "420px", background: "#1E4256", border: "1px solid #2E5569", display: "flex", alignItems: "flex-end", padding: "20px", boxSizing: "border-box", position: "relative", overflow: "hidden" }}>
            <Image src="/images/orange-island-2048x1157.jpg" alt="Aerial view of Orange Island on the Lagos Lagoon" fill sizes="(max-width: 1000px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>
      {/* stage progress */}
      <section style={{ background: "#FFFFFF", borderBottom: "1px solid #E5DED3" }}>
        <div className="wrap" style={{ paddingTop: "32px", paddingBottom: "32px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <div style={{ flex: "1 1 200px", padding: "16px", borderTop: "4px solid #5E7D4E" }}>
              <div style={{ fontSize: "12px", letterSpacing: "2px", color: "#4A6A3C", fontWeight: 700 }}>COMPLETE</div>
              <div style={{ fontWeight: 700, fontSize: "18px", marginTop: "4px" }}>Reclamation</div>
              <div style={{ fontSize: "14px", color: "#5B6670", marginTop: "4px" }}>150 hectares created on the Lagos Lagoon</div>
            </div>
            <div style={{ flex: "1 1 200px", padding: "16px", borderTop: "4px solid #5E7D4E" }}>
              <div style={{ fontSize: "12px", letterSpacing: "2px", color: "#4A6A3C", fontWeight: 700 }}>COMPLETE</div>
              <div style={{ fontWeight: 700, fontSize: "18px", marginTop: "4px" }}>Infrastructure</div>
              <div style={{ fontSize: "14px", color: "#5B6670", marginTop: "4px" }}>Roads, drainage, water, sewage, lighting</div>
            </div>
            <div style={{ flex: "1 1 200px", padding: "16px", borderTop: "4px solid #5E7D4E" }}>
              <div style={{ fontSize: "12px", letterSpacing: "2px", color: "#4A6A3C", fontWeight: 700 }}>COMPLETE</div>
              <div style={{ fontWeight: 700, fontSize: "18px", marginTop: "4px" }}>Sales &amp; operations</div>
              <div style={{ fontSize: "14px", color: "#5B6670", marginTop: "4px" }}>Plots allocated; estate services running</div>
            </div>
            <div style={{ flex: "1 1 200px", padding: "16px", borderTop: "4px solid #C9611F", background: "#FFF6EE" }}>
              <div style={{ fontSize: "12px", letterSpacing: "2px", color: "#A9481A", fontWeight: 700 }}>NOW</div>
              <div style={{ fontWeight: 700, fontSize: "18px", marginTop: "4px" }}>Facilities &amp; development</div>
              <div style={{ fontSize: "14px", color: "#5B6670", marginTop: "4px" }}>Power, connectivity, homes and amenities</div>
            </div>
          </div>
        </div>
      </section>
      {/* how can we help */}
      <section style={{ paddingTop: "72px", paddingBottom: "72px" }}>
        <div className="wrap">
          <h2 style={{ margin: "0 0 8px", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "44px" }}>How can we help you?</h2>
          <p style={{ margin: "0 0 32px", color: "#5B6670", fontSize: "17px" }}>Everyday services for residents, plot owners and contractors on the island.</p>
          <div className="g4">
            <Link className="tile" href="/contact" style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "24px", background: "#FFFFFF", border: "1px solid #E5DED3", textDecoration: "none", color: "#1B2228", minHeight: "140px", boxSizing: "border-box" }}>
              <span style={{ fontWeight: 700, fontSize: "18px", color: "#A9481A" }}>Report a facilities issue →</span>
              <span style={{ fontSize: "15px", color: "#5B6670" }}>Streetlights, roads, drainage, security or noise</span>
            </Link>
            {' '}
            <Link className="tile" href="/utilities" style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "24px", background: "#FFFFFF", border: "1px solid #E5DED3", textDecoration: "none", color: "#1B2228", minHeight: "140px", boxSizing: "border-box" }}>
              <span style={{ fontWeight: 700, fontSize: "18px", color: "#A9481A" }}>Electricity &amp; power →</span>
              <span style={{ fontSize: "15px", color: "#5B6670" }}>EKEDC supply, our IPP and backup arrangements</span>
            </Link>
            {' '}
            <Link className="tile" href="/utilities" style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "24px", background: "#FFFFFF", border: "1px solid #E5DED3", textDecoration: "none", color: "#1B2228", minHeight: "140px", boxSizing: "border-box" }}>
              <span style={{ fontWeight: 700, fontSize: "18px", color: "#A9481A" }}>Connect to water →</span>
              <span style={{ fontSize: "15px", color: "#5B6670" }}>24/7 treated water from the central plant</span>
            </Link>
            {' '}
            <Link className="tile" href="/utilities" style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "24px", background: "#FFFFFF", border: "1px solid #E5DED3", textDecoration: "none", color: "#1B2228", minHeight: "140px", boxSizing: "border-box" }}>
              <span style={{ fontWeight: 700, fontSize: "18px", color: "#A9481A" }}>Connect to the sewage network →</span>
              <span style={{ fontSize: "15px", color: "#5B6670" }}>Book your link to the central vacuum system</span>
            </Link>
            {' '}
            <Link className="tile" href="/utilities" style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "24px", background: "#FFFFFF", border: "1px solid #E5DED3", textDecoration: "none", color: "#1B2228", minHeight: "140px", boxSizing: "border-box" }}>
              <span style={{ fontWeight: 700, fontSize: "18px", color: "#A9481A" }}>Waste &amp; debris collection →</span>
              <span style={{ fontSize: "15px", color: "#5B6670" }}>Thursday pickups and construction waste</span>
            </Link>
            {' '}
            <Link className="tile" href="/utilities" style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "24px", background: "#FFFFFF", border: "1px solid #E5DED3", textDecoration: "none", color: "#1B2228", minHeight: "140px", boxSizing: "border-box" }}>
              <span style={{ fontWeight: 700, fontSize: "18px", color: "#A9481A" }}>Internet &amp; MTN connectivity →</span>
              <span style={{ fontSize: "15px", color: "#5B6670" }}>Getting your home or site online</span>
            </Link>
            {' '}
            <Link className="tile" href="/building" style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "24px", background: "#FFFFFF", border: "1px solid #E5DED3", textDecoration: "none", color: "#1B2228", minHeight: "140px", boxSizing: "border-box" }}>
              <span style={{ fontWeight: 700, fontSize: "18px", color: "#A9481A" }}>Get design approval →</span>
              <span style={{ fontSize: "15px", color: "#5B6670" }}>Plot regulations and concept approval</span>
            </Link>
            {' '}
            <Link className="tile" href="/building" style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "24px", background: "#FFFFFF", border: "1px solid #E5DED3", textDecoration: "none", color: "#1B2228", minHeight: "140px", boxSizing: "border-box" }}>
              <span style={{ fontWeight: 700, fontSize: "18px", color: "#A9481A" }}>Apply for a construction permit →</span>
              <span style={{ fontSize: "15px", color: "#5B6670" }}>Pre-construction and construction permits</span>
            </Link>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Link href="/utilities" style={{ fontWeight: 700 }}>All services</Link>
          </div>
        </div>
      </section>
      {/* power + connectivity features */}
      <section style={{ background: "#FFFFFF", paddingTop: "72px", paddingBottom: "72px", borderTop: "1px solid #E5DED3", borderBottom: "1px solid #E5DED3" }}>
        <div className="wrap g2">
          <article style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ height: "300px", background: "#E6ECEF", display: "flex", alignItems: "flex-end", padding: "16px", boxSizing: "border-box", position: "relative", overflow: "hidden" }}>
              <Image src="/images/del_energy.jpg" alt="Power installation on Orange Island" fill sizes="(max-width: 1000px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
            <span style={{ fontSize: "13px", letterSpacing: "3px", color: "#A9481A", fontWeight: 700 }}>POWER</span>
            <h3 style={{ margin: "0", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "36px", lineHeight: 1.1 }}>Powered by our IPP partnership with DEL / Viathan</h3>
            <p style={{ margin: "0", fontSize: "17px", lineHeight: 1.6, color: "#3A4650" }}>EKEDC remains the island’s primary source of power, providing approximately 20 hours of electricity daily. Our Independent Power Producer partnership with DEL / Viathan strengthens energy resilience and long-term sustainability, with backup generators on standby for emergencies.</p>
            <Link href="/utilities" style={{ fontWeight: 700, fontSize: "16px" }}>How power works on the island →</Link>
          </article>
          <article style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ height: "300px", background: "#E6ECEF", display: "flex", alignItems: "flex-end", padding: "16px", boxSizing: "border-box", position: "relative", overflow: "hidden" }}>
              <Image src="/images/intercontra_telecom.jpg" alt="Telecoms installation on Orange Island" fill sizes="(max-width: 1000px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
            <span style={{ fontSize: "13px", letterSpacing: "3px", color: "#A9481A", fontWeight: 700 }}>CONNECTIVITY</span>
            <h3 style={{ margin: "0", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "36px", lineHeight: 1.1 }}>Connected to MTN</h3>
            <p style={{ margin: "0", fontSize: "17px", lineHeight: 1.6, color: "#3A4650" }}>Orange Island is now connected to MTN’s network, bringing [fibre / high-speed connectivity — confirm service] to homes and building sites across the island. Work, stream and stay in touch from Lagos’ newest waterfront address.</p>
            <Link href="/utilities" style={{ fontWeight: 700, fontSize: "16px" }}>Get connected →</Link>
          </article>
        </div>
      </section>
      {/* at a glance */}
      <section style={{ paddingTop: "72px", paddingBottom: "72px" }}>
        <div className="wrap">
          <h2 style={{ margin: "0 0 32px", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "44px" }}>The island at a glance</h2>
          <div className="g6">
            <div style={{ borderTop: "2px solid #0E2838", paddingTop: "16px" }}>
              <div style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "48px", fontWeight: 700, color: "#0E2838", lineHeight: 1 }}>150</div>
              <div style={{ fontSize: "14px", color: "#5B6670", marginTop: "8px" }}>hectares of reclaimed land</div>
            </div>
            <div style={{ borderTop: "2px solid #0E2838", paddingTop: "16px" }}>
              <div style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "48px", fontWeight: 700, color: "#0E2838", lineHeight: 1 }}>17.3</div>
              <div style={{ fontSize: "14px", color: "#5B6670", marginTop: "8px" }}>hectares of open space and greenery</div>
            </div>
            <div style={{ borderTop: "2px solid #0E2838", paddingTop: "16px" }}>
              <div style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "48px", fontWeight: 700, color: "#0E2838", lineHeight: 1 }}>24/7</div>
              <div style={{ fontSize: "14px", color: "#5B6670", marginTop: "8px" }}>treated water from the central plant</div>
            </div>
            <div style={{ borderTop: "2px solid #0E2838", paddingTop: "16px" }}>
              <div style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "48px", fontWeight: 700, color: "#0E2838", lineHeight: 1 }}>~20h</div>
              <div style={{ fontSize: "14px", color: "#5B6670", marginTop: "8px" }}>daily EKEDC supply, plus IPP and backup</div>
            </div>
            <div style={{ borderTop: "2px solid #0E2838", paddingTop: "16px" }}>
              <div style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "48px", fontWeight: 700, color: "#0E2838", lineHeight: 1 }}>1</div>
              <div style={{ fontSize: "14px", color: "#5B6670", marginTop: "8px" }}>central vacuum sewage network</div>
            </div>
            <div style={{ borderTop: "2px solid #0E2838", paddingTop: "16px" }}>
              <div style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "48px", fontWeight: 700, color: "#0E2838", lineHeight: 1 }}>Thu</div>
              <div style={{ fontSize: "14px", color: "#5B6670", marginTop: "8px" }}>weekly household waste collection</div>
            </div>
          </div>
        </div>
      </section>
      {/* news */}
      <section id="news" style={{ background: "#FFFFFF", paddingTop: "72px", paddingBottom: "72px", borderTop: "1px solid #E5DED3" }}>
        <div className="wrap">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginBottom: "32px" }}>
            <h2 style={{ margin: "0", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "44px" }}>Latest from the island</h2>
            <Link href="/blog" style={{ fontWeight: 700 }}>More news</Link>
          </div>
          <div className="g3">
            {posts.map((post) => (
              <article key={post.id} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ height: "200px", background: "#E6ECEF", position: "relative", overflow: "hidden" }}>
                  {post.image ? (
                    <Image src={post.image} alt="" fill sizes="(max-width: 1000px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                  ) : null}
                </div>
                <span style={{ fontSize: "14px", color: "#5B6670" }}>
                  {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
                <Link href={`/blog/${post.slug}`} style={{ fontWeight: 700, fontSize: "20px", color: "#1B2228", textDecoration: "none", lineHeight: 1.3 }}>{post.title}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* districts */}
      <section style={{ paddingTop: "72px", paddingBottom: "72px" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
          <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ fontSize: "13px", letterSpacing: "3px", color: "#A9481A", fontWeight: 700 }}>THE MASTERPLAN</span>
            <h2 style={{ margin: "0", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "44px", lineHeight: 1.05 }}>Welcome to the world of Orange Island</h2>
            <p style={{ margin: "0", fontSize: "17px", lineHeight: 1.6, color: "#3A4650" }}>With unique residential clusters along the island perimeter, each with its own identity and secure access to the lake, residents enjoy a lifestyle of tranquillity while still minutes from the leisure and amenities the island has to offer — the best of both worlds.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "8px" }}>
              <Link href="/about#masterplan" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 20px", background: "#0E2838", color: "#FFFFFF", textDecoration: "none", fontWeight: 700 }}>View the masterplan</Link>
              {' '}
              <a href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 20px", border: "2px solid #0E2838", color: "#0E2838", textDecoration: "none", fontWeight: 700, boxSizing: "border-box" }}>Take a tour (video)</a>
            </div>
          </div>
          <div style={{ flex: "1 1 520px", minWidth: "0" }} className="g2">
            <div style={{ padding: "16px 0", borderBottom: "1px solid #E5DED3", fontSize: "18px", fontWeight: 500 }}>The Marina</div>
            <div style={{ padding: "16px 0", borderBottom: "1px solid #E5DED3", fontSize: "18px", fontWeight: 500 }}>Residential Enclaves</div>
            <div style={{ padding: "16px 0", borderBottom: "1px solid #E5DED3", fontSize: "18px", fontWeight: 500 }}>The Promenade</div>
            <div style={{ padding: "16px 0", borderBottom: "1px solid #E5DED3", fontSize: "18px", fontWeight: 500 }}>Boat Club</div>
            <div style={{ padding: "16px 0", borderBottom: "1px solid #E5DED3", fontSize: "18px", fontWeight: 500 }}>Central Park and Lake</div>
            <div style={{ padding: "16px 0", borderBottom: "1px solid #E5DED3", fontSize: "18px", fontWeight: 500 }}>Commercial Spaces</div>
            <div style={{ padding: "16px 0", borderBottom: "1px solid #E5DED3", fontSize: "18px", fontWeight: 500 }}>School</div>
            <div style={{ padding: "16px 0", borderBottom: "1px solid #E5DED3", fontSize: "18px", fontWeight: 500 }}>Places of Worship</div>
          </div>
        </div>
      </section>
      {/* downloads + newsletter */}
      <section style={{ background: "#F3ECE2", paddingTop: "56px", paddingBottom: "56px" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ flex: "1 1 420px", minWidth: "0" }}>
            <h2 style={{ margin: "0 0 8px", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "34px" }}>Stay informed</h2>
            <p style={{ margin: "0 0 16px", fontSize: "16px", color: "#3A4650" }}>Get development updates, service notices and our newsletter.</p>
            <NewsletterForm />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 18px", background: "#FFFFFF", border: "1px solid #D8CDBF", color: "#1B2228", textDecoration: "none", fontWeight: 700 }}>Download brochure</a>
            {' '}
            <a href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 18px", background: "#FFFFFF", border: "1px solid #D8CDBF", color: "#1B2228", textDecoration: "none", fontWeight: 700 }}>Download the ORIIS app</a>
            {' '}
            <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 18px", background: "#FFFFFF", border: "1px solid #D8CDBF", color: "#1B2228", textDecoration: "none", fontWeight: 700 }}>Newsletters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
