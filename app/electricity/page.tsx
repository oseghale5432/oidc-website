import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Electricity Utilities - Orange Island Lagos',
  description: 'Understand the electricity grid and energy mix on Orange Island Lagos. Backup systems and solar policies.',
};

export default function ElectricityPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Header_Image.png"
            alt="Orange Island Electricity Utilities"
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
            Electricity & Power
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
              <span className="text-5xl mb-4" aria-hidden="true">⚡</span>
              <h2 className="text-3xl font-bold text-gray-900">Power Infrastructure</h2>
            </div>
            
            <div className="space-y-6 text-lg text-gray-700 font-light leading-relaxed mb-10">
              <p>
                The primary source of power on Orange Island is <strong className="font-semibold text-gray-900">EKEDC</strong>, 
                providing approximately <strong className="font-semibold text-gray-900">20 hours</strong> of electricity supply daily.
              </p>
              <p>
                To complement this, we have integrated with an <strong className="font-semibold text-gray-900">Independent Power Producer (IPP)</strong> to 
                enhance our energy resilience and long-term sustainability. This integration closes the gap and ensures uninterrupted power supply.
              </p>
              <p>
                For any emergency situations or unexpected grid breakdowns, heavy-duty industrial backup generators are on standby for immediate service.
              </p>
            </div>

            {/* Solar Recommendation Block */}
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-xl p-6 mb-10">
              <div className="flex gap-4">
                <span className="text-2xl text-orange-600" aria-hidden="true">☀️</span>
                <div>
                  <h4 className="font-bold text-orange-950 text-lg mb-1">Solar Installation Advisory</h4>
                  <p className="text-orange-900 text-sm font-light leading-relaxed">
                    We strongly advise all residents to install solar connections in their homes as an additional and 
                    reliable alternative power source. Incorporating clean solar power supports our smart city initiatives 
                    and lowers utility costs.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                id="electricity-cta-contact"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3.5 rounded uppercase tracking-wider text-sm transition duration-300 shadow hover:shadow-md"
              >
                Inquire About Connections
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Note */}
      <section className="py-16 bg-gray-50 border-t border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm font-light">
            Electricity infrastructure is managed in partnership with Decentralized Energy Limited (DEL) and Koa (Mechanical and Electrical Consultants).
          </p>
        </div>
      </section>
    </div>
  );
}
