import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About The Island - Orange Island Lagos',
  description: 'Orange Island is a premium waterfront development delivered through a Public Private Partnership between Orange Island Development Company and the Lagos State Government.',
};

export default function About() {
  const landAllocations = [
    { name: 'Residential', percentage: '63.6%', color: 'bg-orange-500' },
    { name: 'Road Reserve', percentage: '18.25%', color: 'bg-gray-600' },
    { name: 'Open Space / Greenery', percentage: '11.49%', color: 'bg-emerald-600' },
    { name: 'Mixed Use', percentage: '5.39%', color: 'bg-amber-600' },
    { name: 'Public Use / Institutional', percentage: '0.74%', color: 'bg-blue-600' },
    { name: 'Industrial', percentage: '0.53%', color: 'bg-red-600' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Header_Image.png"
            alt="Orange Island Lagos"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <span className="text-orange-400 font-bold uppercase tracking-widest text-sm block mb-3">
            Orange Island Lagos
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight max-w-3xl leading-tight">
            About the <span className="text-orange-500">Island</span>
          </h1>
          <div className="w-20 h-1 bg-orange-500 rounded"></div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-xs font-bold tracking-widest text-orange-600 uppercase mb-3">Waterfront Development</h2>
              <h3 className="text-4xl font-bold mb-8 text-gray-900 leading-tight">Overview</h3>
              <div className="space-y-6 text-lg text-gray-700 font-light leading-relaxed">
                <p>
                  Orange Island is a premium waterfront development delivered through a Public Private Partnership 
                  between <strong className="font-semibold text-gray-900">Orange Island Development Company</strong> and the <strong className="font-semibold text-gray-900">Lagos State Government</strong>. 
                  Designed by teams of national and international reputation, the island reflects Lagos State’s vision of 
                  building an organised smart city that uses resources efficiently and sustainably.
                </p>
                <p>
                  Blending modern infrastructure with elegant design, Orange Island offers a secure, well-planned environment 
                  where residential, commercial, and lifestyle spaces thrive together. With safety, smart systems, and strong 
                  community values at its core, Orange Island sets a new standard for contemporary urban living in Lagos.
                </p>
              </div>
            </div>
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/orange-island-2048x1157.jpg"
                alt="Orange Island Landscape"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Banner */}
      <section className="relative py-28 text-white overflow-hidden bg-gray-900">
        <div className="absolute inset-0 opacity-40 z-0">
          <Image
            src="/images/WhatsApp Image 2026-06-01 at 07.47.00.jpeg"
            alt="Lakeside Living Background"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/90 to-transparent z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h2 className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-4">Our Vision</h2>
          <p className="text-3xl md:text-5xl font-light max-w-4xl leading-tight font-sans tracking-wide">
            "To be Lagos’ leading <span className="text-orange-500 font-medium">smart waterfront community</span>, defined by innovation, security, sustainability and a vibrant sense of community."
          </p>
        </div>
      </section>

      {/* Masterplan Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-xs font-bold tracking-widest text-orange-600 uppercase mb-3">Mega City Layout</h2>
              <h3 className="text-4xl font-bold mb-8 text-gray-900 leading-tight">The Masterplan</h3>
              <p className="text-lg text-gray-700 font-light leading-relaxed mb-8">
                The project is conceived with the singular aim of creating a super modern up-market residential, 
                mixed use and commercial use mega city on a reclaimed island in the gentle waters of the Lagos Lagoon 
                abutting the Lekki Phase 1 foreshore. The project, which accounts for 150 hectares of land exclusive of the 
                water features, involves the dredging of sand from the bed of the Lagos Lagoon, the construction of an 
                access land bridge and the creation of infrastructure to service the island.
              </p>

              {/* Land Use Allocation */}
              <h4 className="font-bold text-gray-950 text-xl mb-6">Land Use Allocations</h4>
              <div className="grid sm:grid-cols-2 gap-6">
                {landAllocations.map((alloc, idx) => (
                  <div key={idx} className="bg-white p-5 border border-gray-150 rounded-xl shadow-sm hover:shadow transition">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-800 text-sm">{alloc.name}</span>
                      <span className="text-orange-600 font-bold text-base">{alloc.percentage}</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                      <div className={`h-full ${alloc.color}`} style={{ width: alloc.percentage }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src="/images/orange_map.jpg"
                  alt="Orange Island Masterplan Map"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="bg-orange-500 rounded-2xl p-8 text-white shadow-lg">
                <h4 className="text-xl font-bold mb-3">150 Hectares</h4>
                <p className="text-orange-50 font-light leading-relaxed text-sm">
                  Exclusive layout designed for absolute lifestyle compatibility, blending commercial, public use, institutional and residential zoning harmoniously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[440px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 lg:order-2">
              <Image
                src="/images/orange_location-2048x1157.jpg"
                alt="Lekki Phase 1 Location Map"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="lg:order-1">
              <h2 className="text-xs font-bold tracking-widest text-orange-600 uppercase mb-3">Prime Position</h2>
              <h3 className="text-4xl font-bold mb-8 text-gray-900 leading-tight">Location & Connectivity</h3>
              <p className="text-lg text-gray-700 font-light leading-relaxed mb-6">
                Orange Island is perfectly positioned just a kilometre from Lekki Phase 1, adjacent to the Lekki Foreshore Reclamation project. 
                With seamless access via the Lekki-Ikoyi Link Bridge and Lekki-Epe Expressway through Freedom Way, connectivity is effortless.
              </p>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                Residents are only minutes away from the vibrant shopping, dining, and leisure experiences along Admiralty Way placing the very best of Lekki within easy reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Become Part of the Vision</h2>
          <p className="text-xl text-orange-50 mb-10 font-light leading-relaxed">
            Discover investment opportunities and find premium plots styled for your lifestyle needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              id="about-cta-contact-us"
              className="inline-block bg-white text-orange-950 px-8 py-4 rounded font-bold uppercase tracking-wider text-sm transition hover:bg-orange-50 shadow"
            >
              Get in Touch
            </Link>
            <Link
              href="/properties-investment"
              id="about-cta-guidelines"
              className="inline-block border border-white/80 hover:bg-white/10 text-white px-8 py-4 rounded font-bold uppercase tracking-wider text-sm transition"
            >
              Building Guidelines
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
