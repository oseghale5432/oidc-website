'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [utilitiesOpen, setUtilitiesOpen] = useState(false);

  // subtle scroll effect like premium real estate sites
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`relative w-full z-50 transition-all duration-300 bg-white border-b border-slate-200 ${
        scrolled ? 'py-0' : 'py-2'
      }`}
    >
      <div className="pointer-events-none absolute right-20 top-1/2 z-10 -translate-y-1/2 sm:right-24 md:right-6 lg:right-10">
        <Image
          src="/images/proudly-nigerian.png"
          alt="Proudly Nigerian"
          width={110}
          height={110}
          className="h-auto w-16 opacity-90 drop-shadow-md sm:w-20 lg:w-24"
          priority
        />
      </div>
      <nav className="relative max-w-7xl mx-auto px-6 lg:px-8 h-24 flex items-center justify-between">

        {/* LOGO LEFT */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={190}
            height={60}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* DESKTOP NAV CENTER */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 absolute left-1/2 transform -translate-x-1/2">

          {/* COMPANY INFO */}
          <div className="relative group">
            <button className="text-[12px] tracking-[0.08em] uppercase text-slate-700 hover:text-slate-950 transition font-semibold flex items-center gap-2 py-4">
              Company Information
              <span className="text-[9px] group-hover:rotate-180 transition">▼</span>
            </button>

            <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
              <div className="bg-white border border-gray-100 shadow-xl rounded-md py-2 relative mt-1">
                {/* Invisible bridge for hover gap */}
                <div className="absolute -top-4 left-0 w-full h-4"></div>
                <Link href="/about" className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                  Who we are
                </Link>
                <Link href="/team" className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                  Team
                </Link>
              </div>
            </div>
          </div>

          {/* BUILDING GUIDELINES */}
          <div className="relative group">
            <button className="text-[12px] tracking-[0.08em] uppercase text-slate-700 hover:text-slate-950 transition font-semibold flex items-center gap-2 py-4">
              Building Guidelines
              <span className="text-[9px] group-hover:rotate-180 transition">▼</span>
            </button>

            <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
              <div className="bg-white border border-gray-100 shadow-xl rounded-md py-2 relative mt-1">
                {/* Invisible bridge for hover gap */}
                <div className="absolute -top-4 left-0 w-full h-4"></div>
                <Link href="/physical-planning-document" className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                  Physical Planning Document
                </Link>
                <Link href="/lagos-state-approvals" className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                  Lagos State Approvals
                </Link>
                <Link href="/approval-process" className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                  Approval Process
                </Link>
              </div>
            </div>
          </div>

          {/* UTILITIES */}
          <div className="relative group">
            <button className="text-[12px] tracking-[0.08em] uppercase text-slate-700 hover:text-slate-950 transition font-semibold flex items-center gap-2 py-4">
              Utilities
              <span className="text-[9px] group-hover:rotate-180 transition">▼</span>
            </button>

            <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
              <div className="bg-white border border-gray-100 shadow-xl rounded-md py-2 relative mt-1">
                {/* Invisible bridge for hover gap */}
                <div className="absolute -top-4 left-0 w-full h-4"></div>
                <Link href="/water" className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                  Water
                </Link>
                <Link href="/electricity" className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                  Electricity
                </Link>
                <Link href="/sewage-management" className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                  Sewage Management
                </Link>
                <Link href="/waste-collection" className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                  Waste Collection
                </Link>
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <Link
            href="/contact"
            className="text-[12px] tracking-[0.08em] uppercase text-slate-700 hover:text-slate-950 relative group py-4 font-semibold"
          >
            Contact
            <span className="absolute left-0 bottom-2 w-0 h-[1px] bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-800 text-3xl"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 max-h-[85vh] overflow-y-auto">
          <div className="p-6 flex flex-col gap-4">

            {/* COMPANY */}
            <button
              onClick={() => setCompanyOpen(!companyOpen)}
              className="flex justify-between items-center text-sm uppercase tracking-widest text-gray-700"
            >
              Company Information
              <span>▼</span>
            </button>
            {companyOpen && (
              <div className="pl-4 border-l border-orange-400 flex flex-col gap-3">
                <Link href="/about" onClick={() => setMobileOpen(false)}>Who we are</Link>
                <Link href="/team" onClick={() => setMobileOpen(false)}>Team</Link>
              </div>
            )}

            {/* BUILDING GUIDELINES */}
            <button
              onClick={() => {
                 // Hack for new submenu without making another state variable, 
                 // just toggle it by repurposing the existing one or making a new inline state? 
                 // Wait, I can't add state variables in replacement easily unless I replace the whole file. 
                 // Let's assume we can just add a simple toggle by repurposing 'companyOpen' or using a details tag.
              }}
              className="flex justify-between items-center text-sm uppercase tracking-widest text-gray-700 hidden"
            >
              Building Guidelines
            </button>
            {/* Since I didn't add a state for guidelines, I'll use a standard link for now or add state in a second pass. Actually I can just add a Details/Summary tag for mobile menus which is standard HTML and needs no React state! */}
            <details className="group">
              <summary className="flex justify-between items-center text-sm uppercase tracking-widest text-gray-700 cursor-pointer list-none">
                Building Guidelines
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <div className="pl-4 mt-3 border-l border-orange-400 flex flex-col gap-3">
                <Link href="/physical-planning-document" onClick={() => setMobileOpen(false)}>Physical Planning Document</Link>
                <Link href="/lagos-state-approvals" onClick={() => setMobileOpen(false)}>Lagos State Approvals</Link>
                <Link href="/approval-process" onClick={() => setMobileOpen(false)}>Approval Process</Link>
              </div>
            </details>

            {/* UTILITIES */}
            <button
              onClick={() => setUtilitiesOpen(!utilitiesOpen)}
              className="flex justify-between items-center text-sm uppercase tracking-widest text-gray-700"
            >
              Utilities
              <span>▼</span>
            </button>
            {utilitiesOpen && (
              <div className="pl-4 border-l border-orange-400 flex flex-col gap-3">
                <Link href="/water" onClick={() => setMobileOpen(false)}>Water</Link>
                <Link href="/electricity" onClick={() => setMobileOpen(false)}>Electricity</Link>
                <Link href="/sewage-management" onClick={() => setMobileOpen(false)}>Sewage Management</Link>
                <Link href="/waste-collection" onClick={() => setMobileOpen(false)}>Waste Collection</Link>
              </div>
            )}

            <Link href="/contact" onClick={() => setMobileOpen(false)} className="uppercase text-sm tracking-widest text-gray-700">
              Contact
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
