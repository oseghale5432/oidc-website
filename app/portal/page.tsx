import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resident Portal - Orange Island Lagos',
  description: 'Access the resident and plot owner portal. Manage access control, pay utility bills, submit reports, and connect with management.',
};

export default function PortalPage() {
  const portalFeatures = [
    { title: 'Access Management', desc: 'Secure security clearance controls for plot owners, family members, and regular staff.', icon: '🔑' },
    { title: 'Utilities & Electricity', desc: 'Prepay electricity tokens, check water usages, and manage facilities bills.', icon: '⚡' },
    { title: 'Visitor Management', desc: 'Register guests, issue single-use gate entry passes, and receive visitor notifications.', icon: '👥' },
    { title: 'Community Communication', desc: 'Stay connected with notifications, announcements, community newsletters, and alerts.', icon: '📢' },
    { title: 'Simple Payments for Services', desc: 'Hassle-free online payments for monthly levies, development dues, and services.', icon: '💳' },
    { title: 'Issues Tracking & Reporting', desc: 'Submit and track infrastructure repair requests, security issues, or facility complaints.', icon: '🛠️' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Upper Banner */}
      <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left md:flex md:items-center md:justify-between gap-12">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Resident & Owner Portal
            </h1>
            <p className="text-lg text-orange-50 max-w-2xl font-light">
              Managed in partnership with <strong className="font-semibold">Venco</strong> to enhance living experiences, safety, and transparency on Orange Island.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex gap-4 justify-center">
            <a 
              href="https://orange.bizev.net/portal/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-orange-50 text-orange-950 px-8 py-3.5 rounded font-bold uppercase tracking-wider text-xs transition duration-300 shadow hover:shadow-md"
            >
              Sign In to Web Portal
            </a>
          </div>
        </div>
      </section>

      {/* Portal Services Dashboard Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold tracking-widest text-orange-600 uppercase mb-3">Portal Services</h2>
          <h3 className="text-3xl font-bold text-gray-900">What Can You Manage?</h3>
          <p className="text-gray-500 font-light mt-2 max-w-lg mx-auto text-sm">
            Everything you need to manage your properties and stay active in the community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portalFeatures.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition duration-300 hover:border-orange-500 flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl mb-4 block" aria-hidden="true">{item.icon}</span>
                <h4 className="font-bold text-gray-950 text-xl mb-3 leading-snug">{item.title}</h4>
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-6">{item.desc}</p>
              </div>
              <a 
                href="https://orange.bizev.net/portal/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 cursor-pointer hover:gap-2.5 transition-all"
              >
                Access Tool <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* App Promo Banner */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-950 mb-4">Manage on the Go</h3>
            <p className="text-gray-600 font-light leading-relaxed mb-6">
              Download the Venco Estate Mobile App for quick access control, real-time security alerts, and instant gate pass generations right from your smartphone.
            </p>
            <Link
              href="/venco-app"
              id="portal-cta-venco-info"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded uppercase tracking-wider text-xs transition duration-300 shadow hover:shadow-md"
            >
              Download Mobile App
            </Link>
          </div>
          <div className="relative h-64 overflow-hidden rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center p-8">
            <div className="text-center">
              <span className="text-5xl mb-3 block">📱</span>
              <h4 className="font-bold text-gray-950 text-lg mb-1">Venco Mobile App</h4>
              <p className="text-gray-500 text-sm font-light">Available for Apple iOS and Android devices.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
