import Link from 'next/link';
import Image from 'next/image';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-[#111820] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/logo-white.png"
                alt="Orange Island Logo"
                width={160}
                height={74}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 leading-relaxed font-light text-sm">
              Secure lakeside living with world-class planning and vibrant amenities. Creating extraordinary communities in Lagos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-[0.14em] mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" id="footer-link-home" className="text-gray-400 hover:text-amber-400 transition text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" id="footer-link-about" className="text-gray-400 hover:text-amber-400 transition text-sm">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/team" id="footer-link-team" className="text-gray-400 hover:text-amber-400 transition text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/properties-investment" id="footer-link-guidelines" className="text-gray-400 hover:text-amber-400 transition text-sm">
                  Building Guidelines
                </Link>
              </li>
              <li>
                <Link href="/contact" id="footer-link-contact" className="text-gray-400 hover:text-amber-400 transition text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-[0.14em] mb-6 text-white">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <EnvelopeIcon className="h-5 w-5 text-slate-300 mt-1" aria-hidden="true" />
                <a href="mailto:hello@orangeislandng.com" id="footer-contact-email" className="text-gray-400 hover:text-amber-400 transition">
                  hello@orangeislandng.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="h-5 w-5 text-slate-300 mt-1" aria-hidden="true" />
                <a href="tel:+2348132992279" id="footer-contact-phone" className="text-gray-400 hover:text-amber-400 transition">
                  +234 813 299 2279
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-slate-300 mt-1" aria-hidden="true" />
                <span className="text-gray-400 leading-relaxed">
                  Orange Island Development Company,<br />
                  On Oba Ademola Elegushi Boulevard,<br />
                  Lagoon District, Freedom Way,<br />
                  Lekki Phase 1, Lagos, Nigeria.
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-[0.14em] mb-6 text-white">Stay Updated</h4>
            <p className="text-gray-400 mb-4 text-sm font-light">Subscribe to get the latest updates about Orange Island</p>
            <div className="flex gap-2">
              <input
                type="email"
                id="footer-newsletter-email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-md border border-white/15 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white/50 text-sm"
              />
              <button id="footer-newsletter-submit" className="bg-white hover:bg-slate-100 text-slate-950 px-4 py-2 rounded-md font-semibold transition cursor-pointer">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm font-light">
            &copy; 2026 Orange Island Lagos. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" id="footer-link-privacy" className="text-gray-400 hover:text-amber-400 transition text-sm">
              Privacy Policy
            </Link>
            <Link href="#" id="footer-link-terms" className="text-gray-400 hover:text-amber-400 transition text-sm">
              Terms of Service
            </Link>
            <Link href="#" id="footer-link-sitemap" className="text-gray-400 hover:text-amber-400 transition text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
