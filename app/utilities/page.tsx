import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Utilities & Services - Orange Island Lagos',
  description: 'Explore the centralized utilities on Orange Island Lagos: 24/7 potable water, reliable electricity, vacuum sewage management, and scheduled waste collection.',
};

const utilities = [
  {
    id: 'water',
    title: 'Water',
    badge: '24/7 Potable Supply',
    href: '/water',
    image: '/images/water.jpeg',
    imageAlt: 'Central water treatment plant on Orange Island',
    description:
      'The water supply system on Orange Island features a central water treatment plant capable of delivering clean, potable water to all residents 24 hours a day, 7 days a week. All residents are required to connect directly to our central system. Please note that private boreholes are not permitted on the island.',
    keyPoints: [
      'Central water treatment plant delivering 24/7 potable water',
      'Mandatory direct connection to central system',
      'Private boreholes strictly prohibited',
    ],
  },
  {
    id: 'electricity',
    title: 'Electricity',
    badge: 'EKEDC · IPP · Backup',
    href: '/electricity',
    image: '/images/electricity.jpg',
    imageAlt: 'Electricity infrastructure on Orange Island',
    description:
      'The primary source of power on Orange Island is EKEDC, providing approximately 20 hours of electricity supply daily. To complement this, we have integrated with an Independent Power Producer (IPP) to enhance our energy resilience and long-term sustainability. Backup generators are also on standby for emergency situations. We strongly advise all residents to install solar connections in their homes as an additional and reliable alternative power source.',
    keyPoints: [
      'EKEDC grid providing ~20 hours daily',
      'Independent Power Producer (IPP) integration',
      'Emergency standby generators and resident solar advisory',
    ],
  },
  {
    id: 'sewage-management',
    title: 'Sewage Management',
    badge: 'Centralised Vacuum System',
    href: '/sewage-management',
    image: '/images/sewage.jpg',
    imageAlt: 'Sewage management infrastructure on Orange Island',
    description:
      "Our sewage management system features a state-of-the-art centralised vacuum system, designed to efficiently handle all wastewater across the island. We are currently facilitating connections from residents' internal sewage systems to the central vacuum network. Please reach out to our facilities team to coordinate your connection.",
    keyPoints: [
      'State-of-the-art centralised vacuum system',
      'Efficient island-wide wastewater transport',
      'Active facilitation of resident internal connections',
    ],
  },
  {
    id: 'waste-collection',
    title: 'Waste Collection',
    badge: 'Weekly Thursday Service',
    href: '/waste-collection',
    image: '/images/waste.jpg',
    imageAlt: 'Waste collection service on Orange Island',
    description:
      'Waste collection takes place every Thursday. Residents are required to ensure their waste bins are placed at a central, easily accessible point for pickup. For building waste, construction debris, or other industrial waste, please contact our facilities team directly to arrange a dedicated collection.',
    keyPoints: [
      'Scheduled weekly pickup every Thursday',
      'Central and accessible bin placement required',
      'Dedicated arrangement for building & industrial waste',
    ],
  },
];

export default function UtilitiesPage() {
  return (
    <div className="bg-white text-[#3e403f]">
      {/* ── Header Banner ── */}
      <section className="bg-[#f8f8f8] py-16 sm:py-20 border-b border-[#e5e7eb]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f6048]">
            Orange Island Infrastructure
          </p>
          <h1 className="mt-3 text-[2.75rem] font-bold leading-tight text-[#202124] sm:text-[3.5rem]">
            Island Utilities
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#606261]">
            Orange Island provides coordinated, modern utilities built to the highest standards. Residents enjoy clean water, reliable power, an advanced vacuum sewage network, and structured waste collection.
          </p>
        </div>
      </section>

      {/* ── Utilities Grid ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="grid gap-12 lg:gap-16">
            {utilities.map((item, index) => (
              <article
                key={item.id}
                id={`utility-${item.id}`}
                className="grid gap-8 overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md md:p-10 lg:grid-cols-12 lg:items-center lg:gap-12"
              >
                {/* Visual */}
                <div
                  className={`relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 lg:col-span-5 ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-black/60 px-3 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm">
                    {item.badge}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col justify-between lg:col-span-7 ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8f6048]">
                      0{index + 1} · Utility Service
                    </span>
                    <h2 className="mt-2 text-2xl font-bold text-[#202124] sm:text-3xl">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-[16px] leading-7 text-[#4b5563]">
                      {item.description}
                    </p>

                    <ul className="mt-6 space-y-2.5 border-t border-[#f3f4f6] pt-5 text-sm text-[#4b5563]">
                      {item.keyPoints.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8f6048]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#8f6048] hover:text-[#724a35] transition"
                    >
                      View full {item.title.toLowerCase()} guidelines
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Facilities Support CTA ── */}
      <section className="bg-[#17202a] text-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffbe55]">
                Facilities Management
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Ready to coordinate your connections?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                Our facilities management team is on hand to guide homeowners, builders, and residents through water, electricity, sewage, and dedicated waste pickups.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Contact Facilities Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
