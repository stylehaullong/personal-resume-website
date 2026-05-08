const stack = [
  "Snowflake",
  "Databricks",
  "dbt",
  "Airflow",
  "Kafka",
  "Spark",
  "BigQuery",
  "Postgres",
  "AWS",
  "GCP",
  "Terraform",
  "Python",
];

export default function Marquee() {
  return (
    <section
      aria-label="Tools and platforms"
      className="border-y border-white/[0.06] bg-ink-950/60 backdrop-blur-sm py-10"
    >
      <div className="mx-auto max-w-6xl px-6 mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-ink-400">
          Built with the boring, battle-tested stack
        </p>
      </div>
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 px-6">
          {[...stack, ...stack].map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="font-display text-2xl md:text-3xl text-ink-300/70 hover:text-ink-100 transition-colors duration-200 whitespace-nowrap"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
