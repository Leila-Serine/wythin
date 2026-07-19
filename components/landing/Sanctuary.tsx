import { Target, Zap } from "lucide-react";

export default function Sanctuary() {
  return (
    <section className="overflow-hidden bg-[var(--surface-soft)] py-20 md:py-[120px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-6 md:gap-20 lg:grid-cols-2">
        <div>
          <h2 className="font-display mb-8 text-[42px] font-medium leading-tight tracking-[-0.04em] md:text-[64px]">
            A Sanctuary for <br className="hidden md:block" /> Intentional Work.
          </h2>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-[var(--text-muted)] md:mb-12 md:text-xl">
            Growth requires space. Wythin is designed to be that space — a quiet
            digital retreat where your focus is protected and your progress is
            celebrated.
          </p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h4 className="font-display mb-3 text-[26px] text-[var(--secondary)]">
                Editorial Layouts
              </h4>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                Wide, breathing spaces that feel more like a premium publication
                than a spreadsheet.
              </p>
            </div>

            <div>
              <h4 className="font-display mb-3 text-[26px] text-[var(--secondary)]">
                Quiet Feedback
              </h4>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                Gentle visual cues that guide you without demanding your
                attention.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 hidden -rotate-6 rounded-[2rem] bg-[var(--secondary)]/5 blur-3xl md:block" />

          <div className="premium-border relative z-10 rounded-[2rem] bg-white/80 p-5 shadow-2xl backdrop-blur md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--secondary-soft)] text-[var(--secondary)]">
                  <Target size={24} />
                </div>
                <h5 className="mb-3 text-lg font-semibold">
                  Today&rsquo;s Focus
                </h5>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  Protect one meaningful objective before the day gets noisy.
                </p>
              </div>

              <div className="rounded-3xl bg-[var(--secondary)] p-6 text-white shadow-xl shadow-[var(--secondary)]/20">
                <Zap className="mb-5" size={24} />
                <h5 className="mb-3 text-lg font-semibold">Quiet Energy</h5>
                <p className="text-sm leading-relaxed text-white/75">
                  Motivation without pressure. Progress without noise.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm md:col-span-2">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">
                  Daily note
                </p>
                <p className="font-display text-[28px] leading-tight md:text-[30px]">
                  What matters most today?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}