export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 md:py-40 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5 md:sticky md:top-32">
          <p className="text-xs uppercase tracking-[0.2em] text-ink-400 mb-4">
            About
          </p>
          <h2 className="font-display text-display-md text-ink-50 text-balance">
            I&rsquo;m the engineer you call when the data has to be right.
          </h2>
          <div className="mt-10 flex items-center gap-4">
            <div className="relative h-14 w-14 rounded-full overflow-hidden glass-strong">
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-iris to-mint opacity-90" />
              <div className="absolute inset-0 grid place-items-center font-display text-lg text-white/95">
                LN
              </div>
            </div>
            <div>
              <p className="text-ink-50 font-medium">Long Nguyen</p>
              <p className="text-sm text-ink-300">
                Senior data engineer · Remote (UTC−5)
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 space-y-8 text-ink-200 text-lg leading-relaxed text-pretty">
          <p>
            For the last decade I&rsquo;ve been the person teams call when
            their data systems start lying to the business — pipelines that
            silently drop rows, dashboards that disagree with the warehouse,
            ML models retraining on data that no longer exists.
          </p>
          <p>
            I&rsquo;ve shipped data infrastructure at Fortune 500 retailers,
            Series-B fintechs, and AI-native SaaS teams. I write Python and
            SQL like first languages, lean toward boring tech, and care more
            about whether the on-call engineer can sleep at night than which
            framework won this quarter.
          </p>
          <p>
            I&rsquo;m booked a quarter ahead, take a maximum of two clients
            at a time, and price by the engagement, never the hour.
          </p>

          <ul className="grid sm:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden mt-12 border border-white/[0.06]">
            {[
              ["Years building data infra", "10+"],
              ["Production deployments", "12"],
              ["Concurrent clients", "2 max"],
              ["Average engagement", "8 weeks"],
            ].map(([k, v]) => (
              <li
                key={k}
                className="bg-ink-950 px-6 py-5 flex items-baseline justify-between"
              >
                <span className="text-sm text-ink-300">{k}</span>
                <span className="font-display text-2xl text-ink-50 tabular-nums">
                  {v}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
