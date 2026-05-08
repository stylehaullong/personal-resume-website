type Quote = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

const quotes: Quote[] = [
  {
    quote:
      "Long parachuted into a tangled lakehouse migration that two prior consultancies had failed to land. Eight weeks later, we were on schedule and under budget. Worth every dollar.",
    author: "VP Engineering",
    role: "VP Engineering",
    company: "Series-B Fintech",
  },
  {
    quote:
      "The most senior data engineer I&rsquo;ve worked with — and the rare contractor who writes documentation his replacement actually wants to read. We&rsquo;ve hired him three times.",
    author: "CTO",
    role: "Chief Technology Officer",
    company: "Healthcare scale-up",
  },
  {
    quote:
      "He delivered a feature store, a real-time inference layer, and a dashboard our exec team uses daily — in a single quarter. Quietly, without drama.",
    author: "Head of Data",
    role: "Head of Data",
    company: "AI-native SaaS",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-accent" aria-label="5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-28 md:py-36 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-ink-400 mb-4">
            What clients say
          </p>
          <h2 className="font-display text-display-md text-ink-50 text-balance">
            Senior people who&rsquo;ve hired me before, in their own words.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className="glass rounded-3xl p-7 md:p-8 hover:border-white/20 transition-colors duration-300 flex flex-col"
            >
              <Stars />
              <blockquote
                className="mt-5 text-ink-100 text-pretty leading-relaxed flex-1"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${q.quote}&rdquo;` }}
              />
              <figcaption className="mt-7 pt-7 border-t border-white/[0.08]">
                <p className="text-ink-50 font-medium text-sm">{q.role}</p>
                <p className="text-ink-400 text-sm">{q.company}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
