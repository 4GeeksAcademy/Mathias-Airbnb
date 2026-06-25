import Image from "next/image";
import Link from "next/link";
import { LuStar } from "react-icons/lu";
import type { Listing } from "@/types/listing";

type ListingCardProps = {
  listing: Listing;
  variant?: "grid" | "list";
  selected?: boolean;
};

export function ListingCard({
  listing,
  variant = "grid",
  selected = false,
}: ListingCardProps) {
  return (
    <Link
      href={`/alojamientos/${listing.slug}`}
      className={`group flex overflow-hidden rounded-[1.75rem] border bg-[var(--surface-strong)] shadow-[var(--shadow-soft)] ${
        variant === "list" ? "flex-col" : "flex-col"
      } ${selected ? "border-[var(--accent)]" : "border-[var(--border-soft)]"}`}
    >
      <div className="relative h-60 overflow-hidden">
        <Image
          src={listing.cover}
          alt={listing.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
        <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3">
          <span className="rounded-full bg-[var(--surface-strong)] px-4 py-2 text-xs font-semibold text-[var(--text-primary)] shadow-lg">
            {listing.tag}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-[var(--text-primary)]">{listing.title}</h3>
            <p className="text-sm text-[var(--text-secondary)]">{listing.location}</p>
          </div>
          <span className="flex items-center gap-1 text-sm font-semibold text-[var(--text-primary)]">
            <LuStar className="text-[var(--accent)]" />
            {listing.rating}
          </span>
        </div>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">{listing.summary}</p>

        <div className="flex flex-wrap gap-2 text-xs text-[var(--text-secondary)]">
          <span className="rounded-full bg-[var(--surface-muted)] px-3 py-2">
            {listing.capacity} huéspedes
          </span>
          <span className="rounded-full bg-[var(--surface-muted)] px-3 py-2">{listing.beds} camas</span>
          <span className="rounded-full bg-[var(--surface-muted)] px-3 py-2">{listing.baths} baño</span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3">
          <div>
            <p className="text-base font-bold text-[var(--text-primary)]">{listing.price} UYU</p>
            <p className="text-sm text-[var(--text-secondary)]">{listing.availability}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}