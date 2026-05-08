"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(91,140,255,0.25),transparent_70%)]" />
  ),
});

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-iris-mesh"
    >
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-90">
        <HeroScene />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950/40 via-transparent to-ink-950" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-40 pb-28 md:pt-48 md:pb-36">
        <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-ink-200 mb-8 animate-fade-up">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full bg-mint animate-ping opacity-75" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-mint" />
          </span>
          Available for Q3 / Q4 engagements
        </div>

        <h1
          className="font-display text-display-xl text-ink-50 text-balance animate-fade-up"
          style={{ animationDelay: "60ms" }}
        >
          Data systems
          <br />
          that just{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-br from-accent via-iris to-mint bg-clip-text text-transparent italic font-display">
              work.
            </span>
          </span>
        </h1>

        <p
          className="mt-8 max-w-xl text-lg md:text-xl text-ink-200 text-pretty animate-fade-up"
          style={{ animationDelay: "140ms" }}
        >
          I&rsquo;m{" "}
          <span className="text-ink-50 font-medium">Long Nguyen</span>, a senior
          data engineer who builds production-grade pipelines, lakehouses, and
          ML infrastructure for teams that can&rsquo;t afford it to break.
          Ten&nbsp;years in, hundreds of millions of rows shipped daily.
        </p>

        <div
          className="mt-10 flex flex-wrap gap-3 animate-fade-up"
          style={{ animationDelay: "220ms" }}
        >
          <a
            href="https://calendly.com/nguyenlong500"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-ink-50 text-ink-950 font-medium px-5 py-3 hover:bg-white transition-colors duration-200 cursor-pointer shadow-glass-sm"
          >
            Book a 30-min intro call
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-ink-100 hover:bg-white/[0.06] transition-colors duration-200 cursor-pointer"
          >
            See selected work
          </a>
        </div>

        <dl
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          {[
            { k: "10y+", v: "Building data infra" },
            { k: "$80M+", v: "Revenue routed through" },
            { k: "12", v: "Production deployments" },
            { k: "99.95%", v: "Pipeline uptime SLA" },
          ].map((s) => (
            <div key={s.v}>
              <dt className="font-display text-3xl md:text-4xl text-ink-50 tracking-tight">
                {s.k}
              </dt>
              <dd className="mt-1 text-sm text-ink-300">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-ink-400 flex flex-col items-center gap-2 z-10">
        <span className="tracking-widest uppercase">Scroll</span>
        <span className="h-8 w-px bg-gradient-to-b from-ink-400 to-transparent" />
      </div>
    </section>
  );
}
