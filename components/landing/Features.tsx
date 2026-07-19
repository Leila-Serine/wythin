import { features } from "@/data/landing";

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-[1200px] px-6 py-20">
      <div className="mb-14">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--secondary)]">
          Product System
        </p>

        <h2 className="font-display max-w-2xl text-[40px] font-medium leading-tight tracking-[-0.04em] md:text-[56px]">
          Everything you need to move with intention.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-6 md:grid-rows-2">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className={`premium-border group relative overflow-hidden rounded-[1.75rem] p-7 transition duration-300 hover:shadow-lg hover:shadow-[var(--secondary)]/5 md:p-8 ${feature.className}`}
            >
              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-white/25 blur-3xl" />

              {feature.compact ? (
                <div className="relative z-10 flex min-h-[220px] flex-col items-center justify-center text-center">
                  <Icon size={32} className="mb-5" />

                  <h4 className="mb-2 text-sm font-bold uppercase tracking-[0.12em]">
                    {feature.title}
                  </h4>

                  <p
                    className={`max-w-[130px] text-xs leading-relaxed ${
                      feature.title === "Focus"
                        ? "text-white/80"
                        : "text-[var(--text-muted)]"
                    }`}
                  >
                    {feature.subtitle}
                  </p>
                </div>
              ) : (
                <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-between">
                  <div>
                    <Icon size={30} className="mb-6 text-[var(--secondary)]" />

                    <h3 className="mb-3 max-w-[330px] text-[24px] font-semibold leading-snug">
                      {feature.title} — {feature.subtitle}
                    </h3>

                    <p className="max-w-[360px] text-[15px] leading-relaxed text-[var(--text-muted)]">
                      {feature.description}
                    </p>
                  </div>

                  {feature.large && (
                    <div className="-mb-8 -mr-8 mt-8 rounded-tl-3xl border-l border-t border-[var(--border-soft)] bg-[var(--surface-soft)] p-5">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-[var(--secondary)]" />
                          <div className="h-2 w-28 rounded bg-[var(--surface-strong)]" />
                        </div>

                        <div className="h-2 w-full rounded bg-[var(--surface-strong)]/60" />
                        <div className="h-2 w-4/5 rounded bg-[var(--surface-strong)]/60" />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}