import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-[var(--surface-elevated)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-[var(--text-secondary)] md:flex-row md:items-center md:justify-between md:px-8">
        <p>© 2026 Airbnb Buenos Aires. Inspirado para exploración urbana.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/servicios" className="hover:text-[var(--text-primary)]">
            Política
          </Link>
          <Link href="/servicios" className="hover:text-[var(--text-primary)]">
            Privacidad
          </Link>
          <Link href="/servicios" className="hover:text-[var(--text-primary)]">
            Términos de seguridad
          </Link>
        </div>
      </div>
    </footer>
  );
}