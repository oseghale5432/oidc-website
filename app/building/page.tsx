import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Building on the Island - Orange Island Lagos',
  description: 'Plot regulations, design approval and construction permits: your journey to building on Orange Island in 7 steps.',
};

export default function BuildingPage() {
  return (
    <div className="tpl tpl-building">
      <section style={{ background: "#0E2838", color: "#FFFFFF" }}>
        <div className="wrap" style={{ paddingTop: "28px", paddingBottom: "64px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C3D2DB", marginBottom: "28px" }}><Link href="/" style={{ color: "#C3D2DB" }}>Home</Link> / Building on the island</nav>
          <h1 style={{ margin: "0 0 20px", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "64px", lineHeight: 1.02 }}>Building on Orange Island</h1>
          <p style={{ margin: "0 0 28px", fontSize: "20px", lineHeight: 1.55, color: "#D6DFE5", maxWidth: "780px" }}>Physical planning and building development guidelines. A step-by-step guide to designing, approving and constructing your property, in line with estate and Lagos State regulations.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <Link href="/physical-planning-document" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 20px", background: "#C9611F", color: "#FFFFFF", textDecoration: "none", fontWeight: 700 }}>Download the full guidelines (PDF)</Link>
            {' '}
            <a href="#approvals" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 20px", border: "2px solid #FFFFFF", color: "#FFFFFF", textDecoration: "none", fontWeight: 700, boxSizing: "border-box" }}>See the approval process</a>
          </div>
        </div>
      </section>
      {/* process overview */}
      <section style={{ background: "#FFFFFF", borderBottom: "1px solid #E5DED3", paddingTop: "40px", paddingBottom: "40px" }}>
        <div className="wrap">
          <h2 style={{ margin: "0 0 20px", fontSize: "16px", letterSpacing: "3px", color: "#A9481A" }}>YOUR JOURNEY IN 7 STEPS</h2>
          <ol style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <li style={{ flex: "1 1 150px", padding: "14px", borderTop: "4px solid #0E2838", fontSize: "15px" }}><strong style={{ display: "block", fontSize: "13px", color: "#5B6670" }}>STEP 1</strong>Understand your plot regulations</li>
            <li style={{ flex: "1 1 150px", padding: "14px", borderTop: "4px solid #0E2838", fontSize: "15px" }}><strong style={{ display: "block", fontSize: "13px", color: "#5B6670" }}>STEP 2</strong>Site &amp; feasibility studies</li>
            <li style={{ flex: "1 1 150px", padding: "14px", borderTop: "4px solid #0E2838", fontSize: "15px" }}><strong style={{ display: "block", fontSize: "13px", color: "#5B6670" }}>STEP 3</strong>Concept architectural design</li>
            <li style={{ flex: "1 1 150px", padding: "14px", borderTop: "4px solid #0E2838", fontSize: "15px" }}><strong style={{ display: "block", fontSize: "13px", color: "#5B6670" }}>STEP 4</strong>Lagos State approvals</li>
            <li style={{ flex: "1 1 150px", padding: "14px", borderTop: "4px solid #C9611F", fontSize: "15px" }}><strong style={{ display: "block", fontSize: "13px", color: "#5B6670" }}>STEP 5</strong>Pre-construction permit</li>
            <li style={{ flex: "1 1 150px", padding: "14px", borderTop: "4px solid #C9611F", fontSize: "15px" }}><strong style={{ display: "block", fontSize: "13px", color: "#5B6670" }}>STEP 6</strong>Construction permit</li>
            <li style={{ flex: "1 1 150px", padding: "14px", borderTop: "4px solid #C9611F", fontSize: "15px" }}><strong style={{ display: "block", fontSize: "13px", color: "#5B6670" }}>STEP 7</strong>Construction phase</li>
          </ol>
        </div>
      </section>
      {/* step 1 regulations */}
      <section style={{ paddingTop: "72px", paddingBottom: "72px" }}>
        <div className="wrap">
          <span style={{ fontSize: "13px", letterSpacing: "3px", color: "#A9481A", fontWeight: 700 }}>STEP 1</span>
          <h2 style={{ margin: "8px 0 12px", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "44px" }}>Understand your plot regulations</h2>
          <p style={{ margin: "0 0 32px", fontSize: "17px", color: "#3A4650", maxWidth: "760px" }}>Before starting any design, ensure your proposed development aligns with the approved planning parameters. Residential plots (650 sqm – typical):</p>
          <div className="g5">
            <div style={{ background: "#FFFFFF", border: "1px solid #E5DED3", padding: "20px" }}>
              <div style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "44px", fontWeight: 700, color: "#0E2838", lineHeight: 1 }}>60%</div>
              <div style={{ fontSize: "14px", color: "#5B6670", marginTop: "8px" }}>Max building coverage</div>
            </div>
            <div style={{ background: "#FFFFFF", border: "1px solid #E5DED3", padding: "20px" }}>
              <div style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "44px", fontWeight: 700, color: "#0E2838", lineHeight: 1 }}>G+2</div>
              <div style={{ fontSize: "14px", color: "#5B6670", marginTop: "8px" }}>Max floors (penthouse limited to 30%)</div>
            </div>
            <div style={{ background: "#FFFFFF", border: "1px solid #E5DED3", padding: "20px" }}>
              <div style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "44px", fontWeight: 700, color: "#0E2838", lineHeight: 1 }}>805</div>
              <div style={{ fontSize: "14px", color: "#5B6670", marginTop: "8px" }}>sqm max gross floor area</div>
            </div>
            <div style={{ background: "#FFFFFF", border: "1px solid #E5DED3", padding: "20px" }}>
              <div style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "44px", fontWeight: 700, color: "#0E2838", lineHeight: 1 }}>10%</div>
              <div style={{ fontSize: "14px", color: "#5B6670", marginTop: "8px" }}>Minimum landscaping</div>
            </div>
            <div style={{ background: "#FFFFFF", border: "1px solid #E5DED3", padding: "20px" }}>
              <div style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontSize: "44px", fontWeight: 700, color: "#0E2838", lineHeight: 1 }}>2</div>
              <div style={{ fontSize: "14px", color: "#5B6670", marginTop: "8px" }}>Minimum parking spaces</div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", marginTop: "24px", alignItems: "stretch" }}>
            <div style={{ flex: "1 1 420px", background: "#FFFFFF", border: "1px solid #E5DED3", padding: "24px" }}>
              <h3 style={{ margin: "0 0 14px", fontSize: "20px" }}>Mandatory setbacks</h3>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "16px" }}>
                  <thead>
                    <tr>
                      <th scope="col" style={{ textAlign: "left", padding: "10px 0", borderBottom: "2px solid #0E2838" }}>Boundary</th>
                      <th scope="col" style={{ textAlign: "right", padding: "10px 0", borderBottom: "2px solid #0E2838" }}>Minimum</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: "10px 0", borderBottom: "1px solid #E5DED3" }}>Front</td>
                      <td style={{ padding: "10px 0", borderBottom: "1px solid #E5DED3", textAlign: "right", fontWeight: 700 }}>6 m</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "10px 0", borderBottom: "1px solid #E5DED3" }}>Rear</td>
                      <td style={{ padding: "10px 0", borderBottom: "1px solid #E5DED3", textAlign: "right", fontWeight: 700 }}>3 m</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "10px 0" }}>Sides</td>
                      <td style={{ padding: "10px 0", textAlign: "right", fontWeight: 700 }}>3 m</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div style={{ flex: "1 1 420px", background: "#FFF1E3", border: "1px solid #F1D2B4", padding: "24px", display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center" }}>
              <strong style={{ fontSize: "18px", color: "#7E3411" }}>Important</strong>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: 1.6 }}>All cantilevers must comply strictly with setback requirements. All developments must align with existing infrastructure (roads, drainage, utilities). Non-compliance may result in delays or suspension of construction.</p>
            </div>
          </div>
        </div>
      </section>
      {/* steps 2-3 */}
      <section style={{ background: "#FFFFFF", paddingTop: "72px", paddingBottom: "72px", borderTop: "1px solid #E5DED3", borderBottom: "1px solid #E5DED3" }}>
        <div className="wrap g2" style={{ gap: "48px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontSize: "13px", letterSpacing: "3px", color: "#A9481A", fontWeight: 700 }}>STEP 2</span>
            <h2 style={{ margin: "0", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "38px" }}>Site &amp; feasibility studies</h2>
            <p style={{ margin: "0", fontSize: "16px", color: "#3A4650" }}>Before design begins, a site assessment is mandatory.</p>
            <ul style={{ margin: "0", paddingLeft: "20px", fontSize: "16px", lineHeight: 1.8 }}>
              <li>Soil test (geotechnical report)</li>
              <li>Feasibility study</li>
            </ul>
            <p style={{ margin: "0", fontSize: "15px", fontWeight: 700 }}>Why this matters</p>
            <ul style={{ margin: "0", paddingLeft: "20px", fontSize: "16px", lineHeight: 1.8, color: "#3A4650" }}>
              <li>Determines soil stability and foundation requirements</li>
              <li>Identifies site constraints (water table, utilities, access)</li>
              <li>Helps avoid costly design changes and delays</li>
            </ul>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontSize: "13px", letterSpacing: "3px", color: "#A9481A", fontWeight: 700 }}>STEP 3</span>
            <h2 style={{ margin: "0", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "38px" }}>Concept architectural design</h2>
            <p style={{ margin: "0", fontSize: "16px", color: "#3A4650" }}>Your architect must prepare a concept design package, including:</p>
            <ul style={{ margin: "0", paddingLeft: "20px", fontSize: "16px", lineHeight: 1.8, columns: "2" }}>
              <li>Site plan with analysis</li>
              <li>Floor plans</li>
              <li>Roof plan</li>
              <li>Sections (minimum 2)</li>
              <li>Elevations (all sides)</li>
              <li>3D perspective views</li>
              <li>Finish schedule</li>
            </ul>
            <p style={{ margin: "0", fontSize: "15px", color: "#3A4650" }}>All drawings must be to scale and properly dimensioned. Once approved, you will receive a <strong>Concept Approval Letter (stamped “ACCEPTED”)</strong> and can proceed to Lagos State approvals.</p>
          </div>
        </div>
      </section>
      {/* approvals */}
      <section id="approvals" style={{ paddingTop: "72px", paddingBottom: "72px" }}>
        <div className="wrap">
          <h2 style={{ margin: "0 0 8px", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "44px" }}>Approval process</h2>
          <p style={{ margin: "0 0 32px", fontSize: "17px", color: "#3A4650" }}>Two sets of approvals apply: Lagos State, then Orange Island (OIDC) at each stage of construction.</p>
          <div style={{ background: "#FFFFFF", border: "1px solid #E5DED3", padding: "32px", marginBottom: "24px" }}>
            <span style={{ fontSize: "13px", letterSpacing: "3px", color: "#A9481A", fontWeight: 700 }}>STEP 4 · LAGOS STATE APPROVALS</span>
            <p style={{ margin: "12px 0 20px", fontSize: "16px", color: "#3A4650" }}>Process approvals directly with the Lagos State Physical Planning Permit Authority (LASPPPA) and the Lagos State Building Control Agency (LASBCA).</p>
            <div className="g2" style={{ gap: "32px" }}>
              <div>
                <h3 style={{ margin: "0 0 10px", fontSize: "19px" }}>Planning permit (LASPPPA) — documents</h3>
                <ul style={{ margin: "0", paddingLeft: "20px", fontSize: "16px", lineHeight: 1.8 }}>
                  <li>Architectural drawings (stamped &amp; sealed)</li>
                  <li>Structural drawings + calculations (COREN engineer)</li>
                  <li>Mechanical &amp; electrical drawings</li>
                  <li>Survey plan</li>
                  <li>Soil test report</li>
                  <li>Title documents (C of O / Deed / Consent, etc.)</li>
                  <li>Tax clearance</li>
                  <li>Passport photographs</li>
                </ul>
              </div>
              <div>
                <h3 style={{ margin: "0 0 10px", fontSize: "19px" }}>Construction approval (LASBCA)</h3>
                <ul style={{ margin: "0", paddingLeft: "20px", fontSize: "16px", lineHeight: 1.8 }}>
                  <li>Letter of intent to commence construction</li>
                  <li>Approved drawings</li>
                  <li>Structural stability letter</li>
                  <li>Insurance (all-risk policy)</li>
                  <li>Safety clearance</li>
                </ul>
              </div>
            </div>
            <p style={{ margin: "20px 0 0", padding: "14px 16px", background: "#EEF3EA", fontSize: "15px" }}>All statutory payments are made directly to Lagos State. Orange Island does not charge for this process.</p>
          </div>
          <h3 style={{ margin: "40px 0 16px", fontSize: "16px", letterSpacing: "3px", color: "#A9481A" }}>OIDC APPROVALS</h3>
          <div className="g3">
            <article style={{ background: "#FFFFFF", border: "1px solid #E5DED3", borderTop: "4px solid #C9611F", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "13px", color: "#5B6670", fontWeight: 700 }}>STEP 5</span>
              <h4 style={{ margin: "0", fontSize: "22px" }}>Pre-construction permit</h4>
              <p style={{ margin: "0", fontSize: "15px", color: "#3A4650" }}>Required before full construction. Allows:</p>
              <ul style={{ margin: "0", paddingLeft: "20px", fontSize: "15px", lineHeight: 1.8 }}>
                <li>Site clearing</li>
                <li>Sand filling</li>
                <li>Fence construction</li>
                <li>Soil testing</li>
                <li>Beacon positioning</li>
              </ul>
              <p style={{ margin: "0", fontSize: "15px", fontWeight: 700, color: "#7E3411" }}>Site induction is mandatory before any activity begins.</p>
            </article>
            <article style={{ background: "#FFFFFF", border: "1px solid #E5DED3", borderTop: "4px solid #C9611F", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "13px", color: "#5B6670", fontWeight: 700 }}>STEP 6</span>
              <h4 style={{ margin: "0", fontSize: "22px" }}>Construction permit</h4>
              <p style={{ margin: "0", fontSize: "15px", color: "#3A4650" }}>Submit to Orange Island Management:</p>
              <ul style={{ margin: "0", paddingLeft: "20px", fontSize: "15px", lineHeight: 1.7 }}>
                <li>Approved LASPPPA &amp; LASBCA drawings</li>
                <li>Structural drawings (COREN certified)</li>
                <li>Soil test report</li>
                <li>Structural indemnity letter</li>
                <li>Safety clearance</li>
                <li>Evidence of material testing (LSMTL)</li>
                <li>Contractor’s insurance</li>
                <li>Method statement</li>
                <li>Project signage</li>
                <li>Functional site toilet</li>
              </ul>
            </article>
            <article style={{ background: "#FFFFFF", border: "1px solid #E5DED3", borderTop: "4px solid #C9611F", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "13px", color: "#5B6670", fontWeight: 700 }}>STEP 7 &amp; AFTER</span>
              <h4 style={{ margin: "0", fontSize: "22px" }}>Construction &amp; post-construction</h4>
              <p style={{ margin: "0", fontSize: "15px", color: "#3A4650" }}>During construction:</p>
              <ul style={{ margin: "0", paddingLeft: "20px", fontSize: "15px", lineHeight: 1.8 }}>
                <li>Comply with approved drawings</li>
                <li>Maintain site safety standards</li>
                <li>Adhere to estate regulations and working hours</li>
                <li>Keep all contractors registered with Management</li>
              </ul>
              <p style={{ margin: "0", fontSize: "15px", color: "#5B6670" }}>Post-construction: [completion inspection, utility connections and occupancy sign-off — confirm requirements].</p>
            </article>
          </div>
        </div>
      </section>
      {/* help band */}
      <section style={{ background: "#0E2838", color: "#FFFFFF", paddingTop: "56px", paddingBottom: "56px" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ flex: "1 1 520px", minWidth: "0" }}>
            <h2 style={{ margin: "0 0 8px", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "36px" }}>Ready to submit, or need advice?</h2>
            <p style={{ margin: "0", fontSize: "17px", color: "#D6DFE5" }}>Our team can walk you and your architect through each stage.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <a href="mailto:hello@orangeislandng.com" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 20px", background: "#C9611F", color: "#FFFFFF", textDecoration: "none", fontWeight: 700 }}>Email the approvals team</a>
            {' '}
            <a href="tel:+2348132992279" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 20px", border: "2px solid #FFFFFF", color: "#FFFFFF", textDecoration: "none", fontWeight: 700, boxSizing: "border-box" }}>+234 813 299 2279</a>
          </div>
        </div>
      </section>
    </div>
  );
}
