import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { ListingCard } from "@/component/listing-card";
import { listings } from "@/app/lib/listings";
import type { TrendSection as TrendSectionType } from "@/types/listing";

type TrendSectionProps = {
  section: TrendSectionType;
};

export function TrendSection({ section }: TrendSectionProps) {
  const visibleListings = section.listingSlugs
    .map((slug) => listings.find((listing) => listing.slug === slug))
    .filter((listing) => listing !== undefined);

  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-end justify-between gap-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-[var(--text-primary)] md:text-3xl">
            {section.title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)] md:text-base">
            {section.description}
          </p>
        </div>

        <Link
          href="/alojamientos#mapa"
          className="hidden items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-strong)] px-4 py-3 text-sm font-semibold text-[var(--text-primary)] shadow-[var(--shadow-soft)] md:flex"
          aria-label="Ir al mapa de alojamientos"
        >
          Ver mapa
          <LuArrowRight className="text-base" />
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {visibleListings.map((listing) => (
          <ListingCard key={listing.slug} listing={listing} />
        ))}
      </div>

      <Link
        href="/alojamientos#mapa"
        className="flex items-center justify-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-strong)] px-4 py-3 text-sm font-semibold text-[var(--text-primary)] shadow-[var(--shadow-soft)] md:hidden"
        aria-label="Ir al mapa de alojamientos"
      >
        Ver mapa
        <LuArrowRight className="text-base" />
      </Link>
    </section>
  );
}