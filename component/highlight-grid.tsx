import Link from "next/link";
import type { IconType } from "react-icons";

type HighlightItem = {
  title: string;
  description: string;
  icon: IconType;
};

type HighlightGridProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: HighlightItem[];
  ctaHref: string;
  ctaLabel: string;
};

export function HighlightGrid({
  eyebrow,
  title,
  description,
  items,
  ctaHref,
  ctaLabel,
}: HighlightGridProps) {
  return (
    <section className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-strong)] p-6 shadow-[var(--shadow-soft)] md:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[var(--text-primary)] md:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--text-secondary)] md:text-base">
        {description}
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map(({ title: itemTitle, description: itemDescription, icon: Icon }) => (
          <article
            key={itemTitle}
            className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--surface)] p-5"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-muted)] text-[var(--accent)]">
              <Icon className="text-xl" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-[var(--text-primary)]">{itemTitle}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{itemDescription}</p>
          </article>
        ))}
      </div>

      <Link
        href={ctaHref}
        className="mt-6 inline-flex rounded-full bg-[var(--surface-contrast)] px-5 py-3 text-sm font-semibold text-[var(--text-inverse)]"
      >
        {ctaLabel}
      </Link>
    </section>
  );
}