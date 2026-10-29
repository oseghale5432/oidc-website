import type { Metadata } from 'next';
import Link from 'next/link';
import PageTitle from '@/components/site/PageTitle';

export const metadata: Metadata = {
  title: 'Decentralized Energy Limited (DEL) - Orange Island',
  description: 'Learn about our partnership with Decentralized Energy Limited (DEL) to bring cleaner, more reliable, and affordable power solutions to Orange Island.',
};

export default function DelPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <PageTitle
        eyebrow="Strategic partnership"
        title="Orange Island & Decentralized Energy Limited (DEL)"
        crumbs={[{ label: 'Utilities & infrastructure', href: '/utilities' }, { label: 'DEL' }]}
      />

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-16 mb-12">
          
          <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-8">
            <p className="text-xl md:text-2xl font-medium text-gray-900 leading-snug">
              We are pleased to announce our partnership with Decentralized Energy Limited (DEL), a company committed to transforming how energy is delivered across Nigeria.
            </p>

            <p>
              At DEL, the belief is simple, Nigeria does not lack energy; the challenge lies in the infrastructure and execution needed to make it accessible. Through this partnership, DEL will bring cleaner, more reliable, and affordable power solutions to Orange Island, ensuring residents enjoy uninterrupted energy for everyday living.
            </p>

            <div className="pl-6 border-l-4 border-amber-500 py-2 my-10 bg-amber-50/50 rounded-r-lg">
              <p className="text-gray-800 italic font-medium">
                Driven by a mission to make consistent and sustainable power a reality across Nigeria and West Africa, DEL operates on strong principles that guide how every project is planned, built, and managed.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-8 mt-12 border-t border-gray-100">
              <Link
                href="/electricity"
                className="inline-flex justify-center items-center bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-3.5 rounded uppercase tracking-wider text-sm transition duration-300 shadow hover:shadow-md"
              >
                View Electricity Utilities
              </Link>
              <Link
                href="/contact"
                className="inline-flex justify-center items-center bg-orange-50 text-orange-700 hover:bg-orange-100 font-bold px-8 py-3.5 rounded uppercase tracking-wider text-sm transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
