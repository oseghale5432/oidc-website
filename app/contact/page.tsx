import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Orange Island Lagos',
  description: 'Get in touch with the Orange Island Lagos team to learn more about properties, infrastructure, and lakeside living.',
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-xl text-orange-50 max-w-2xl font-light">
            We&apos;d love to hear from you. Reach out to learn more about Orange Island.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-150 flex flex-col justify-between">
              <div>
                <div className="text-5xl mb-4" aria-hidden="true">✉️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-base leading-relaxed break-words">
                  <a href="mailto:hello@orangeislandng.com" className="hover:text-orange-600 font-semibold transition">
                    hello@orangeislandng.com
                  </a>
                </p>
              </div>
              <p className="text-gray-500 text-xs mt-4">We typically respond within 24 hours</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-150 flex flex-col justify-between">
              <div>
                <div className="text-5xl mb-4" aria-hidden="true">📞</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  <a href="tel:+2348132992279" className="hover:text-orange-600 font-semibold transition">
                    +234 813 299 2279
                  </a>
                </p>
              </div>
              <p className="text-gray-500 text-xs mt-4">Available Monday - Friday, 9am - 5pm</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-150 flex flex-col justify-between">
              <div>
                <div className="text-5xl mb-4" aria-hidden="true">📍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  Orange Island Development Company<br />
                  On Oba Ademola Elegushi Boulevard,<br />
                  Lagoon District, Freedom Way, Lekki Phase 1,<br />
                  Lagos, Nigeria.
                </p>
              </div>
              <p className="text-gray-500 text-xs mt-4">Visit our administrative office</p>
            </div>
          </div>

          {/* Contact Form Component */}
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Business Hours</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 text-sm">
                  <span className="font-semibold text-gray-900">Monday - Friday</span>
                  <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 text-sm">
                  <span className="font-semibold text-gray-900">Saturday</span>
                  <span className="text-gray-600">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 text-sm">
                  <span className="font-semibold text-gray-900">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
                <div className="pt-6">
                  <p className="text-gray-600 mb-3 text-sm">
                    <span className="font-semibold text-gray-900">Emergency Support:</span> Available 24/7 for urgent utility and security matters.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-950 mb-4">Lifestyle & Community</h3>
              <p className="text-gray-700 font-light leading-relaxed text-sm mb-6">
                Discover a refined waterfront lifestyle where community, leisure, nature, and world-class amenities come together in perfect harmony.
              </p>
              <h3 className="text-lg font-bold text-gray-900 mb-3">What to Expect</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2.5">
                  <span className="text-orange-600 flex-shrink-0" aria-hidden="true">✓</span>
                  <span className="text-gray-750"><strong>Quick Response:</strong> We aim to reply within 24 hours</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-orange-600 flex-shrink-0" aria-hidden="true">✓</span>
                  <span className="text-gray-750"><strong>Personalized Service:</strong> Each inquiry gets individual attention</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-orange-600 flex-shrink-0" aria-hidden="true">✓</span>
                  <span className="text-gray-750"><strong>Expert Advice:</strong> Guidance from our knowledgeable facilities and sales teams</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
