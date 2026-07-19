import { ArrowRight } from "lucide-react";
import DashboardMockup from "./DashboardMockup";
import BrandMark from "./BrandMark";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-[1200px] px-6 pb-20 pt-24 text-center">
      <div className="absolute inset-x-0 top-0 -z-0 mx-auto h-[520px] w-[520px] rounded-full bg-[var(--secondary-soft)]/35 blur-[120px]" />
      <div className="grid-mask absolute inset-0 -z-0 opacity-70" />

      <div className="relative z-10 mx-auto mb-14 max-w-4xl">
       <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-[var(--border-soft)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--secondary)] shadow-sm">
  <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" />
  Everything starts within.
</div>

        <h1 className="font-display text-[52px] font-medium leading-[1.02] tracking-[-0.055em] md:text-[84px]">
          Build the person <br /> you&rsquo;re becoming.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-xl leading-[1.65] text-[var(--text-muted)]">
          A deliberate space to organize your goals, cultivate lasting habits,
          protect your focus, and grow with intention.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="group rounded-xl bg-[var(--primary)] px-12 py-4 text-sm font-semibold text-white shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-black/20">
            <span className="flex items-center justify-center gap-2">
              Claim Your Workspace
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </span>
          </button>

          <button className="rounded-xl border border-[var(--border-soft)] bg-white/65 px-12 py-4 text-sm font-semibold text-[var(--foreground)] backdrop-blur transition hover:bg-white">
            Watch the Philosophy
          </button>
        </div>
      </div>

      <DashboardMockup />
    </section>
  );
}