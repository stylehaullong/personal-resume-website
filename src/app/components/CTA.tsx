export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 overflow-hidden border-t border-white/[0.06]"
    >
      <div
        className="absolute inset-0 bg-iris-mesh opacity-80"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-ink-300 mb-6">
          Let&rsquo;s talk
        </p>
        <h2 className="font-display text-display-lg text-ink-50 text-balance leading-[0.95]">
          Have a data problem
          <br />
          worth solving?
        </h2>
        <p className="mt-8 text-lg text-ink-200 max-w-xl mx-auto text-pretty">
          Book a free 30-minute call. Bring the messiest pipeline you have.
          We&rsquo;ll either rough out a plan together or I&rsquo;ll point you
          to someone better suited.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://calendly.com/nguyenlong500"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-ink-50 text-ink-950 font-medium px-6 py-3.5 hover:bg-white transition-colors duration-200 cursor-pointer shadow-glow"
          >
            Book on Calendly
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="mailto:nguyenlong500@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3.5 text-ink-100 hover:bg-white/[0.06] transition-colors duration-200 cursor-pointer"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            nguyenlong500@gmail.com
          </a>
        </div>

        <p className="mt-10 text-xs text-ink-400 uppercase tracking-widest">
          Replying within 24 hours · Mon — Fri
        </p>
      </div>
    </section>
  );
}
