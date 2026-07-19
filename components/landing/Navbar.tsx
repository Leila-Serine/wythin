import { navLinks } from "@/data/landing";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-[var(--background)]/78 backdrop-blur-xl">
      <div className="relative flex h-20 w-full items-center justify-between px-8 lg:px-14">
        {/* Left: Brand */}
        <a
          href="#"
          className="font-display text-[32px] tracking-[-0.06em] text-[var(--primary)]"
        >
          Wythin
        </a>

        {/* Center: Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-12 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--primary)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="hidden items-center gap-6 md:flex">
          <button className="text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--primary)]">
            Sign In
          </button>

          <button className="rounded-xl bg-[var(--primary)] px-9 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}