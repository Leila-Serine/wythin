export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-white py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-16 px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-6">
          <span className="font-display text-[32px] tracking-[-0.06em] text-[var(--primary)]">
            Wythin
          </span>
          <p className="leading-relaxed text-[var(--text-muted)]">
            A calm operating system for clarity, discipline and intentional growth.
          </p>
        </div>

        <FooterColumn
          title="Product"
          links={["Features", "Growth Loop", "Integrations"]}
        />

        <FooterColumn
          title="Company"
          links={["Philosophy", "Terms", "Privacy"]}
        />

        <FooterColumn
          title="Connect"
          links={["Twitter", "Newsletter", "Contact"]}
        />
      </div>

      <div className="mx-auto mt-20 max-w-[1200px] border-t border-[var(--border-soft)] px-6 pt-8 text-center">
        <p className="text-xs text-[var(--text-muted)] opacity-50">
          © 2026 Wythin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="mb-2 font-bold text-[var(--foreground)]">{title}</p>
      {links.map((link) => (
        <a
          key={link}
          href="#"
          className="text-[var(--text-muted)] transition hover:text-[var(--secondary)]"
        >
          {link}
        </a>
      ))}
    </div>
  );
}