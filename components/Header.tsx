"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/site-data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <LogoIcon />
            <span className="text-xl font-bold tracking-tight">
              <span className="text-[#0F172A]">Sift</span>
              <span className="text-[#14B8A6]">Forward</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="bg-[#14B8A6] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#0d9488] transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-[#64748B] hover:text-[#0F172A]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#E2E8F0] bg-white px-4 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#64748B] hover:text-[#0F172A]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#14B8A6] text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:bg-[#0d9488] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function LogoIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <circle cx="3.5" cy="7" r="2" fill="#94a3b8" opacity="0.5" />
      <circle cx="2.5" cy="13" r="1.5" fill="#94a3b8" opacity="0.4" />
      <circle cx="3.5" cy="19" r="2" fill="#94a3b8" opacity="0.5" />
      <circle cx="7" cy="4" r="1" fill="#94a3b8" opacity="0.3" />
      <circle cx="7" cy="22" r="1" fill="#94a3b8" opacity="0.3" />
      <path d="M5.5 7 Q9 9 11 13" stroke="#cbd5e1" strokeWidth="1" fill="none" />
      <path d="M4 13 L11 13" stroke="#cbd5e1" strokeWidth="1" fill="none" />
      <path d="M5.5 19 Q9 17 11 13" stroke="#cbd5e1" strokeWidth="1" fill="none" />
      <line x1="11" y1="13" x2="23" y2="13" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" />
      <path d="M18.5 9 L23 13 L18.5 17" stroke="#14B8A6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
