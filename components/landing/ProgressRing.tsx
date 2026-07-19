export default function ProgressRing() {
  return (
    <div className="relative flex h-48 w-48 items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-[var(--secondary-soft)]/40 blur-2xl" />

      <svg className="relative h-full w-full -rotate-90">
        <circle
          className="text-[var(--surface-strong)]"
          cx="96"
          cy="96"
          r="88"
          fill="transparent"
          stroke="currentColor"
          strokeWidth="6"
        />
        <circle
          className="text-[var(--secondary)]"
          cx="96"
          cy="96"
          r="88"
          fill="transparent"
          stroke="currentColor"
          strokeDasharray="552"
          strokeDashoffset="165"
          strokeLinecap="round"
          strokeWidth="10"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display mb-1 text-[52px] leading-none">70%</span>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)] opacity-60">
          Complete
        </span>
      </div>
    </div>
  );
}