import { Heart, Pin, Quote } from "lucide-react";

export default function InspirationSection() {
  return (
    <section className="bg-white py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6">
<div className="mb-14 max-w-3xl">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--secondary)]">
    Inspiration
  </p>

  <h2 className="font-display text-[44px] font-medium leading-tight tracking-[-0.04em] md:text-[64px]">
    Words to return to.
  </h2>

  <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
    A quiet library of reminders for discipline, focus, resilience and calm
    ambition.
  </p>
</div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Small steps still move you forward.",
            "Discipline is built quietly.",
            "Return to your focus. That is enough.",
          ].map((quote, index) => (
            <div
              key={quote}
              className={`premium-border rounded-[2rem] p-8 ${
                index === 1
                  ? "bg-[var(--secondary)] text-white"
                  : "bg-[var(--surface-soft)]"
              }`}
            >
              <Quote
                size={26}
                className={
                  index === 1 ? "text-white/70" : "text-[var(--secondary)]"
                }
              />

              <p className="font-display mt-8 text-[30px] leading-tight">
                “{quote}”
              </p>

              <div className="mt-8 flex gap-3">
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/40">
                  <Heart size={16} />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/40">
                  <Pin size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}