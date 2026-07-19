import { BarChart3, Bell, RefreshCcw, Search } from "lucide-react";
import ProgressRing from "./ProgressRing";
import BrandMark from "./BrandMark";

export default function DashboardMockup() {
  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="floating-orb hero-orb absolute -left-12 top-20 hidden h-28 w-28 rounded-full opacity-70 blur-[1px] md:block" />
      <div className="floating-orb-delayed absolute -right-8 bottom-20 hidden h-20 w-20 rounded-full bg-[var(--secondary-soft)]/70 blur-sm md:block" />

      {/* Mobile mockup */}
      <div className="premium-border soft-glow mx-auto block max-w-[360px] rounded-[2rem] bg-white/90 p-5 backdrop-blur-xl md:hidden">
        <div className="rounded-[1.5rem] bg-white p-6 shadow-inner">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BrandMark size={34} rounded="rounded-full" />
              <span className="font-semibold">Wythin</span>
            </div>

            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--surface-soft)]">
              <Bell size={16} className="text-[var(--text-muted)]" />
            </button>
          </div>

          <div className="mb-8">
            <h3 className="font-display text-[34px] leading-tight tracking-[-0.04em]">
              Good morning,
              <br />
              Leila.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              “Small steps still move you forward.”
            </p>
          </div>

          <div className="premium-border rounded-3xl bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-[var(--secondary-soft)]/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--secondary)]">
                Today&apos;s Focus
              </span>
              <span className="text-xs font-medium text-[var(--secondary)]">
                09:00
              </span>
            </div>

            <h4 className="mb-3 text-xl font-semibold">
              Build Wythin landing page
            </h4>

            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              Refine the interface, design system and focus experience.
            </p>
          </div>

          <div className="premium-border mt-5 rounded-3xl bg-[var(--surface-soft)]/50 p-5">
            <div className="mb-4 flex items-center justify-between">
              <h5 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Habits
              </h5>
              <RefreshCcw size={16} className="text-[var(--secondary)]" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-3.5 w-3.5 rounded-full bg-[var(--secondary)]" />
                <span className="text-sm">Morning Reflection</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-3.5 w-3.5 rounded-full border border-[var(--border-soft)]" />
                <span className="text-sm">Code · 2 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop mockup */}
      <div
        id="preview"
        className="floating-panel deep-glow premium-border relative mx-auto hidden rounded-[2rem] bg-white/85 p-6 backdrop-blur-xl md:block"
      >
        <div className="absolute -inset-1 -z-10 rounded-[2rem] bg-gradient-to-br from-white via-[var(--secondary-soft)]/25 to-transparent blur-xl" />

        <div className="flex h-[640px] gap-8 overflow-hidden rounded-3xl bg-white shadow-inner">
          <aside className="flex w-64 flex-col gap-6 border-r border-[var(--border-soft)] bg-[var(--surface-soft)]/60 p-6 text-left">
            <div className="mb-6 flex items-center gap-3">
              <BrandMark size={40} rounded="rounded-full" />
              <span className="font-bold text-[var(--foreground)]">Wythin</span>
            </div>

            <div className="space-y-4">
              {["Today", "Goals", "Tasks", "Focus", "Journal"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={`rounded-xl px-4 py-3 text-sm ${
                      index === 0
                        ? "bg-white text-[var(--foreground)] shadow-sm"
                        : "text-[var(--text-soft)]"
                    }`}
                  >
                    {item}
                  </div>
                )
              )}
            </div>

            <div className="mt-auto rounded-2xl bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--secondary)]">
                Streak
              </p>
              <p className="mt-2 text-2xl font-semibold">12 days</p>
            </div>
          </aside>

          <div className="relative flex-1 bg-white p-10 text-left">
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[var(--secondary-soft)]/30 blur-3xl" />

            <div className="relative z-10 mb-12 flex items-center justify-between">
              <div>
                <h3 className="font-display mb-2 text-[34px] tracking-[-0.04em] text-[var(--foreground)]">
                  Good morning, Leila.
                </h3>
                <p className="text-[var(--text-muted)] opacity-75">
                  &ldquo;Small steps still move you forward.&rdquo;
                </p>
              </div>

              <div className="flex gap-4">
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white/80 transition hover:bg-[var(--surface-soft)]">
                  <Search size={18} className="text-[var(--text-muted)]" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-soft)]">
                  <Bell size={18} className="text-[var(--text-muted)]" />
                </button>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-12 gap-8">
              <div className="col-span-7 space-y-8">
                <div className="premium-border rounded-3xl bg-white p-8 shadow-sm">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <span className="rounded-full bg-[var(--secondary-soft)]/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--secondary)]">
                      Today&rsquo;s Focus
                    </span>
                    <span className="text-sm font-medium text-[var(--secondary)]">
                      09:00 — 11:00
                    </span>
                  </div>

                  <h4 className="mb-3 text-2xl font-semibold">
                    Build Wythin landing page
                  </h4>
                  <p className="leading-relaxed text-[var(--text-muted)]">
                    Refine the interface, design system and daily focus
                    experience.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="premium-border rounded-3xl bg-[var(--surface-soft)]/45 p-6">
                    <div className="mb-5 flex items-center justify-between">
                      <h5 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                        Habits
                      </h5>
                      <RefreshCcw
                        size={18}
                        className="text-[var(--secondary)]"
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-4 w-4 rounded-full bg-[var(--secondary)]" />
                        <span className="text-sm">Morning Reflection</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-4 w-4 rounded-full border-2 border-[var(--border-soft)]" />
                        <span className="text-sm">Code · 2 hours</span>
                      </div>
                    </div>
                  </div>

                  <div className="premium-border rounded-3xl bg-[var(--surface-soft)]/45 p-6">
                    <div className="mb-5 flex items-center justify-between">
                      <h5 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                        Insights
                      </h5>
                      <BarChart3
                        size={18}
                        className="text-[var(--secondary)]"
                      />
                    </div>

                    <div className="flex h-14 items-end gap-1">
                      <div className="h-2/3 flex-1 rounded-sm bg-[var(--secondary)]/20" />
                      <div className="h-1/2 flex-1 rounded-sm bg-[var(--secondary)]/20" />
                      <div className="h-full flex-1 rounded-sm bg-[var(--secondary)]/40" />
                      <div className="h-3/4 flex-1 rounded-sm bg-[var(--secondary)]/20" />
                      <div className="h-2/3 flex-1 rounded-sm bg-[var(--secondary)]/60" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-5">
                <div className="premium-border flex h-full flex-col items-center justify-center rounded-[2rem] bg-[var(--surface-soft)] p-8">
                  <ProgressRing />

                  <p className="mt-8 max-w-[220px] text-center text-sm font-medium leading-relaxed text-[var(--text-muted)]">
                    You are 15 minutes ahead of your typical daily pace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}