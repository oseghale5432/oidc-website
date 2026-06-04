import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sewage Management & Waste Collection - Orange Island Lagos',
  description: 'Learn about the centralised vacuum sewage network and weekly waste collection schedules on Orange Island Lagos.',
};

export default function SewagePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Header_Image.png"
            alt="Orange Island Waste Utilities"
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
            Sewage & Waste Collection
          </h1>
          <div className="w-16 h-1 bg-orange-500 rounded"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Sewage Management Card */}
            <div className="bg-white border border-gray-150 rounded-2xl p-10 shadow-lg hover:shadow-xl transition relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-2 bg-orange-500" />
              <div>
                <div className="flex flex-col items-center text-center mb-8">
                  <span className="text-5xl mb-4" aria-hidden="true">🚽</span>
                  <h2 className="text-2xl font-bold text-gray-900">Sewage Management System</h2>
                </div>
                <div className="space-y-4 text-base text-gray-700 font-light leading-relaxed mb-8">
                  <p>
                    Our sewage management system features a <strong className="font-semibold text-gray-900">state-of-the-art centralised vacuum system</strong>, 
                    designed to efficiently handle all wastewater across the island.
                  </p>
                  <p>
                    We are currently facilitating connections from residents&apos; internal sewage systems to the central vacuum network.
                  </p>
                  <p>
                    Please reach out to our facilities team to coordinate your connection.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href="/contact"
                  id="sewage-cta-connect"
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded uppercase tracking-wider text-xs transition duration-300 shadow hover:shadow-md"
                >
                  Coordinate Connection
                </Link>
              </div>
            </div>

            {/* Waste Collection Card */}
            <div className="bg-white border border-gray-150 rounded-2xl p-10 shadow-lg hover:shadow-xl transition relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-2 bg-orange-500" />
              <div>
                <div className="flex flex-col items-center text-center mb-8">
                  <span className="text-5xl mb-4" aria-hidden="true">🗑️</span>
                  <h2 className="text-2xl font-bold text-gray-900">Waste Collection</h2>
                </div>
                <div className="space-y-4 text-base text-gray-700 font-light leading-relaxed mb-8">
                  <p>
                    Domestic waste collection takes place <strong className="font-semibold text-gray-900">every Thursday</strong>.
                  </p>
                  <p>
                    Residents are required to ensure their waste bins are placed at a central, easily accessible point for pickup by 7:00 AM on collection days.
                  </p>
                  <p>
                    For building waste, construction debris, or other industrial waste, please contact our facilities team directly to arrange a dedicated, paid collection.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href="/contact"
                  id="waste-cta-coordinate"
                  className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold px-6 py-3 rounded uppercase tracking-wider text-xs transition duration-300 shadow hover:shadow-md"
                >
                  Contact Facilities Team
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Infrastructure Note */}
      <section className="py-16 bg-gray-50 border-t border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm font-light">
            Vacuum systems are engineered in partnership with Aqseptance Group (Germany) and Roelag Environmental Services Ltd (Water, Sewage & Irrigation).
          </p>
        </div>
      </section>
    </div>
  );
}
