"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
        scrolled ? "translate-y-0" : ""
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl glass-strong rounded-2xl px-5 py-3 flex items-center justify-between transition-shadow ${
          scrolled ? "shadow-glass-sm" : ""
        }`}
        aria-label="Primary"
      >
        <a href="#top" className="flex items-center gap-2.5 group cursor-pointer">
          <span
            className="relative h-7 w-7 rounded-lg overflow-hidden"
            aria-hidden="true"
          >
            <span className="absolute inset-0 bg-gradient-to-br from-accent via-iris to-mint opacity-90" />
            <span className="absolute inset-0 mix-blend-overlay bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.6),transparent_50%)]" />
          </span>
          <span className="font-display text-sm tracking-tight text-ink-50">
            Long Nguyen<span className="text-accent">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-1.5 rounded-lg text-sm text-ink-200 hover:text-ink-50 hover:bg-white/5 transition-colors duration-200 cursor-pointer"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-ink-50 text-ink-950 text-sm font-medium px-3.5 py-1.5 hover:bg-white transition-colors duration-200 cursor-pointer"
          >
            Book a call
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-white/5 cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mx-auto max-w-6xl mt-2 glass-strong rounded-2xl p-3 animate-fade-up">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm text-ink-200 hover:text-ink-50 hover:bg-white/5 cursor-pointer"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
