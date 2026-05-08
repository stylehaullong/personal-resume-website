type CaseStudy = {
  index: string;
  client: string;
  industry: string;
  headline: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  gradient: string;
};

const work: CaseStudy[] = [
  {
    index: "01",
    client: "Fortune 500 retailer",
    industry: "Retail · Analytics",
    headline: "Cut nightly batch from 9h to 22min",
    description:
      "Re-architected a brittle Airflow + EMR pipeline into an incremental Spark + dbt lakehouse on Databricks. Same dashboards, fraction of the spend, finance team gets numbers before standup.",
    metrics: [
      { label: "Runtime", value: "−96%" },
      { label: "Compute spend", value: "−$340k/yr" },
      { label: "SLA hit-rate", value: "99.95%" },
    ],
    tags: ["Databricks", "dbt", "Spark", "Airflow"],
    gradient: "from-accent/30 via-iris/20 to-transparent",
  },
  {
    index: "02",
    client: "Series-B fintech",
    industry: "Fintech · Risk",
    headline: "Real-time fraud signals in <300ms",
    description:
      "Designed a Kafka → Flink → Feature Store pipeline serving fraud models at the edge of the payment flow. Replaced 2 vendor tools, paid for itself in the first quarter.",
    metrics: [
      { label: "P95 latency", value: "240ms" },
      { label: "Vendors removed", value: "2" },
      { label: "Loss avoided", value: "$4.1M" },
    ],
    tags: ["Kafka", "Flink", "Feature Store", "AWS"],
    gradient: "from-mint/25 via-accent/20 to-transparent",
  },
  {
    index: "03",
    client: "AI-native SaaS",
    industry: "ML Platform",
    headline: "Shipped an internal ML platform in 11 weeks",
    description:
      "Bootstrapped feature pipelines, training infra, model registry, and online inference on GCP for a 30-person product team. From zero to first model in production in under a quarter.",
    metrics: [
      { label: "Time to first model", value: "11 wks" },
      { label: "Models in prod", value: "8" },
      { label: "Eng team size", value: "3" },
    ],
    tags: ["GCP", "Vertex AI", "Terraform", "Python"],
    gradient: "from-iris/30 via-mint/15 to-transparent",
  },
  {
    index: "04",
    client: "Healthcare scale-up",
    industry: "HealthTech · HIPAA",
    headline: "HIPAA-grade lakehouse, audited and shipped",
    description:
      "Built a fully audited lakehouse on Snowflake with row-level security, lineage, and CDC ingestion from 14 source systems. Passed SOC 2 + HIPAA review on first attempt.",
    metrics: [
      { label: "Sources unified", value: "14" },
      { label: "Audit findings", value: "0" },
      { label: "Data freshness", value: "<5min" },
    ],
    tags: ["Snowflake", "Fivetran", "dbt", "SOC 2"],
    gradient: "from-accent/25 via-iris/15 to-transparent",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-400 mb-4">
              Selected work · 2018 — 2026
            </p>
            <h2 className="font-display text-display-md text-ink-50 text-balance max-w-3xl">
              A handful of engagements I&rsquo;m most proud of.
            </h2>
          </div>
          <p className="hidden md:block text-sm text-ink-300 max-w-xs">
            Names redacted under NDA. Happy to walk through specifics on a
            call.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {work.map((w) => (
            <article
              key={w.index}
              className="group relative overflow-hidden rounded-3xl glass p-7 md:p-9 hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${w.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative">
                <div className="flex items-start justify-between mb-10">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-ink-400 tabular-nums">
                      {w.index}
                    </span>
                    <span className="h-px w-10 bg-ink-500" />
                    <span className="text-xs uppercase tracking-widest text-ink-300">
                      {w.industry}
                    </span>
                  </div>
                  <span className="text-ink-300 group-hover:text-ink-50 transition-colors">
                    <ArrowIcon />
                  </span>
                </div>

                <p className="text-sm text-ink-300 mb-2">{w.client}</p>
                <h3 className="font-display text-2xl md:text-3xl text-ink-50 leading-tight tracking-tight mb-4 text-balance">
                  {w.headline}
                </h3>
                <p className="text-ink-200 text-pretty leading-relaxed mb-8">
                  {w.description}
                </p>

                <dl className="grid grid-cols-3 gap-4 mb-7 pt-7 border-t border-white/[0.08]">
                  {w.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="text-[11px] uppercase tracking-wider text-ink-400 mb-1.5">
                        {m.label}
                      </dt>
                      <dd className="font-display text-xl md:text-2xl text-ink-50 tabular-nums">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="flex flex-wrap gap-1.5">
                  {w.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-ink-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
