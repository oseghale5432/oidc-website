import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Properties & Investments - Orange Island Lagos',
  description: 'Explore land for sale, zoning plans, residential investment, and commercial potential on Orange Island Lagos.',
};

export default function PropertiesPage() {
  const zoningRows = [
    { use: 'Residential', hectares: '95.90', percentage: '63.6%' },
    { use: 'Road Reserve', hectares: '27.53', percentage: '18.25%' },
    { use: 'Open-Space / Green Areas', hectares: '17.33', percentage: '11.49%' },
    { use: 'Mixed Use', hectares: '8.13', percentage: '5.39%' },
    { use: 'Public / Institutional', hectares: '1.10', percentage: '0.74%' },
    { use: 'Industrial', hectares: '0.80', percentage: '0.53%' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/EE257D20-950E-4769-A9BC-A34A843C676C.jpeg"
            alt="Orange Island Reclamation"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <span className="text-orange-400 font-bold uppercase tracking-widest text-sm block mb-3">
            Building Guidelines
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Properties & Investments
          </h1>
          <div className="w-16 h-1 bg-orange-500 rounded"></div>
        </div>
      </section>

      {/* Land For Sale */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-xs font-bold tracking-widest text-orange-600 uppercase mb-3">Real Estate Opportunity</h2>
              <h3 className="text-4xl font-bold mb-8 text-gray-900 leading-tight">Land for Sale</h3>
              <div className="space-y-6 text-lg text-gray-700 font-light leading-relaxed">
                <p>
                  Orange Island is a highly sought-after real estate destination in Lekki Phase 1, Lagos, offering 
                  premium land parcels that appeal to both investors and homeowners. This master-planned waterfront 
                  community features serviced plots available for purchase in various phases of the development. 
                  Listings show a range of land types, from standard residential plots to larger mixed-use or waterfront 
                  parcels, with prices reflecting the premium location and infrastructure that’s already in place.
                </p>
                <p>
                  Whether you are looking to build a luxury villa, develop multiple units, or hold land for capital 
                  appreciation, Orange Island’s land market currently presents options that cater to different 
                  investment strategies.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 bg-gray-50 border border-gray-150 rounded-2xl p-8 hover:shadow transition-shadow">
              <h4 className="font-bold text-gray-950 text-xl mb-4">Investment Assistance</h4>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                Our sales and facilities team provides detailed land briefs, pricing models, payment structures, and guides you through building plan approvals.
              </p>
              <Link
                href="/contact"
                id="properties-cta-inquire"
                className="block text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 px-6 rounded uppercase tracking-wider text-xs transition duration-300 shadow hover:shadow-md"
              >
                Inquire About Plots
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Plot Sizes and Zoning */}
      <section className="py-24 bg-gray-50 border-t border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-xs font-bold tracking-widest text-orange-600 uppercase mb-3">Structured Allocation</h2>
              <h3 className="text-4xl font-bold mb-8 text-gray-900 leading-tight">Plot Sizes & Zoning</h3>
              <div className="space-y-6 text-base text-gray-700 font-light leading-relaxed">
                <p>
                  Designed as a fully integrated, high-end residential and mixed-use destination, the island sits on reclaimed land 
                  within the serene waters of the Lagos Lagoon, directly bordering Lekki Phase 1 shoreline. Covering 150 hectares 
                  (excluding water features), the development was reclaimed via large-scale sand dredging and protected by modern shore armor.
                </p>
                <p>
                  The development&apos;s masterplan allocates land for residential, commercial, mixed-use, and community amenities to ensure 
                  that each zone supports the overall growth and livability of the island. This structured zoning helps create balanced 
                  neighbourhoods where homes, businesses, and shared spaces coexist seamlessly.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 bg-orange-600 text-white font-bold text-lg">
                  Masterplan Allocation Table
                </div>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-gray-700 text-xs uppercase tracking-wider font-semibold">
                      <th className="px-6 py-4">Land Use</th>
                      <th className="px-6 py-4 text-right">Hectares</th>
                      <th className="px-6 py-4 text-right">Allocation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-150 text-sm text-gray-700 font-light">
                    {zoningRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 font-semibold text-gray-800">{row.use}</td>
                        <td className="px-6 py-4 text-right">{row.hectares}</td>
                        <td className="px-6 py-4 text-right text-orange-600 font-semibold">{row.percentage}</td>
                      </tr>
                    ))}
                    <tr className="bg-orange-50 font-bold text-gray-950 border-t-2 border-orange-200">
                      <td className="px-6 py-4">Total</td>
                      <td className="px-6 py-4 text-right">150.00</td>
                      <td className="px-6 py-4 text-right">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential vs Commercial */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white border border-gray-150 rounded-2xl p-8 shadow-sm hover:border-orange-500 hover:shadow transition duration-300">
              <span className="text-3xl mb-4 block" aria-hidden="true">🏡</span>
              <h4 className="font-bold text-gray-950 text-2xl mb-4">Residential Investment</h4>
              <p className="text-gray-600 font-light leading-relaxed">
                Orange Island’s residential plots are designed for high-end living in a tranquil lagoon setting. 
                With infrastructure such as internal road networks, central utilities, and access to nearby urban centres like 
                Ikoyi and Victoria Island, buyers can build luxury homes, gated communities, or boutique estates that appeal to 
                affluent homeowners. Proximity to established hubs and planned amenities enhances the appeal and potential resale 
                value of residential real estate on the island.
              </p>
            </div>
            <div className="bg-white border border-gray-150 rounded-2xl p-8 shadow-sm hover:border-orange-500 hover:shadow transition duration-300">
              <span className="text-3xl mb-4 block" aria-hidden="true">🏢</span>
              <h4 className="font-bold text-gray-950 text-2xl mb-4">Commercial Potential</h4>
              <p className="text-gray-600 font-light leading-relaxed">
                Commercial zones are designed to support corporate offices, boutique hotels, premium retail centers, 
                and recreational facilities. The structured layout ensures commercial activities are easily accessible to 
                residents, preserving the tranquillity of residential zones while unlocking immense commercial potential. 
                Our strategic placement ensures high visibility for business enterprises while keeping the lifestyle serene.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-24 bg-gray-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-orange-600 opacity-[0.03] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-3">Value Proposition</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Why Invest in Orange Island?</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
              <h4 className="font-bold text-lg text-orange-400 mb-3">Lagoon-Front Location</h4>
              <p className="text-gray-300 font-light text-sm leading-relaxed">
                Prime lagoon-front property with robust road and bridge connections to Lagos&apos;s main business and commercial districts.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
              <h4 className="font-bold text-lg text-orange-400 mb-3">Master-Planned Design</h4>
              <p className="text-gray-300 font-light text-sm leading-relaxed">
                Smart zoning rules that balance commercial growth, community structures, green zones, and residential peace.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
              <h4 className="font-bold text-lg text-orange-400 mb-3">Ready Infrastructure</h4>
              <p className="text-gray-300 font-light text-sm leading-relaxed">
                Reclaimed and serviced land parcels provided with internal asphalt roads, streetlights, and centralized utility connections.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
              <h4 className="font-bold text-lg text-orange-400 mb-3">Appreciation Outlook</h4>
              <p className="text-gray-300 font-light text-sm leading-relaxed">
                Limited supply of exclusive waterfront land parcels in Lekki Phase 1 shoreline drives strong capital appreciation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Invest in the Future of Lekki</h2>
          <p className="text-lg text-orange-50 mb-10 font-light leading-relaxed">
            Get in touch with our team to obtain building permit guidelines or to purchase land plots.
          </p>
          <Link
            href="/contact"
            id="properties-cta-get-started"
            className="inline-block bg-white text-orange-950 px-8 py-4 rounded font-bold uppercase tracking-wider text-sm transition hover:bg-orange-50 shadow"
          >
            Contact Sales Team
          </Link>
        </div>
      </section>
    </div>
  );
}
