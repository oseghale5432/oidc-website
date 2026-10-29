import Image from 'next/image';
import Link from 'next/link';
import PageTitle from '@/components/site/PageTitle';

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
    <div className="bg-[#FBF8F3] text-[#3A4650]">
      <PageTitle title={name} crumbs={[{ label: 'Utilities & infrastructure', href: '/utilities' }, { label: name }]} intro={eyebrow} />

      <main>
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-[1140px] px-6 lg:px-8">
            <div className="relative mb-14 aspect-[16/6] overflow-hidden bg-[#E6ECEF]">
              <Image src={image} alt={imageAlt} fill priority className="object-cover" sizes="(min-width: 1140px) 1140px, 100vw" />
            </div>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#A9481A]">Information</p>
                <h2 className="mt-3 text-3xl font-bold text-[#1B2228] sm:text-[2.75rem]">{headline}</h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-[17px] leading-8 text-[#3A4650] whitespace-pre-line">{introduction}</p>
              </div>
            </div>

            {facts.length > 0 && (
              <div className={`mt-14 grid overflow-hidden border border-[#E5DED3] ${facts.length === 3 ? 'md:grid-cols-3' : facts.length === 2 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                {facts.map(([label, value], index) => (
                  <div key={label} className={`p-8 ${index > 0 ? 'border-t border-[#E5DED3] md:border-l md:border-t-0' : ''}`}>
                    <p className="text-sm text-[#85878a]">{label}</p>
                    <p className="mt-2 text-xl font-bold text-[#1B2228]">{value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {sections.length > 0 && (
          <section className="bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-[1140px] px-6 lg:px-8">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#A9481A]">Service overview</p>
                <h2 className="mt-3 text-3xl font-bold text-[#1B2228] sm:text-[2.75rem]">Key details</h2>
              </div>
              <div className={`mt-10 grid gap-6 ${sections.length === 3 ? 'lg:grid-cols-3' : sections.length === 2 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                {sections.map((section, index) => (
                  <article key={section.title} className="border border-[#E5DED3] bg-white p-7">
                    <span className="text-sm font-bold text-[#A9481A]">0{index + 1}</span>
                    <h3 className="mt-5 text-xl font-bold text-[#1B2228]">{section.title}</h3>
                    <p className="mt-4 leading-7 text-[#3A4650]">{section.description}</p>
                    {section.points && (
                      <ul className="mt-5 space-y-3 border-t border-[#E5DED3] pt-5 text-sm leading-6 text-[#3A4650]">
                        {section.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A9481A]" />
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
                <p className="text-sm font-semibold uppercase tracking-wider text-[#A9481A]">Guidelines &amp; Policy</p>
                <h2 className="mt-3 text-3xl font-bold text-[#1B2228]">{noteTitle || 'Important Notice'}</h2>
              </div>
              <div className="border border-[#F1D2B4] bg-[#FFF6EE] p-8">
                <p className="text-[17px] leading-8 text-[#3e403f]">{note}</p>
              </div>
            </div>
          </section>
        )}

        <section className="border-t border-[#E5DED3] py-16">
          <div className="mx-auto flex max-w-[1140px] flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-[#1B2228] sm:text-3xl">{ctaTitle}</h2>
              <p className="mt-2 text-[#3A4650]">{ctaText}</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 justify-center bg-[#0E2838] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1E4256]"
            >
              Contact facilities team
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
