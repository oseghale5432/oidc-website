import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import OfficeStatus from '@/components/OfficeStatus';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Contact Us - Orange Island Lagos',
  description: 'Get in touch with Orange Island Development Company. Reach out anytime with questions or inquiries.',
};

export default function ContactPage() {
  const faqItems = [
    {
      q: 'How can I schedule a site visit?',
      a: 'To schedule a physical tour of Orange Island, inspect plot availability, or meet with our project team, please submit a request through our contact form or call us directly. All visits are coordinated in advance with security gate clearance.',
    },
    {
      q: 'What utilities are operational on Orange Island?',
      a: 'Orange Island features integrated utilities including a central potable water treatment plant, underground power infrastructure connected to EKEDC with dedicated IPP backup, centralized vacuum sewerage, and scheduled waste management.',
    },
    {
      q: 'How is security managed for residents and visitors?',
      a: 'The community operates 24/7 security with perimeter protection, controlled access gatehouses, surveillance cameras, and digital visitor pre-clearance via the resident Venco App.',
    },
    {
      q: 'Who is developing Orange Island?',
      a: 'Orange Island is a premier public-private partnership (PPP) development between the Orange Island Development Company (OIDC) and the Lagos State Government, creating an elevated waterfront city foreshore Lekki Phase 1.',
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* ── 1. EACML-STYLE DARK HERO BANNER ── */}
      <section className="bg-[#121722] text-white pt-24 pb-28 sm:pt-28 sm:pb-36 lg:pt-32 lg:pb-40 relative overflow-hidden">
        {/* Subtle ambient grid / lighting pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              We&apos;re here to help. Reach out to us anytime—whether you have a question, need assistance, or just want to connect.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. MAIN SECTION: FORM + NEED ASSISTANCE CARD ── */}
      <section className="-mt-16 sm:-mt-20 lg:-mt-24 pb-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Form column (Left) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Need Assistance Info (Right) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-gray-200/90 shadow-xl p-6 sm:p-10 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-4">
                    <OfficeStatus />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                    Need Assistance? Get In Touch
                  </h2>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-light">
                    The Orange Island support team is available to attend to your requests from Monday through Friday, from <strong className="font-semibold text-gray-900">8:00 AM to 5:00 PM (WAT)</strong>. Please note that we are closed on weekends and public holidays.
                  </p>

                  <a
                    href="#faq"
                    className="inline-flex items-center gap-2 bg-[#17202a] hover:bg-black text-white text-sm font-semibold px-6 py-3 rounded-lg transition duration-200 shadow-sm"
                  >
                    <span>Frequently Asked Questions</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 flex items-start gap-3.5 text-gray-500 text-xs font-light">
                  <ShieldCheckIcon className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <span>
                    Your personal information is confidential and handled securely under strict data privacy regulations.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. 3-COLUMN CONTACT INFO CARDS (EACML STYLE) ── */}
      <section className="py-16 sm:py-20 bg-[#f8f9fa] border-t border-gray-200/70">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Office Address Card */}
            <div className="bg-white border border-gray-200/90 rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-6">
                <MapPinIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Office Address</h3>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                Nigeria office:
              </p>
              <address className="not-italic text-sm text-gray-600 leading-relaxed font-light">
                Orange Island Development Company<br />
                On Oba Ademola Elegushi Boulevard,<br />
                Lagoon District, Freedom Way, Lekki Phase 1,<br />
                Lagos State, Nigeria.
              </address>
            </div>

            {/* Email Us Card */}
            <div className="bg-white border border-gray-200/90 rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-6">
                <EnvelopeIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email us</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-light mb-4">
                Have a question or need assistance? Our team is just an email away.
              </p>
              <a
                href="mailto:hello@orangeislandng.com"
                className="text-[#d9531e] hover:text-[#b83e10] hover:underline font-semibold text-sm transition break-all"
              >
                hello@orangeislandng.com
              </a>
            </div>

            {/* Call Us Card */}
            <div className="bg-white border border-gray-200/90 rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-6">
                <PhoneIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Call us</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-light mb-4">
                For immediate assistance or urgent inquiries, reach us by phone during office hours.
              </p>
              <a
                href="tel:+2348132992279"
                className="text-[#d9531e] hover:text-[#b83e10] hover:underline font-semibold text-sm transition"
              >
                (+234) 0813 299 2279
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. FAQ SECTION ── */}
      <section id="faq" className="py-20 bg-white border-t border-gray-150 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2 font-light">
              Quick answers to common questions about Orange Island
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, idx) => (
              <details
                key={idx}
                className="group bg-[#fafafa] rounded-xl border border-gray-200/80 p-5 transition-colors duration-200 open:bg-white open:shadow-sm"
              >
                <summary className="flex justify-between items-center text-base font-semibold text-gray-900 cursor-pointer list-none select-none hover:text-orange-600">
                  <span className="pr-4">{item.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform duration-200 shrink-0">
                    <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-3.5 text-gray-600 leading-relaxed font-light text-sm sm:text-base border-t border-gray-150 pt-3">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FULL-WIDTH MAP SECTION (EACML STYLE) ── */}
      <section className="pt-0 bg-white">
        <div className="w-full">
          <iframe
            title="Orange Island Location Map"
            className="w-full h-80 sm:h-96 lg:h-[420px] grayscale hover:grayscale-0 transition-all duration-700 block border-0"
            src="https://maps.google.com/maps?q=Orange+Island+Freedom+Way+Lekki+Phase+1+Lagos&t=&z=14&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            allowFullScreen
            aria-hidden="false"
          />
        </div>
      </section>
    </div>
  );
}
