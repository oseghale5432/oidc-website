'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function HeroNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [utilitiesOpen, setUtilitiesOpen] = useState(false);

  return (
    <>
      {/* ─── DESKTOP: navigation ─────────────────────────── */}
      <nav className="absolute top-0 left-0 w-full z-50 hidden md:flex items-center justify-between px-10 py-7">
        
        {/* LOGO LEFT (matching reference site) */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo-white.png"
            alt="Logo"
            width={190}
            height={60}
            className="h-12 w-auto object-contain opacity-0" // hidden but takes up space to center the rest properly
            priority
          />
        </Link>

        {/* DESKTOP NAV CENTER */}
        <div className="flex items-center gap-8 lg:gap-10 absolute left-1/2 transform -translate-x-1/2">
          {/* COMPANY INFO */}
          <div className="relative group">
            <button className="text-[13px] tracking-[0.1em] uppercase text-white/90 hover:text-white transition font-medium flex items-center gap-1 py-4">
              Company Information
              <span className="text-[9px] group-hover:rotate-180 transition">▼</span>
            </button>

            <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
              <div className="bg-[#9C3317]/95 backdrop-blur-md border border-white/20 shadow-xl rounded-md py-2 relative mt-1">
                {/* Invisible bridge for hover gap */}
                <div className="absolute -top-4 left-0 w-full h-4"></div>
                <Link href="/about" className="block px-5 py-3 text-sm text-white/90 hover:bg-white/10 hover:text-white">
                  Who we are
                </Link>
                <Link href="/team" className="block px-5 py-3 text-sm text-white/90 hover:bg-white/10 hover:text-white">
                  Team
                </Link>
              </div>
            </div>
          </div>

          {/* BUILDING GUIDELINES */}
          <div className="relative group">
            <button className="text-[13px] tracking-[0.1em] uppercase text-white/90 hover:text-white transition font-medium flex items-center gap-1 py-4">
              Building Guidelines
              <span className="text-[9px] group-hover:rotate-180 transition">▼</span>
            </button>

            <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
              <div className="bg-[#9C3317]/95 backdrop-blur-md border border-white/20 shadow-xl rounded-md py-2 relative mt-1">
                {/* Invisible bridge for hover gap */}
                <div className="absolute -top-4 left-0 w-full h-4"></div>
                <Link href="/physical-planning-document" className="block px-5 py-3 text-sm text-white/90 hover:bg-white/10 hover:text-white">
                  Physical Planning Document
                </Link>
                <Link href="/lagos-state-approvals" className="block px-5 py-3 text-sm text-white/90 hover:bg-white/10 hover:text-white">
                  Lagos State Approvals
                </Link>
                <Link href="/approval-process" className="block px-5 py-3 text-sm text-white/90 hover:bg-white/10 hover:text-white">
                  Approval Process
                </Link>
              </div>
            </div>
          </div>

          {/* UTILITIES */}
          <div className="relative group">
            <button className="text-[13px] tracking-[0.1em] uppercase text-white/90 hover:text-white transition font-medium flex items-center gap-1 py-4">
              Utilities
              <span className="text-[9px] group-hover:rotate-180 transition">▼</span>
            </button>

            <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
              <div className="bg-[#9C3317]/95 backdrop-blur-md border border-white/20 shadow-xl rounded-md py-2 relative mt-1">
                {/* Invisible bridge for hover gap */}
                <div className="absolute -top-4 left-0 w-full h-4"></div>
                <Link href="/water" className="block px-5 py-3 text-sm text-white/90 hover:bg-white/10 hover:text-white">
                  Water
                </Link>
                <Link href="/electricity" className="block px-5 py-3 text-sm text-white/90 hover:bg-white/10 hover:text-white">
                  Electricity
                </Link>
                <Link href="/sewage-management" className="block px-5 py-3 text-sm text-white/90 hover:bg-white/10 hover:text-white">
                  Sewage Management
                </Link>
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <Link
            href="/contact"
            className="text-[13px] tracking-[0.1em] uppercase text-white/90 hover:text-white relative group py-4"
          >
            Contact
            <span className="absolute left-0 bottom-2 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
      </nav>

      {/* ─── MOBILE: hamburger ───────────────────────────────────── */}
      <div className="absolute top-0 left-0 w-full z-50 md:hidden flex items-center justify-between px-6 py-5">
        <Link href="/">
          <Image
            src="/logo-white.png"
            alt="Logo"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white text-2xl leading-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 w-full z-40 bg-[#7a2d1f]/95 backdrop-blur-sm md:hidden max-h-[85vh] overflow-y-auto border-t border-white/10">
          <div className="flex flex-col px-8 py-8 gap-6 text-left">
            
            {/* COMPANY */}
            <button
              onClick={() => setCompanyOpen(!companyOpen)}
              className="flex justify-between items-center text-sm uppercase tracking-widest text-white/90"
            >
              Company Information
              <span>▼</span>
            </button>
            {companyOpen && (
              <div className="pl-4 border-l border-white/30 flex flex-col gap-3">
                <Link href="/about" className="text-white/80 hover:text-white text-sm" onClick={() => setMobileOpen(false)}>Who we are</Link>
                <Link href="/team" className="text-white/80 hover:text-white text-sm" onClick={() => setMobileOpen(false)}>Team</Link>
              </div>
            )}

            {/* BUILDING GUIDELINES */}
            <details className="group">
              <summary className="flex justify-between items-center text-sm uppercase tracking-widest text-white/90 cursor-pointer list-none">
                Building Guidelines
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <div className="pl-4 mt-3 border-l border-white/30 flex flex-col gap-3">
                <Link href="/physical-planning-document" className="text-white/80 hover:text-white text-sm" onClick={() => setMobileOpen(false)}>Physical Planning Document</Link>
                <Link href="/lagos-state-approvals" className="text-white/80 hover:text-white text-sm" onClick={() => setMobileOpen(false)}>Lagos State Approvals</Link>
                <Link href="/approval-process" className="text-white/80 hover:text-white text-sm" onClick={() => setMobileOpen(false)}>Approval Process</Link>
              </div>
            </details>

            {/* UTILITIES */}
            <button
              onClick={() => setUtilitiesOpen(!utilitiesOpen)}
              className="flex justify-between items-center text-sm uppercase tracking-widest text-white/90"
            >
              Utilities
              <span>▼</span>
            </button>
            {utilitiesOpen && (
              <div className="pl-4 border-l border-white/30 flex flex-col gap-3">
                <Link href="/water" className="text-white/80 hover:text-white text-sm" onClick={() => setMobileOpen(false)}>Water</Link>
                <Link href="/electricity" className="text-white/80 hover:text-white text-sm" onClick={() => setMobileOpen(false)}>Electricity</Link>
                <Link href="/sewage-management" className="text-white/80 hover:text-white text-sm" onClick={() => setMobileOpen(false)}>Sewage Management</Link>
              </div>
            )}

            <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-white/90 hover:text-white text-sm tracking-widest uppercase mt-2">
              Contact
            </Link>

          </div>
        </div>
      )}
    </>
  );
}
