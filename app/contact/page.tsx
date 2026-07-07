import type { Metadata } from 'next';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import OfficeStatus from '@/components/OfficeStatus';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Contact Us - Orange Island Lagos',
  description: 'Get in touch with the Orange Island Lagos team to learn more about properties, infrastructure, and lakeside living.',
};

export default function ContactPage() {
  const faqItems = [
    {
      q: 'How can I schedule a site visit?',
      a: 'To schedule a physical tour of the island, check plot availability, or meet with our project team, please submit a request through our contact form or call us directly. All visits must be scheduled in advance to coordinate security gate access.'
    },
    {
      q: 'What utilities are fully operational on Orange Island?',
      a: 'Orange Island features state-of-the-art smart utilities including a decentralized clean water filtration system, hybrid underground electricity grid managed by Decentralized Energy Limited (DEL), and centralized waste and sewage management systems.'
    },
    {
      q: 'How is security managed for residents and visitors?',
      a: 'Security is our highest priority. The island features controlled access gates, 24/7 security patrols, CCTV surveillance integrated with the Venco App for visitor pre-clearance, and emergency support services.'
    },
    {
      q: 'Who is developing Orange Island?',
      a: 'Orange Island is a premium public-private partnership (PPP) development between the Orange Island Development Company (OIDC) and the Lagos State Government, aiming to create a sustainable, world-class smart city foreshore Lekki Phase 1.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Immersive Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Header_Image.png"
            alt="Orange Island Lagos"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center w-full mt-12">
          <span className="text-orange-500 uppercase tracking-widest text-xs font-bold mb-3 block">Connect with OIDC</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Contact Us
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded mx-auto mb-6"></div>
          <p className="text-lg text-gray-200 max-w-xl mx-auto font-light leading-relaxed">
            Reach out to discover lakeside luxury living, premium plot investments, and modern sustainable infrastructure.
          </p>
        </div>
      </section>

      {/* Main Split Contact Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-slate-900 text-white relative">
        {/* Subtle decorative glow */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-amber-600/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Left Column: Premium Contact Details Card & Map */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8 h-full">
              
              {/* Main Info Box */}
              <div className="bg-slate-950/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <h3 className="text-2xl font-bold tracking-tight text-white">Office &amp; Enquiries</h3>
                    <OfficeStatus />
                  </div>

                  <div className="space-y-8">
                    {/* Email item */}
                    <div className="group flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-500 transition-all duration-300 shrink-0">
                        <EnvelopeIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Email Address</span>
                        <a href="mailto:hello@orangeislandng.com" className="text-white hover:text-orange-400 text-base md:text-lg font-light transition break-all">
                          hello@orangeislandng.com
                        </a>
                      </div>
                    </div>

                    {/* Phone item */}
                    <div className="group flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-500 transition-all duration-300 shrink-0">
                        <PhoneIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Phone Number</span>
                        <a href="tel:+2348132992279" className="text-white hover:text-orange-400 text-base md:text-lg font-light transition">
                          +234 813 299 2279
                        </a>
                        <p className="text-slate-500 text-xs mt-1">Available Mon-Fri, 9am - 5pm WAT</p>
                      </div>
                    </div>

                    {/* Location item */}
                    <div className="group flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-500 transition-all duration-300 shrink-0">
                        <MapPinIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Administrative Office</span>
                        <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
                          Orange Island Development Company<br />
                          On Oba Ademola Elegushi Boulevard,<br />
                          Lagoon District, Freedom Way, Lekki Phase 1,<br />
                          Lagos, Nigeria.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-850 flex items-center gap-3 text-slate-400 text-xs font-light">
                  <ShieldCheckIcon className="w-5 h-5 text-orange-500 shrink-0" />
                  <span>Your requests are handled securely under strict data protection protocols.</span>
                </div>
              </div>

              {/* Styled Interactive Location Map Card */}
              <div className="bg-slate-950/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 shadow-2xl flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">Lekki Phase 1 Foreshore Location</h4>
                  <a 
                    href="https://maps.google.com/?q=Orange+Island+Development+Company+Lekki" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-orange-400 hover:text-orange-300 font-semibold transition flex items-center gap-1"
                  >
                    <span>Google Maps</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </div>
                
                <div className="relative h-48 w-full rounded-2xl overflow-hidden group border border-slate-800">
                  <Image
                    src="/images/orange_location-2048x1157.jpg"
                    alt="Orange Island Location Map"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 transition-opacity group-hover:opacity-0" />
                  <a 
                    href="https://maps.google.com/?q=Orange+Island+Development+Company+Lekki" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/60 backdrop-blur-xs"
                  >
                    <span className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Get Directions
                    </span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Redesigned Glassmorphic Form Container */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="py-24 bg-slate-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-600 uppercase tracking-widest text-xs font-bold mb-3 block">Got Questions?</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-1 bg-orange-500 rounded mx-auto mt-4"></div>
          </div>

          <div className="space-y-2 bg-white rounded-3xl border border-gray-200/80 p-6 md:p-8 shadow-xl">
            {faqItems.map((item, idx) => (
              <details key={idx} className="group border-b border-gray-150 last:border-0 py-5">
                <summary className="flex justify-between items-center text-base md:text-lg font-bold text-gray-900 cursor-pointer list-none select-none hover:text-orange-600 transition duration-300">
                  <span className="pr-4">{item.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform duration-300 shrink-0">
                    <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-gray-600 leading-relaxed font-light text-sm md:text-base pl-1 animate-slide-down">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours & Commitments Section */}
      <section className="bg-white border-t border-gray-150 py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Hours */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 border border-orange-100">
                  <ClockIcon className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Business Hours</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3.5 border-b border-gray-100 text-sm">
                  <span className="font-semibold text-gray-800">Monday - Friday</span>
                  <span className="text-gray-600 font-light">9:00 AM - 5:00 PM (WAT)</span>
                </div>
                <div className="flex justify-between items-center py-3.5 border-b border-gray-100 text-sm">
                  <span className="font-semibold text-gray-800">Saturday</span>
                  <span className="text-gray-600 font-light">10:00 AM - 2:00 PM (WAT)</span>
                </div>
                <div className="flex justify-between items-center py-3.5 border-b border-gray-100 text-sm">
                  <span className="font-semibold text-gray-800">Sunday</span>
                  <span className="text-gray-500 italic">Closed</span>
                </div>
                <div className="pt-6">
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    <span className="font-bold text-gray-900 uppercase tracking-wider text-xs block mb-1">Emergency Support:</span> 
                    Available 24/7 via the resident Venco Portal for urgent infrastructure, utility, and safety matters.
                  </p>
                </div>
              </div>
            </div>

            {/* Commitments Card */}
            <div className="bg-gradient-to-br from-orange-50/70 via-amber-50/40 to-rose-50/20 rounded-3xl p-8 md:p-10 border border-orange-100/50 shadow-lg relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-orange-400/10 rounded-full blur-2xl" />
              
              <h3 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight">Lifestyle &amp; Community</h3>
              <p className="text-gray-700 font-light leading-relaxed text-sm md:text-base mb-8">
                Discover a refined waterfront lifestyle where community, leisure, nature, and world-class utilities come together in perfect harmony.
              </p>
              
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">What to Expect</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-extrabold text-sm mt-0.5" aria-hidden="true">✓</span>
                  <div>
                    <span className="block text-sm font-bold text-gray-900">Swift Response</span>
                    <span className="text-gray-600 text-xs md:text-sm font-light">We aim to review and reply to all general inquiries within 24 business hours.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-extrabold text-sm mt-0.5" aria-hidden="true">✓</span>
                  <div>
                    <span className="block text-sm font-bold text-gray-900">Personalized Service</span>
                    <span className="text-gray-600 text-xs md:text-sm font-light">Your inquiry will be routed directly to the appropriate operations or sales lead.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-extrabold text-sm mt-0.5" aria-hidden="true">✓</span>
                  <div>
                    <span className="block text-sm font-bold text-gray-900">Expert Guidance</span>
                    <span className="text-gray-600 text-xs md:text-sm font-light">Access direct support from our structural engineering and property management teams.</span>
                  </div>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

