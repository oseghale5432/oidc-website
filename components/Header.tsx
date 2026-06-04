'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileUtilitiesOpen, setMobileUtilitiesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" id="header-logo-link" className="flex items-center hover:opacity-90 transition">
          <Image
            src="/logo.png"
            alt="Orange Island Logo"
            width={220}
            height={70}
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {/* Company Information Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 hover:text-orange-600 font-semibold uppercase tracking-wider text-sm py-2 transition duration-300">
              Company Information
              <span className="text-[10px] transition-transform group-hover:rotate-180">▼</span>
            </button>
            <div className="absolute left-0 mt-0 w-52 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0">
              <div className="py-2">
                <Link
                  href="/about"
                  id="nav-link-who-we-are"
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
                >
                  Who We Are
                </Link>
                <Link
                  href="/team"
                  id="nav-link-team"
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
                >
                  Team
                </Link>
              </div>
            </div>
          </div>

          {/* Building Guidelines */}
          <Link
            href="/properties-investment"
            id="nav-link-building-guidelines"
            className="text-gray-700 hover:text-orange-600 font-semibold uppercase tracking-wider text-sm transition duration-300 relative group py-2"
          >
            Building Guidelines
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Utilities Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 hover:text-orange-600 font-semibold uppercase tracking-wider text-sm py-2 transition duration-300">
              Utilities
              <span className="text-[10px] transition-transform group-hover:rotate-180">▼</span>
            </button>
            <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0">
              <div className="py-2">
                <Link
                  href="/water"
                  id="nav-link-water"
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
                >
                  Water
                </Link>
                <Link
                  href="/electricity"
                  id="nav-link-electricity"
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
                >
                  Electricity
                </Link>
                <Link
                  href="/sewage-management"
                  id="nav-link-sewage"
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
                >
                  Waste Collection
                </Link>
                <Link
                  href="/venco-app"
                  id="nav-link-venco"
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
                >
                  Venco App
                </Link>
              </div>
            </div>
          </div>

          {/* Contact */}
          <Link
            href="/contact"
            id="nav-link-contact"
            className="text-gray-700 hover:text-orange-600 font-semibold uppercase tracking-wider text-sm transition duration-300 relative group py-2"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Portal Button */}
          <Link
            href="/portal"
            id="nav-link-portal"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded font-bold uppercase tracking-wider text-sm transition duration-300 shadow hover:shadow-lg transform active:scale-95"
          >
            Portal
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="header-mobile-toggle-btn"
          className="md:hidden text-gray-700 hover:text-orange-600 text-3xl transition"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden border-t border-gray-150 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col p-6 gap-4">
              {/* Mobile Company Information */}
              <div>
                <button 
                  onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                  className="w-full flex items-center justify-between text-gray-700 font-semibold uppercase tracking-wider text-base py-2 border-b border-gray-100"
                >
                  <span>Company Information</span>
                  <span className={`text-xs transition-transform ${mobileCompanyOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {mobileCompanyOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-3 border-l-2 border-orange-500">
                    <Link 
                      href="/about" 
                      id="mobile-nav-link-who-we-are"
                      className="text-gray-600 hover:text-orange-600 text-sm transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Who We Are
                    </Link>
                    <Link 
                      href="/team" 
                      id="mobile-nav-link-team"
                      className="text-gray-600 hover:text-orange-600 text-sm transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Team
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Building Guidelines */}
              <Link 
                href="/properties-investment" 
                id="mobile-nav-link-building-guidelines"
                className="text-gray-700 font-semibold uppercase tracking-wider text-base py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Building Guidelines
              </Link>

              {/* Mobile Utilities */}
              <div>
                <button 
                  onClick={() => setMobileUtilitiesOpen(!mobileUtilitiesOpen)}
                  className="w-full flex items-center justify-between text-gray-700 font-semibold uppercase tracking-wider text-base py-2 border-b border-gray-100"
                >
                  <span>Utilities</span>
                  <span className={`text-xs transition-transform ${mobileUtilitiesOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {mobileUtilitiesOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-3 border-l-2 border-orange-500">
                    <Link 
                      href="/water" 
                      id="mobile-nav-link-water"
                      className="text-gray-600 hover:text-orange-600 text-sm transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Water
                    </Link>
                    <Link 
                      href="/electricity" 
                      id="mobile-nav-link-electricity"
                      className="text-gray-600 hover:text-orange-600 text-sm transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Electricity
                    </Link>
                    <Link 
                      href="/sewage-management" 
                      id="mobile-nav-link-sewage"
                      className="text-gray-600 hover:text-orange-600 text-sm transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Waste Collection
                    </Link>
                    <Link 
                      href="/venco-app" 
                      id="mobile-nav-link-venco"
                      className="text-gray-600 hover:text-orange-600 text-sm transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Venco App
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Contact */}
              <Link 
                href="/contact" 
                id="mobile-nav-link-contact"
                className="text-gray-700 font-semibold uppercase tracking-wider text-base py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Portal */}
              <Link
                href="/portal"
                id="mobile-nav-link-portal"
                className="bg-orange-600 text-white px-6 py-3 rounded font-bold uppercase tracking-wider text-center text-base transition transform active:scale-95 mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portal
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

