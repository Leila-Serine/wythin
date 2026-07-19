const planets = [
  { label: "Goal", angle: -90 },
  { label: "Action", angle: -18 },
  { label: "Focus", angle: 54 },
  { label: "Reflection", angle: 126 },
  { label: "Progress", angle: 198 },
];

export default function GrowthLoop() {
  const planetRadius = 205;
  const orbitSize = 370;

  return (
    <section id="growth" className="mx-auto max-w-[1200px] px-6 py-20 md:py-24">
      <div className="premium-border overflow-hidden rounded-[2rem] bg-white p-6 md:p-10">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--secondary)]">
          Growth Loop
        </p>

        <h2 className="font-display mb-10 max-w-4xl text-[38px] font-medium leading-tight tracking-[-0.04em] md:text-[56px]">
          A simple loop for lasting growth.
        </h2>

        {/* Mobile version */}
        <div className="grid gap-3 md:hidden">
          {planets.map((planet, index) => (
            <div
              key={planet.label}
              className="premium-border flex items-center gap-4 rounded-2xl bg-[var(--surface-soft)] p-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--secondary-soft)] text-sm font-semibold text-[var(--secondary)]">
                {index + 1}
              </div>

              <div>
                <p className="font-semibold text-[var(--foreground)]">
                  {planet.label}
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  {getStepDescription(planet.label)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop / tablet version */}
        <div className="hidden justify-center md:flex">
          <div className="relative h-[520px] w-full max-w-[720px]">
            <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--secondary-soft)]/16 blur-3xl" />

            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--border-soft)]"
              style={{
                width: `${orbitSize}px`,
                height: `${orbitSize}px`,
              }}
            />

            <div className="absolute left-1/2 top-1/2 z-10 flex h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white shadow-[0_20px_70px_rgba(102,88,125,0.08)]">
              <h3 className="font-display text-center text-[44px] leading-[0.95] tracking-[-0.04em] text-[var(--foreground)]">
                Growth
                <br />
                Loop
              </h3>
            </div>

            <div
              className="orbit-path-spin absolute left-1/2 top-1/2"
              style={{
                width: `${orbitSize}px`,
                height: `${orbitSize}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--secondary)] shadow-[0_0_24px_rgba(102,88,125,0.45)]" />
            </div>

            {planets.map((planet) => {
              const rad = (planet.angle * Math.PI) / 180;
              const x = Math.cos(rad) * planetRadius;
              const y = Math.sin(rad) * planetRadius;

              return (
                <div
                  key={planet.label}
                  className="absolute left-1/2 top-1/2 z-20"
                  style={{
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  }}
                >
                  <div className="flex h-[102px] w-[102px] items-center justify-center rounded-full border border-[var(--border-soft)] bg-white shadow-sm">
                    <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[var(--secondary-soft)]/55 px-3 text-center">
                      <span className="text-[14px] font-semibold leading-tight text-[var(--foreground)]">
                        {planet.label}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function getStepDescription(label: string) {
  switch (label) {
    case "Goal":
      return "Define your direction.";
    case "Action":
      return "Turn intention into movement.";
    case "Focus":
      return "Protect your attention.";
    case "Reflection":
      return "Understand your patterns.";
    case "Progress":
      return "See your growth clearly.";
    default:
      return "";
  }
}