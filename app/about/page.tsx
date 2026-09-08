import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About The Island - Orange Island Lagos',
  description: 'Learn about Orange Island, a premium waterfront development by Orange Island Development Company and the Lagos State Government.',
};

const allocations = [
  ['Residential', '95.90', '63.60%'],
  ['Road Reserve', '27.53', '18.25%'],
  ['Open Space / Green Areas', '17.33', '11.49%'],
  ['Mixed Use', '8.13', '5.39%'],
  ['Public / Institutional', '1.10', '0.74%'],
  ['Industrial', '0.80', '0.53%'],
];

export default function About() {
  const districts = [
    { title: 'The Marina', desc: 'Waterfront mooring, boat slips, and scenic dockside experiences.', icon: '⚓' },
    { title: 'Residential Enclaves', desc: 'Exclusive low-density plots and stylish waterfront homes.', icon: '🏡' },
    { title: 'The Promenade', desc: 'Pedestrian-friendly boardwalks with dining and leisure spots.', icon: '🌅' },
    { title: 'Boat Club', desc: 'Premium nautical club facilities and watersports training.', icon: '⛵' },
    { title: 'Central Park and Lake', desc: 'Expansive green parks, recreation zones, and serene lake views.', icon: '🌳' },
    { title: 'Commercial Spaces', desc: 'Modern office hubs, retail boutiques, and corporate facilities.', icon: '🏢' },
    { title: 'School', desc: 'World-class educational facilities and youth activity grounds.', icon: '🎓' },
    { title: 'Places of Worship', desc: 'Peaceful community spaces dedicated to spiritual life.', icon: '🕊️' },
  ];

  return (
    <div className="bg-white text-[#3e403f]">
      {/* ── HERO SECTION ── */}
      <section className="bg-[#f8f8f8] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1300px] gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="max-w-xl">
            <span className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#8f6048] block">Our Vision</span>
            <h1 className="text-[2.5rem] font-bold leading-[1.15] text-[#202124] sm:text-[3.4rem]">
              A master planned community and forward-thinking neighbourhood.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#606261]">
              Orange Island is poised to be a leading example of a stylish lifestyle with a strong sense of community, with security and safety central to its vision.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[12px] shadow-lg">
            <Image
              src="/images/Header_Image.png"
              alt="Orange Island waterfront community"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE SECTION ── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1140px] px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f6048] block mb-2">Who We Are</span>
              <h2 className="text-3xl font-bold text-[#202124] sm:text-[2.5rem] leading-tight">
                A Public Private Partnership in Lagos
              </h2>
            </div>
            <div className="space-y-5 text-[17px] leading-8 text-[#606261] lg:col-span-8">
              <p>
                A Public Private Partnership (PPP) between <strong className="font-semibold text-[#202124]">Orange Island Development Company</strong> and the <strong className="font-semibold text-[#202124]">Lagos State Government</strong>, Orange Island has been conceptualised, managed and delivered by teams of national and international reputation.
              </p>
              <p>
                The Lagos State Government’s aspiration is to transform Lagos into an organised smart city which makes use of resources and services both tactically and efficiently.
              </p>
              <p>
                Orange Island is poised to be a leading example of a stylish lifestyle with a strong sense of community, with security and safety central to its vision.
              </p>
            </div>
          </div>

          <div className="mt-16 grid overflow-hidden rounded-[12px] border border-[#dce0e5] md:grid-cols-3 bg-white shadow-sm">
            {[
              ['150 Hectares', 'Planned land area (excl. water)'],
              ['Public-Private', 'Lagos State Partnership (PPP)'],
              ['~1 Kilometre', 'From Lekki Phase 1 foreshore'],
            ].map(([value, label], index) => (
              <div key={label} className={`p-8 ${index > 0 ? 'border-t border-[#dce0e5] md:border-l md:border-t-0' : ''}`}>
                <p className="text-2xl font-extrabold text-[#202124]">{value}</p>
                <p className="mt-2 text-sm font-medium text-[#85878a]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MASTERPLAN & LAND USE TABLE ── */}
      <section className="bg-[#f8f8f8] py-20 sm:py-24 border-t border-[#eaeaea]">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f6048] block mb-2">Masterplan</span>
            <h2 className="text-3xl font-bold text-[#202124] sm:text-[2.5rem]">
              Conceived for Super Modern Living
            </h2>
            <p className="mt-5 leading-7 text-[#606261]">
              The project is conceived with the singular aim of creating a super modern up-market residential, mixed use and commercial use mega city on a reclaimed island in the gentle waters of the Lagos Lagoon abutting the Lekki Phase 1 foreshore.
            </p>
            <p className="mt-3 leading-7 text-[#606261]">
              The project, which accounts for 150 hectares of land exclusive of the water features, involves the dredging of sand from the bed of the Lagos Lagoon, the construction of an access land bridge and the creation of infrastructure to service the island.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
            <div className="relative min-h-[460px] overflow-hidden rounded-[12px] border border-[#dce0e5] bg-white shadow-sm">
              <Image
                src="/images/orange_map.jpg"
                alt="Orange Island Masterplan Map"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 65vw, 100vw"
              />
            </div>

            <div className="overflow-hidden rounded-[12px] border border-[#dce0e5] bg-white shadow-sm">
              <div className="bg-[#202124] px-6 py-4 text-white">
                <h3 className="text-lg font-bold">Land Use Allocation</h3>
                <p className="text-xs text-gray-300">Total 150 Hectares</p>
              </div>
              <div className="grid grid-cols-[1.5fr_0.7fr_0.7fr] border-b border-[#dce0e5] px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-[#85878a]">
                <span>Land Uses</span>
                <span className="text-right">Hectares</span>
                <span className="text-right">Share</span>
              </div>
              {allocations.map(([name, hectares, share]) => (
                <div key={name} className="grid grid-cols-[1.5fr_0.7fr_0.7fr] border-b border-[#f0f0f0] px-6 py-3.5 text-sm hover:bg-slate-50 transition">
                  <span className="font-semibold text-slate-800">{name}</span>
                  <span className="text-right text-[#606261]">{hectares}</span>
                  <span className="text-right font-medium text-amber-700">{share}</span>
                </div>
              ))}
              <div className="grid grid-cols-[1.5fr_0.7fr_0.7fr] bg-[#f8f5f2] px-6 py-4 text-sm font-bold text-[#202124]">
                <span>Total</span>
                <span className="text-right">150</span>
                <span className="text-right text-amber-800">100%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DISTRICTS SECTION ── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f6048] block mb-2">Island Layout</span>
            <h2 className="text-3xl font-bold text-[#202124] sm:text-[2.5rem]">Districts of Orange Island</h2>
            <p className="mt-3 text-lg text-[#606261] max-w-2xl mx-auto font-light">
              Thoughtfully divided into dedicated zones that blend leisure, privacy, commerce, and community life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {districts.map((dist) => (
              <div key={dist.title} className="p-7 rounded-2xl border border-gray-150 bg-white hover:shadow-lg transition duration-300 hover:border-amber-300 group">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition">
                  {dist.icon}
                </div>
                <h3 className="text-xl font-bold text-[#202124] mb-2">{dist.title}</h3>
                <p className="text-sm text-[#606261] leading-relaxed font-light">{dist.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION & CONNECTIVITY SECTION ── */}
      <section className="bg-[#f8f8f8] py-20 sm:py-24 border-t border-[#eaeaea]">
        <div className="mx-auto grid max-w-[1140px] gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:px-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f6048] block mb-2">Location & Access</span>
            <h2 className="text-3xl font-bold text-[#202124] sm:text-[2.5rem] leading-tight">
              Located Close to the Places That Matter
            </h2>
            <p className="mt-5 leading-7 text-[#606261]">
              Located about a kilometre from Lekki Phase 1 and next to the Lekki Foreshore reclamation project, Orange Island is easily accessible via Lekki-Ikoyi Link Bridge and Lekki-Epe Expressway through Freedom way.
            </p>
            <p className="mt-4 leading-7 text-[#606261]">
              It is minutes from the shopping and leisure destinations along Admiralty Way.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[12px] border border-[#dce0e5] bg-white shadow-md">
            <Image
              src="/images/orange_location-2048x1157.jpg"
              alt="Orange Island Location and Access Map"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-16 bg-white">
        <div className="mx-auto flex max-w-[1140px] flex-col gap-6 rounded-[16px] bg-[#202124] text-white px-8 py-12 lg:flex-row lg:items-center lg:justify-between shadow-xl">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Explore Life on Orange Island</h2>
            <p className="mt-2 text-slate-300">Speak with our team about the development and available plot opportunities.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 justify-center rounded-lg bg-amber-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-amber-700 transition"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
