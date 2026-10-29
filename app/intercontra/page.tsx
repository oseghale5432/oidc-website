import type { Metadata } from 'next';
import Link from 'next/link';
import PageTitle from '@/components/site/PageTitle';

export const metadata: Metadata = {
  title: 'Inter Contra - Orange Island',
  description: 'Learn about our partnership with Inter Contra to bring reliable network infrastructure, telecommunications towers, and wireless connectivity to Orange Island.',
};

export default function InterContraPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <PageTitle
        eyebrow="Strategic partnership"
        title="Orange Island & Inter Contra"
        crumbs={[{ label: 'Utilities & infrastructure', href: '/utilities' }, { label: 'Inter Contra' }]}
      />

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-16 mb-12">
          
          <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-8">
            <p className="text-xl md:text-2xl font-medium text-gray-900 leading-snug">
              We are excited to announce our partnership with Inter Contra, a leading telecommunications infrastructure and solutions provider known for innovation, excellence, and strong industry expertise.
            </p>

            <p>
              Through this partnership, Inter Contra will be bringing reliable network infrastructure to Orange Island, including telecommunications towers, wireless connectivity, and engineering support. This means residents can look forward to better network coverage, faster internet, and more dependable communication services for everyday living.
            </p>

            <div className="pl-6 border-l-4 border-amber-500 py-2 my-10 bg-amber-50/50 rounded-r-lg">
              <p className="text-gray-800 italic font-medium">
                Inter Contra will also support the estate with telecommunications engineering and infrastructure services, helping to build a strong and future-ready network across the community.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-8 mt-12 border-t border-gray-100">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-3.5 rounded uppercase tracking-wider text-sm transition duration-300 shadow hover:shadow-md"
              >
                Inquire About Connections
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
