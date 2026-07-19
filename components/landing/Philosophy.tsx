import { philosophyCards } from "@/data/landing";

export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-white py-28 md:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--secondary)]">
            Philosophy
          </p>
          <h2 className="font-display text-[44px] font-medium leading-tight tracking-[-0.04em] md:text-[64px]">
            Not just productivity. <br className="hidden md:block" /> Personal
            growth.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {philosophyCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="premium-border group rounded-3xl bg-white p-10 transition duration-300 hover:shadow-lg hover:shadow-[var(--secondary)]/5"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface-soft)] text-[var(--secondary)]">
                  <Icon size={28} />
                </div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--secondary)]">
  {card.label}
</p>
                <h3 className="mb-4 text-[28px] font-semibold">
                  {card.title}
                </h3>
                <p className="leading-relaxed text-[var(--text-muted)]">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}