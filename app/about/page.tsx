import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Who We Are - Orange Island Lagos',
  description: 'Orange Island is a master planned community delivered through a Public Private Partnership between Orange Island Development Company and the Lagos State Government.',
};

export default function AboutPage() {
  return (
    <div className="tpl tpl-about">
      <section style={{ background: "#0E2838", color: "#FFFFFF" }}>
        <div className="wrap" style={{ paddingTop: "28px", paddingBottom: "64px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C3D2DB", marginBottom: "28px" }}><Link href="/" style={{ color: "#C3D2DB" }}>Home</Link> / Who we are</nav>
          <h1 style={{ margin: "0 0 20px", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "64px", lineHeight: 1.02 }}>Who we are</h1>
          <p style={{ margin: "0", fontSize: "20px", lineHeight: 1.55, color: "#D6DFE5", maxWidth: "800px" }}>A master planned community and forward-thinking neighbourhood, delivered through a Public Private Partnership between Orange Island Development Company and the Lagos State Government.</p>
        </div>
      </section>
      {/* vision */}
      <section style={{ paddingTop: "72px", paddingBottom: "72px" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "56px" }}>
          <div style={{ flex: "1 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
            <span style={{ fontSize: "13px", letterSpacing: "3px", color: "#A9481A", fontWeight: 700 }}>OUR VISION</span>
            <p style={{ margin: "0", fontSize: "18px", lineHeight: 1.7, color: "#3A4650" }}>Orange Island has been conceptualised, managed and delivered by teams of national and international reputation. The Lagos State Government’s aspiration is to transform Lagos into an organised smart city which makes use of resources and services both tactically and efficiently. Orange Island is poised to be a leading example of a stylish lifestyle with a strong sense of community, with security and safety central to its vision.</p>
            <p style={{ margin: "0", fontSize: "18px", lineHeight: 1.7, color: "#3A4650" }}>Orange Island Development Company (OIDC) is a special purpose company, formed for the purpose of owning, developing and operating the project. Its sponsor, FW Dredging Limited, is one of Nigeria’s foremost indigenous dredging companies.</p>
          </div>
          <aside style={{ flex: "1 1 380px", minWidth: "0", background: "#FFFFFF", border: "1px solid #E5DED3", padding: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <h2 style={{ margin: "0", fontSize: "20px" }}>Key milestones</h2>
            <ol style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "14px", fontSize: "15px" }}>
              <li style={{ display: "flex", gap: "14px" }}><strong style={{ width: "72px", flex: "none", color: "#0E2838" }}>Jan 2013</strong>MoU signed between Lagos State Government and FW Dredging</li>
              <li style={{ display: "flex", gap: "14px" }}><strong style={{ width: "72px", flex: "none", color: "#0E2838" }}>Jan 2014</strong>Joint venture agreement signed with OIDC and Lagos State</li>
              <li style={{ display: "flex", gap: "14px" }}><strong style={{ width: "72px", flex: "none", color: "#0E2838" }}>[Year]</strong>Phase 1 infrastructure completed</li>
              <li style={{ display: "flex", gap: "14px" }}><strong style={{ width: "72px", flex: "none", color: "#0E2838" }}>[Year]</strong>Phase 2 infrastructure completed</li>
              <li style={{ display: "flex", gap: "14px" }}><strong style={{ width: "72px", flex: "none", color: "#A9481A" }}>2026</strong>Facilities &amp; development stage: IPP with DEL / Viathan and MTN connection</li>
            </ol>
          </aside>
        </div>
      </section>
      {/* masterplan + land use */}
      <section id="masterplan" style={{ background: "#FFFFFF", paddingTop: "72px", paddingBottom: "72px", borderTop: "1px solid #E5DED3", borderBottom: "1px solid #E5DED3" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
          <div style={{ flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
            <span style={{ fontSize: "13px", letterSpacing: "3px", color: "#A9481A", fontWeight: 700 }}>MASTERPLAN</span>
            <h2 style={{ margin: "0", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "44px", lineHeight: 1.05 }}>150 hectares on the Lagos Lagoon</h2>
            <p style={{ margin: "0", fontSize: "17px", lineHeight: 1.65, color: "#3A4650" }}>The project is conceived with the singular aim of creating a super modern up-market residential, mixed use and commercial use mega city on a reclaimed island in the gentle waters of the Lagos Lagoon abutting the Lekki Phase 1 foreshore. It involved dredging sand from the bed of the lagoon, constructing an access land bridge and creating the infrastructure to service the island.</p>
            <div style={{ height: "320px", background: "#E6ECEF", display: "flex", alignItems: "flex-end", padding: "16px", boxSizing: "border-box", position: "relative", overflow: "hidden" }}>
              <Image src="/images/orange_map.jpg" alt="Orange Island masterplan" fill sizes="(max-width: 1000px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
          </div>
          <div style={{ flex: "1 1 420px", minWidth: "0" }}>
            <h3 style={{ margin: "0 0 14px", fontSize: "20px" }}>Land uses</h3>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "16px" }}>
                <thead>
                  <tr>
                    <th scope="col" style={{ textAlign: "left", padding: "10px 0", borderBottom: "2px solid #0E2838" }}>Use</th>
                    <th scope="col" style={{ textAlign: "right", padding: "10px 0", borderBottom: "2px solid #0E2838" }}>Hectares</th>
                    <th scope="col" style={{ textAlign: "right", padding: "10px 0", borderBottom: "2px solid #0E2838" }}>%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "10px 0", borderBottom: "1px solid #E5DED3" }}>Residential</td>
                    <td style={{ textAlign: "right", borderBottom: "1px solid #E5DED3" }}>95.9</td>
                    <td style={{ textAlign: "right", borderBottom: "1px solid #E5DED3" }}>63.6</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 0", borderBottom: "1px solid #E5DED3" }}>Road reserve</td>
                    <td style={{ textAlign: "right", borderBottom: "1px solid #E5DED3" }}>27.53</td>
                    <td style={{ textAlign: "right", borderBottom: "1px solid #E5DED3" }}>18.25</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 0", borderBottom: "1px solid #E5DED3" }}>Open space / greenery</td>
                    <td style={{ textAlign: "right", borderBottom: "1px solid #E5DED3" }}>17.33</td>
                    <td style={{ textAlign: "right", borderBottom: "1px solid #E5DED3" }}>11.49</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 0", borderBottom: "1px solid #E5DED3" }}>Mixed use</td>
                    <td style={{ textAlign: "right", borderBottom: "1px solid #E5DED3" }}>8.13</td>
                    <td style={{ textAlign: "right", borderBottom: "1px solid #E5DED3" }}>5.39</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 0", borderBottom: "1px solid #E5DED3" }}>Public use / institutional</td>
                    <td style={{ textAlign: "right", borderBottom: "1px solid #E5DED3" }}>1.1</td>
                    <td style={{ textAlign: "right", borderBottom: "1px solid #E5DED3" }}>0.74</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 0", borderBottom: "1px solid #E5DED3" }}>Industrial</td>
                    <td style={{ textAlign: "right", borderBottom: "1px solid #E5DED3" }}>0.8</td>
                    <td style={{ textAlign: "right", borderBottom: "1px solid #E5DED3" }}>0.53</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 0", fontWeight: 700 }}>Total</td>
                    <td style={{ textAlign: "right", fontWeight: 700 }}>150</td>
                    <td style={{ textAlign: "right", fontWeight: 700 }}>100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 style={{ margin: "28px 0 10px", fontSize: "20px" }}>Location</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: 1.6, color: "#3A4650" }}>About a kilometre from Lekki Phase 1 and next to the Lekki Foreshore reclamation project, easily accessible via the Lekki-Ikoyi Link Bridge and Lekki-Epe Expressway through Freedom Way — minutes from shopping and leisure along Admiralty Way.</p>
          </div>
        </div>
      </section>
      {/* board */}
      <section style={{ paddingTop: "72px", paddingBottom: "72px" }}>
        <div className="wrap">
          <h2 style={{ margin: "0 0 32px", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "44px" }}>Board of directors</h2>
          <div className="g4">
            <article style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ aspectRatio: "4/5", background: "#E6ECEF" }}></div>
              <h3 style={{ margin: "0", fontSize: "19px" }}>Olusegun Kassim</h3>
              <span style={{ fontSize: "14px", color: "#A9481A", fontWeight: 700 }}>Chairman</span>
              <p style={{ margin: "0", fontSize: "14px", lineHeight: 1.55, color: "#5B6670" }}>Retired Deputy Inspector General of Police; director of several companies including FW Dredging Limited.</p>
            </article>
            <article style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ aspectRatio: "4/5", background: "#E6ECEF" }}></div>
              <h3 style={{ margin: "0", fontSize: "19px" }}>Olayinka Ogunsulire</h3>
              <span style={{ fontSize: "14px", color: "#A9481A", fontWeight: 700 }}>Managing Director</span>
              <p style={{ margin: "0", fontSize: "14px", lineHeight: 1.55, color: "#5B6670" }}>Property development and investment professional with over 25 years’ experience; formerly CEO of Heirs Real Estate and MD of ARM Properties. FRICS.</p>
            </article>
            <article style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ aspectRatio: "4/5", background: "#E6ECEF" }}></div>
              <h3 style={{ margin: "0", fontSize: "19px" }}>George Nwachukwu</h3>
              <span style={{ fontSize: "14px", color: "#A9481A", fontWeight: 700 }}>Non Executive Director</span>
              <p style={{ margin: "0", fontSize: "14px", lineHeight: 1.55, color: "#5B6670" }}>Managing Director/CEO of FW Dredging; Fellow of the Institute of Chartered Accountants of Nigeria.</p>
            </article>
            <article style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ aspectRatio: "4/5", background: "#E6ECEF" }}></div>
              <h3 style={{ margin: "0", fontSize: "19px" }}>Chiedu Nweke</h3>
              <span style={{ fontSize: "14px", color: "#A9481A", fontWeight: 700 }}>Non Executive Director</span>
              <p style={{ margin: "0", fontSize: "14px", lineHeight: 1.55, color: "#5B6670" }}>Managing Director of Swampsea Construction Nigeria; barrister with over 25 years’ post-qualification experience.</p>
            </article>
            <article style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ aspectRatio: "4/5", background: "#E6ECEF" }}></div>
              <h3 style={{ margin: "0", fontSize: "19px" }}>Theodore Omalu</h3>
              <span style={{ fontSize: "14px", color: "#A9481A", fontWeight: 700 }}>Non Executive Director</span>
              <p style={{ margin: "0", fontSize: "14px", lineHeight: 1.55, color: "#5B6670" }}>Executive Director, business development at FW Dredging; over fifteen years’ top management experience.</p>
            </article>
            <article style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ aspectRatio: "4/5", background: "#E6ECEF" }}></div>
              <h3 style={{ margin: "0", fontSize: "19px" }}>Lookman Durosinmi-Etti</h3>
              <span style={{ fontSize: "14px", color: "#A9481A", fontWeight: 700 }}>Non Executive Director</span>
              <p style={{ margin: "0", fontSize: "14px", lineHeight: 1.55, color: "#5B6670" }}>Co-founder of Etti &amp; Edu; former legal adviser to the Senate Committee on Banking and Currency.</p>
            </article>
            <article style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ aspectRatio: "4/5", background: "#E6ECEF" }}></div>
              <h3 style={{ margin: "0", fontSize: "19px" }}>Adekunle Mujeeb Smith</h3>
              <span style={{ fontSize: "14px", color: "#A9481A", fontWeight: 700 }}>Non Executive Director</span>
              <p style={{ margin: "0", fontSize: "14px", lineHeight: 1.55, color: "#5B6670" }}>Experience across financial services, consulting and FMCG in Nigeria and the UK, including JP Morgan, London.</p>
            </article>
          </div>
        </div>
      </section>
      {/* development team */}
      <section style={{ background: "#FFFFFF", paddingTop: "72px", paddingBottom: "72px", borderTop: "1px solid #E5DED3" }}>
        <div className="wrap">
          <h2 style={{ margin: "0 0 8px", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "44px" }}>Development &amp; facilities partners</h2>
          <p style={{ margin: "0 0 32px", fontSize: "17px", color: "#3A4650", maxWidth: "820px" }}>The team proudly recognises, supports and celebrates local Nigerian businesses and their international counterparts, creating partnerships that deliver a destination of global standards for all Nigerians to enjoy and be proud of.</p>
          <div className="g3" style={{ gap: "0 32px" }}>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3", background: "#FFF6EE", paddingLeft: "12px" }}><strong>DEL / Viathan</strong> · Nigeria<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>Independent Power Producer (IPP)</span></div>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3", background: "#FFF6EE", paddingLeft: "12px" }}><strong>MTN Nigeria</strong> · Nigeria<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>Connectivity partner</span></div>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3" }}><strong>Van Oord Ltd</strong> · The Netherlands<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>Dredging and reclamation contractor</span></div>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3" }}><strong>Swampsea Ltd</strong> · Nigeria<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>Construction and development managers</span></div>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3" }}><strong>GP Greed and Associates</strong> · South Africa<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>Architects and master planners</span></div>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3" }}><strong>Metropolitan Construction Company</strong> · Nigeria<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>Main building and infrastructure contractor</span></div>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3" }}><strong>Koa</strong> · Nigeria<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>Mechanical and electrical consultants</span></div>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3" }}><strong>Aqseptance Group</strong> · Germany<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>Filtration, separation and water technology</span></div>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3" }}><strong>Roelag Environmental Services</strong> · Nigeria<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>Water, sewage and irrigation</span></div>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3" }}><strong>Willem Olaf Willem Engineering</strong> · Nigeria<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>Shore protection and lake</span></div>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3" }}><strong>Ecopro Resources</strong> · Nigeria<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>Environmental contractor</span></div>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3" }}><strong>Centurion Systems</strong> · South Africa<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>Gate system</span></div>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3" }}><strong>Al-Mansour Engineering &amp; Construction</strong> · Nigeria<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>Gate house</span></div>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3" }}><strong>Cynssa Technologies Int’l</strong> · Nigeria<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>Street lighting</span></div>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3" }}><strong>Via Consult</strong> · South Africa<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>Engineering design services</span></div>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3" }}><strong>Plot Hierarchy</strong> · United Kingdom<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>Consultants</span></div>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3" }}><strong>Delano Architects</strong> · Nigeria<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>Town planning consultants</span></div>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3" }}><strong>Mepas &amp; Prodel Ltd</strong> · Nigeria<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>Town planning consultants</span></div>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3" }}><strong>Jackson Etti &amp; Edu</strong> · Nigeria<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>Solicitor and legal adviser</span></div>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3" }}><strong>COSEC Administrators</strong> · Nigeria<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>Company secretary</span></div>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3" }}><strong>Keystone Bank</strong> · Nigeria<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>Bankers</span></div>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3" }}><strong>SIAO</strong> · Nigeria<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>External auditors</span></div>
            <div style={{ padding: "14px 0", borderBottom: "1px solid #E5DED3" }}><strong>Socrates Communications</strong> · United Kingdom<br /><span style={{ fontSize: "14px", color: "#5B6670" }}>Branding consultants</span></div>
          </div>
        </div>
      </section>
      {/* partners */}
      <section style={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="wrap g2">
          <div style={{ padding: "28px", background: "#FFFFFF", border: "1px solid #E5DED3" }}>
            <h3 style={{ margin: "0 0 8px", fontSize: "20px" }}>Lagos State Government</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: 1.6, color: "#3A4650" }}>Through its Ministry of Waterfront Infrastructure Development, Lagos State remains committed to delivering a thriving Lagos State.</p>
          </div>
          <div style={{ padding: "28px", background: "#FFFFFF", border: "1px solid #E5DED3" }}>
            <h3 style={{ margin: "0 0 8px", fontSize: "20px" }}>FW Dredging Limited</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: 1.6, color: "#3A4650" }}>One of Nigeria’s foremost indigenous dredging companies, involved in some of the largest and most complex dredging projects in Nigeria.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
