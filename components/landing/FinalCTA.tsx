export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--primary)] py-32 text-white">
      <div className="cta-gradient absolute inset-0 opacity-70" />
      <div className="mauve-glow absolute inset-0" />

      <div className="floating-orb absolute left-1/4 top-20 h-24 w-24 rounded-full bg-[var(--secondary-soft)]/20 blur-2xl" />
      <div className="floating-orb-delayed absolute bottom-20 right-1/4 h-32 w-32 rounded-full bg-[var(--secondary)]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display mb-8 text-[52px] font-medium leading-tight tracking-[-0.06em] md:text-[76px]">
          Start from within.
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-white/75">
          Create your space for clarity, discipline and growth. Begin with one
          intention, one session, one step.
        </p>

        <button className="min-w-[280px] rounded-2xl bg-[var(--secondary)] px-12 py-5 text-sm font-semibold text-white shadow-2xl transition duration-300 hover:-translate-y-0.5 hover:bg-[#756692] hover:shadow-[var(--secondary)]/30">
          Start Building Your Space
        </button>
      </div>
    </section>
  );
}