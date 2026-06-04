import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Water Utilities - Orange Island Lagos',
  description: 'Learn about the centralized clean water supply system on Orange Island Lagos. Private boreholes are not permitted.',
};

export default function WaterPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Header_Image.png"
            alt="Orange Island Utilities"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <span className="text-orange-400 font-bold uppercase tracking-widest text-sm block mb-3">
            Utilities & Services
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Water Supply
          </h1>
          <div className="w-16 h-1 bg-orange-500 rounded"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border border-gray-150 rounded-2xl p-10 md:p-14 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-orange-500" />
            
            <div className="flex flex-col items-center text-center mb-10">
              <span className="text-5xl mb-4" aria-hidden="true">🚰</span>
              <h2 className="text-3xl font-bold text-gray-900">Centralized Clean Water Supply</h2>
            </div>
            
            <div className="space-y-6 text-lg text-gray-700 font-light leading-relaxed mb-10">
              <p>
                The water supply system on Orange Island features a central water treatment plant capable of 
                delivering clean, potable water to all residents <strong className="font-semibold text-gray-900">24 hours a day, 7 days a week</strong>.
              </p>
              <p>
                All residents are required to connect directly to our central system. This guarantees that all households 
                enjoy uniform, high-quality, treated water without the variance in purity common in individually managed options.
              </p>
            </div>

            {/* Borehole ban alert block */}
            <div className="bg-amber-50 border-l-4 border-amber-600 rounded-r-xl p-6 mb-10">
              <div className="flex gap-4">
                <span className="text-2xl text-amber-700" aria-hidden="true">⚠️</span>
                <div>
                  <h4 className="font-bold text-amber-900 text-lg mb-1">Notice Regarding Private Boreholes</h4>
                  <p className="text-amber-800 text-sm font-light leading-relaxed">
                    Please note that private boreholes are <strong className="font-semibold">not permitted</strong> anywhere on Orange Island. 
                    This regulation protects the island&apos;s groundwater table, prevents soil subsidence, and maintains the environmental integrity of our reclaimed waterfront community.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                id="water-cta-contact"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3.5 rounded uppercase tracking-wider text-sm transition duration-300 shadow hover:shadow-md"
              >
                Request Connection Information
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Note */}
      <section className="py-16 bg-gray-50 border-t border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm font-light">
            Water services are managed in partnership with Roelag Environmental Services Ltd (Water, Sewage & Irrigation contractor).
          </p>
        </div>
      </section>
    </div>
  );
}
