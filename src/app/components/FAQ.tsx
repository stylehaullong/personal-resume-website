"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What does a typical engagement cost?",
    a: "Most engagements land between $25k and $120k, fixed-fee, scoped to a clear deliverable. Retainers start at $8k/month for a half-day per week. I never bill hourly — you should know exactly what you&rsquo;re paying before we start.",
  },
  {
    q: "How quickly can you start?",
    a: "I&rsquo;m typically booked 4 — 8 weeks ahead and take a maximum of two concurrent clients. The intro call is the fastest way to find out my next available slot.",
  },
  {
    q: "Will you sign an NDA / use our repos / our cloud?",
    a: "Yes to all three. Your code lives in your repos under your accounts from day one. I&rsquo;m comfortable with SOC 2, HIPAA, and PCI environments and have signed plenty of MNDAs.",
  },
  {
    q: "Do you build greenfield or rescue legacy systems?",
    a: "Both, but rescue work is where I&rsquo;m sharpest — inherited Airflow nightmares, dbt projects nobody owns, lakehouses that cost more than they earn. I prefer incremental refactors over big-bang rewrites.",
  },
  {
    q: "Can you bring a team?",
    a: "I work solo by default. For larger builds I have a small bench of trusted contractors I can pull in — also senior, also remote, also fixed-fee.",
  },
  {
    q: "What about timezones?",
    a: "I&rsquo;m on US Eastern (UTC−5) and overlap comfortably with North America, EU, and APAC mornings. Async-first by default, with one weekly sync.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative py-28 md:py-36 border-t border-white/[0.06]">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-ink-400 mb-4">
            Common questions
          </p>
          <h2 className="font-display text-display-md text-ink-50 text-balance">
            What people ask before hiring me.
          </h2>
        </div>

        <ul className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <li key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left cursor-pointer group"
                >
                  <span className="font-display text-lg md:text-xl text-ink-50 group-hover:text-white transition-colors">
                    {f.q}
                  </span>
                  <span className="flex-shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full glass text-ink-100">
                    <ChevronIcon open={open} />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open
                      ? "grid-rows-[1fr] opacity-100 pb-6"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className="text-ink-200 leading-relaxed max-w-2xl text-pretty"
                      dangerouslySetInnerHTML={{ __html: f.a }}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
