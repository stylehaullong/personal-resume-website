const steps = [
  {
    n: "01",
    title: "Discovery call",
    body: "30 minutes. We talk about what's broken, what you've tried, and what success looks like by quarter end.",
    duration: "30 min · free",
  },
  {
    n: "02",
    title: "Scoped proposal",
    body: "Within 48 hours: a written scope, fixed-fee pricing, milestones, and an exit ramp. No surprises.",
    duration: "48 hours",
  },
  {
    n: "03",
    title: "Build and ship",
    body: "Async-first, weekly demos, your team in the loop. Code, infra, and docs land in your repos — never mine.",
    duration: "4 — 12 weeks",
  },
  {
    n: "04",
    title: "Handoff and stay-on",
    body: "Runbooks, on-call docs, an internal demo. Optional retainer if you want me on call for the first quarter.",
    duration: "1 week + retainer",
  },
];

export default function Process() {
  return (
    <section className="relative py-28 md:py-36 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-ink-400 mb-4">
            Engagement model
          </p>
          <h2 className="font-display text-display-md text-ink-50 max-w-3xl text-balance">
            From first call to handoff in under a quarter.
          </h2>
        </div>

        <ol className="grid md:grid-cols-4 gap-px bg-white/[0.06] rounded-3xl overflow-hidden border border-white/[0.06]">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="relative bg-ink-950 p-7 md:p-8 group hover:bg-ink-900 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-ink-400">{s.n}</span>
                <span className="text-[11px] uppercase tracking-wider text-ink-400">
                  {s.duration}
                </span>
              </div>
              <h3 className="font-display text-lg text-ink-50 mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-ink-300 leading-relaxed">{s.body}</p>
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden md:block absolute right-0 top-12 h-px w-6 -translate-y-1/2 bg-gradient-to-r from-accent/50 to-transparent translate-x-1/2"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
