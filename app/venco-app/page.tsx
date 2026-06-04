import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

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
      {/* Hero Section */}
      <section className="relative bg-[#f9eafe]/40 overflow-hidden py-16 md:py-24 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-purple-600 font-bold uppercase tracking-widest text-sm block mb-3">
              Orange Island Partnership
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Community Access & Security via <span className="text-purple-600">Venco App</span>
            </h1>
            <p className="text-lg text-gray-700 font-light leading-relaxed mb-8">
              We are delighted to announce our partnership with Venco, a technology company that provides solutions 
              to enhance living experiences in residential and commercial communities, enhancing security and access control 
              across Orange Island.
            </p>
            <p className="text-sm text-gray-500 font-light bg-purple-50 p-4 border-l-2 border-purple-500 rounded-r-lg mb-8">
              🔒 This portal feature is available exclusively to all plot owners with up-to-date payments and subscriptions.
            </p>
            
            {/* Download Links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://apps.apple.com/ng/app/venco-estate-app/id1542447397"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-950 text-white px-6 py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg active:scale-98"
              >
                <span className="text-2xl"></span>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-light text-gray-400">Download on the</p>
                  <p className="text-sm font-semibold -mt-1">App Store</p>
                </div>
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.manqala.estatemanager"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-950 text-white px-6 py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg active:scale-98"
              >
                <span className="text-xl">🤖</span>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-light text-gray-400">Get it on</p>
                  <p className="text-sm font-semibold -mt-1">Google Play</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md h-[400px] md:h-[500px]">
              <Image
                src="/images/venco_app-header.png"
                alt="Venco Estate App Mockup"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Features List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest text-purple-600 uppercase mb-3">Capabilities</h2>
            <h3 className="text-3xl font-bold text-gray-900">What Venco Enables for Residents</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm hover:shadow transition duration-300 hover:border-purple-300"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 text-xl font-bold mb-5">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-gray-950 text-lg mb-3">{feat.title}</h4>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Link to Portal */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Access the Web Portal</h2>
          <p className="text-lg text-purple-50 mb-8 font-light leading-relaxed">
            Plot owners and residents can also access portal features online through their web browser.
          </p>
          <Link
            href="/portal"
            id="venco-cta-portal"
            className="inline-block bg-white text-purple-950 px-8 py-4 rounded font-bold uppercase tracking-wider text-sm transition hover:bg-purple-50 shadow"
          >
            Go to Web Portal
          </Link>
        </div>
      </section>
    </div>
  );
}
