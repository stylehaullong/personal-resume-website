type Service = {
  title: string;
  body: string;
  bullets: string[];
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Data platform builds",
    body:
      "End-to-end lakehouse and pipeline architecture — from source systems to dashboards your CFO actually trusts.",
    bullets: [
      "Snowflake / Databricks / BigQuery",
      "dbt + Airflow / Dagster orchestration",
      "Streaming with Kafka, Flink, Pub/Sub",
    ],
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
  },
  {
    title: "ML infrastructure",
    body:
      "Feature stores, training infra, online inference. The boring plumbing that makes data scientists look brilliant.",
    bullets: [
      "Feature store design (Feast, Tecton, in-house)",
      "Model registry + CI/CD for ML",
      "Real-time + batch inference on AWS / GCP",
    ],
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
      </svg>
    ),
  },
  {
    title: "Pipeline rescue",
    body:
      "Inherited a 9-hour batch that fails twice a week? I&rsquo;ve seen this movie. I know how it ends.",
    bullets: [
      "Performance + cost audits",
      "Incremental refactor, no big-bang rewrites",
      "On-call playbooks and runbooks",
    ],
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v6M12 22v-6M22 12h-6M2 12h6" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Fractional data leadership",
    body:
      "Embed as your interim head of data. Hire the team, set the roadmap, ship the first quarter, hand it off.",
    bullets: [
      "Tech strategy + hiring loops",
      "Vendor selection and procurement",
      "Mentoring early-career engineers",
    ],
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <p className="text-xs uppercase tracking-[0.2em] text-ink-400 mb-4">
              How I work
            </p>
          </div>
          <div className="md:col-span-2">
            <h2 className="font-display text-display-md text-ink-50 text-balance">
              Four ways teams hire me. Pick the shape that fits the problem.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/[0.06] rounded-3xl overflow-hidden border border-white/[0.06]">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-ink-950 p-8 md:p-10 hover:bg-ink-900 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl glass text-accent">
                  {s.icon}
                </span>
                <h3 className="font-display text-xl text-ink-50">{s.title}</h3>
              </div>
              <p
                className="text-ink-200 mb-6 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
              <ul className="space-y-2.5">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm text-ink-300"
                  >
                    <span className="mt-2 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
