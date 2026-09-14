import Image from 'next/image';
import Link from 'next/link';

type InfoSection = {
  title: string;
  description: string;
  points?: string[];
};

type UtilityPageProps = {
  name: string;
  eyebrow: string;
  headline: string;
  introduction: string;
  image: string;
  imageAlt: string;
  facts?: Array<[string, string]>;
  sections?: InfoSection[];
  noteTitle?: string;
  note?: string;
  ctaTitle?: string;
  ctaText?: string;
};

export default function UtilityPage({
  name,
  eyebrow,
  headline,
  introduction,
  image,
  imageAlt,
  facts = [],
  sections = [],
  noteTitle,
  note,
  ctaTitle = 'Need assistance with your utility connection?',
  ctaText = 'Our facilities management team is here to guide and coordinate your onboarding.'
}: UtilityPageProps) {
  return (
    <div className="bg-white text-[#3e403f]">
      <section className="bg-[#f8f8f8] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1300px] gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-semibold text-[#8f6048]">Orange Island · Utilities &amp; Services</p>
            <h1 className="text-[2.75rem] font-bold leading-[1.15] text-[#202124] sm:text-[3.6rem]">{name}</h1>
            <p className="mt-5 text-lg leading-8 text-[#606261]">{eyebrow}</p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[10px] bg-[#dce0e5]">
            <Image src={image} alt={imageAlt} fill priority className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" />
          </div>
        </div>
      </section>

      <main>
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-[1140px] px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#8f6048]">Information</p>
                <h2 className="mt-3 text-3xl font-bold text-[#202124] sm:text-[2.75rem]">{headline}</h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-[17px] leading-8 text-[#606261] whitespace-pre-line">{introduction}</p>
              </div>
            </div>

            {facts.length > 0 && (
              <div className={`mt-14 grid overflow-hidden rounded-[10px] border border-[#dce0e5] ${facts.length === 3 ? 'md:grid-cols-3' : facts.length === 2 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                {facts.map(([label, value], index) => (
                  <div key={label} className={`p-8 ${index > 0 ? 'border-t border-[#dce0e5] md:border-l md:border-t-0' : ''}`}>
                    <p className="text-sm text-[#85878a]">{label}</p>
                    <p className="mt-2 text-xl font-bold text-[#202124]">{value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {sections.length > 0 && (
          <section className="bg-[#f8f8f8] py-20 sm:py-24">
            <div className="mx-auto max-w-[1140px] px-6 lg:px-8">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#8f6048]">Service overview</p>
                <h2 className="mt-3 text-3xl font-bold text-[#202124] sm:text-[2.75rem]">Key details</h2>
              </div>
              <div className={`mt-10 grid gap-6 ${sections.length === 3 ? 'lg:grid-cols-3' : sections.length === 2 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                {sections.map((section, index) => (
                  <article key={section.title} className="rounded-[10px] border border-[#dce0e5] bg-white p-7">
                    <span className="text-sm font-bold text-[#8f6048]">0{index + 1}</span>
                    <h3 className="mt-5 text-xl font-bold text-[#202124]">{section.title}</h3>
                    <p className="mt-4 leading-7 text-[#606261]">{section.description}</p>
                    {section.points && (
                      <ul className="mt-5 space-y-3 border-t border-[#dce0e5] pt-5 text-sm leading-6 text-[#606261]">
                        {section.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8f6048]" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {note && (
          <section className="py-20 sm:py-24">
            <div className="mx-auto grid max-w-[1140px] gap-10 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:px-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#8f6048]">Guidelines &amp; Policy</p>
                <h2 className="mt-3 text-3xl font-bold text-[#202124]">{noteTitle || 'Important Notice'}</h2>
              </div>
              <div className="rounded-[10px] border border-[#dfcfc3] bg-[#f8f5f2] p-8">
                <p className="text-[17px] leading-8 text-[#3e403f]">{note}</p>
              </div>
            </div>
          </section>
        )}

        <section className="border-t border-[#dce0e5] py-16">
          <div className="mx-auto flex max-w-[1140px] flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-[#202124] sm:text-3xl">{ctaTitle}</h2>
              <p className="mt-2 text-[#606261]">{ctaText}</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 justify-center rounded-[5px] bg-[#202124] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3e403f]"
            >
              Contact facilities team
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
