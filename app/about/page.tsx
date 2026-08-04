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
  return (
    <div className="bg-white text-[#3e403f]">
      <section className="bg-[#f8f8f8] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1300px] gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-semibold text-[#8f6048]">About Orange Island</p>
            <h1 className="text-[2.75rem] font-bold leading-[1.15] text-[#202124] sm:text-[3.6rem]">Building a sustainable waterfront community.</h1>
            <p className="mt-6 text-lg leading-8 text-[#606261]">A planned urban development created to support secure living, modern infrastructure and responsible growth within Lagos.</p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[10px]">
            <Image src="/images/Header_Image.png" alt="Orange Island waterfront community" fill priority className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1140px] px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold text-[#8f6048]">Who we are</p>
              <h2 className="mt-3 text-3xl font-bold text-[#202124] sm:text-[2.75rem]">A shared vision for the future of Lagos.</h2>
            </div>
            <div className="space-y-5 text-[17px] leading-8 text-[#606261] lg:col-span-8">
              <p>Orange Island is a premium waterfront development delivered through a Public Private Partnership between <strong className="font-semibold text-[#202124]">Orange Island Development Company</strong> and the <strong className="font-semibold text-[#202124]">Lagos State Government</strong>.</p>
              <p>Designed by teams of national and international reputation, the island reflects Lagos State&apos;s vision of building an organised smart city that uses resources efficiently and sustainably.</p>
              <p>Residential, commercial and lifestyle spaces are supported by coordinated infrastructure, secure systems and a strong commitment to long-term community management.</p>
            </div>
          </div>
          <div className="mt-16 grid overflow-hidden rounded-[10px] border border-[#dce0e5] md:grid-cols-3">
            {[
              ['150 hectares', 'Planned development area'],
              ['Public-private', 'Lagos State partnership'],
              ['1 kilometre', 'From Lekki Phase 1'],
            ].map(([value, label], index) => (
              <div key={label} className={`p-8 ${index > 0 ? 'border-t border-[#dce0e5] md:border-l md:border-t-0' : ''}`}>
                <p className="text-2xl font-bold text-[#202124]">{value}</p>
                <p className="mt-2 text-sm text-[#85878a]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#202124] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-[1140px] gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[10px]">
            <Image src="/images/WhatsApp Image 2026-06-01 at 07.47.00.jpeg" alt="Orange Island waterfront lifestyle" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#c8aa96]">Our vision</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-[2.75rem]">Lagos&apos; leading smart waterfront community.</h2>
            <p className="mt-6 text-lg leading-8 text-[#c5c5c7]">Defined by innovation, security, sustainability and a vibrant sense of community.</p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {['Innovation', 'Security', 'Sustainability', 'Community'].map((item) => <span key={item} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#8f6048]" />{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold text-[#8f6048]">The masterplan</p>
            <h2 className="mt-3 text-3xl font-bold text-[#202124] sm:text-[2.75rem]">Planned for balanced urban living.</h2>
            <p className="mt-5 leading-7 text-[#606261]">The 150-hectare plan brings residential, commercial, public and green spaces together with the infrastructure needed to support the island.</p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="relative min-h-[520px] overflow-hidden rounded-[10px] border border-[#dce0e5] bg-[#f8f8f8]">
              <Image src="/images/orange_map.jpg" alt="Orange Island masterplan" fill className="object-cover" sizes="(min-width: 1024px) 68vw, 100vw" />
            </div>
            <div className="overflow-hidden rounded-[10px] border border-[#dce0e5]">
              <div className="bg-[#f8f8f8] px-5 py-4"><h3 className="text-base font-bold text-[#202124]">Land-use allocation</h3></div>
              <div className="grid grid-cols-[1.5fr_0.7fr_0.7fr] border-t border-[#dce0e5] px-5 py-3 text-[11px] font-semibold text-[#85878a]"><span>Land use</span><span className="text-right">Ha</span><span className="text-right">Share</span></div>
              {allocations.map(([name, hectares, share]) => (
                <div key={name} className="grid grid-cols-[1.5fr_0.7fr_0.7fr] border-t border-[#dce0e5] px-5 py-3.5 text-sm"><span className="font-medium">{name}</span><span className="text-right text-[#85878a]">{hectares}</span><span className="text-right">{share}</span></div>
              ))}
              <div className="grid grid-cols-[1.5fr_0.7fr_0.7fr] border-t border-[#c5c5c7] bg-[#f8f8f8] px-5 py-4 text-sm font-bold text-[#202124]"><span>Total</span><span className="text-right">150</span><span className="text-right">100%</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f8] py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1140px] gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-16 lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#8f6048]">Location and connectivity</p>
            <h2 className="mt-3 text-3xl font-bold text-[#202124] sm:text-[2.75rem]">Close to the places that matter.</h2>
            <p className="mt-5 leading-7 text-[#606261]">Orange Island is approximately one kilometre from Lekki Phase 1, with access through Freedom Way and onward connections to the Lekki-Ikoyi Link Bridge and Lekki-Epe Expressway.</p>
            <p className="mt-4 leading-7 text-[#606261]">Shopping, dining and leisure destinations along Admiralty Way remain within easy reach.</p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[10px] border border-[#dce0e5] bg-white">
            <Image src="/images/orange_location-2048x1157.jpg" alt="Orange Island location map" fill className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto flex max-w-[1140px] flex-col gap-6 rounded-[10px] bg-[#f8f5f2] px-8 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div><h2 className="text-2xl font-bold text-[#202124] sm:text-3xl">Explore life on Orange Island.</h2><p className="mt-2 text-[#606261]">Speak with our team about the development and available opportunities.</p></div>
          <Link href="/contact" className="inline-flex shrink-0 justify-center rounded-[5px] bg-[#202124] px-6 py-3 text-sm font-semibold text-white hover:bg-[#3e403f]">Contact our team</Link>
        </div>
      </section>
    </div>
  );
}
