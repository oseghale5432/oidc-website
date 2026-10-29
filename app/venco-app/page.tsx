import type { Metadata } from 'next';
import PageTitle from '@/components/site/PageTitle';

export const metadata: Metadata = {
  title: 'Venco Estate App - Orange Island Lagos',
  description: 'Download the Venco Estate App to access security controls, visitor management, utility payments, and community features.',
};

export default function VencoPage() {
  const features = [
    { title: 'Access Control & Security', desc: 'Pre-register visitors and issue secure QR codes for quick, verified entry gate access.' },
    { title: 'Utility Prepayments', desc: 'Easily top up electricity tokens and pay water/facility subscriptions.' },
    { title: 'Issue Tracking', desc: 'Report leaks, outages, or security issues directly to the facility managers with image uploads.' },
    { title: 'Community Broadcasts', desc: 'Stay updated with notifications, estate guidelines, and general announcements.' },
  ];

  return (
    <div className="bg-white">
      <PageTitle
        eyebrow="Orange Island partnership"
        title="Community access & security via the Venco app"
        crumbs={[{ label: 'Utilities & infrastructure', href: '/utilities' }, { label: 'Venco app' }]}
        intro="We are delighted to announce our partnership with Venco, a technology company that provides solutions to enhance living experiences in residential and commercial communities, enhancing security and access control across Orange Island."
      >
        <p style={{ margin: '24px 0 0', fontSize: '15px', color: '#F2A65A' }}>Available exclusively to plot owners with up-to-date payments and subscriptions.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '24px' }}>
          <a href="https://apps.apple.com/ng/app/venco-estate-app/id1542447397" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', minHeight: '48px', padding: '0 20px', background: '#C9611F', color: '#FFFFFF', textDecoration: 'none', fontWeight: 700 }}>Download on the App Store</a>
          <a href="https://play.google.com/store/apps/details?id=com.manqala.estatemanager" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', minHeight: '48px', padding: '0 20px', border: '2px solid #FFFFFF', color: '#FFFFFF', textDecoration: 'none', fontWeight: 700 }}>Get it on Google Play</a>
        </div>
      </PageTitle>

      {/* App Features List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest text-orange-600 uppercase mb-3">Capabilities</h2>
            <h3 className="text-3xl font-bold text-gray-900">What Venco Enables for Residents</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm hover:shadow transition duration-300 hover:border-orange-300"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 text-xl font-bold mb-5">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-gray-950 text-lg mb-3">{feat.title}</h4>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
