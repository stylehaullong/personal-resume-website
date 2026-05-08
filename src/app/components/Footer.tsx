const social = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.96 10.96 0 015.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.05.78 2.12v3.14c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7 0h3.84v1.64h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.13V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4V9z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:nguyenlong500@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-950">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12 mb-12">
          <div>
            <h3 className="font-display text-5xl md:text-7xl text-ink-50 leading-none tracking-tight">
              Long Nguyen<span className="text-accent">.</span>
            </h3>
            <p className="mt-4 text-ink-300 max-w-md">
              Senior data engineer building production-grade infrastructure
              for teams that need it to just work.
            </p>
          </div>
          <a
            href="https://calendly.com/nguyenlong500"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 self-start md:self-end rounded-xl glass px-5 py-3 text-ink-100 hover:bg-white/[0.06] transition-colors duration-200 cursor-pointer w-fit"
          >
            Start a project
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 border-t border-white/[0.06]">
          <p className="text-xs text-ink-400">
            © {year} Long Nguyen · Crafted with care · Built with Next.js +
            React Three Fiber
          </p>
          <ul className="flex items-center gap-2">
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg glass text-ink-200 hover:text-ink-50 hover:bg-white/[0.06] transition-colors duration-200 cursor-pointer"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
