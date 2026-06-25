"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { LuExternalLink, LuMapPin, LuStar } from "react-icons/lu";
import type { Listing } from "@/types/listing";

type MapPanelProps = {
  listings: Listing[];
};

export function MapPanel({ listings }: MapPanelProps) {
  const [selectedSlug, setSelectedSlug] = useState(listings[0]?.slug ?? "");

  const selectedListing = useMemo(
    () => listings.find((listing) => listing.slug === selectedSlug) ?? listings[0],
    [listings, selectedSlug],
  );

  if (!selectedListing) {
    return (
      <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-strong)] p-6 shadow-[var(--shadow-soft)]">
        <h3 className="text-lg font-bold text-[var(--text-primary)]">Mapa sin resultados</h3>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          Ajustá el filtro para mostrar alojamientos y marcadores en el mapa.
        </p>
      </div>
    );
  }

  const googleQuery = encodeURIComponent(
    `${selectedListing.location}, ${selectedListing.city}, ${selectedListing.country}`,
  );
  const googleMapEmbedUrl = `https://www.google.com/maps?q=${googleQuery}&output=embed`;
  const googleMapsExternalUrl = `https://www.google.com/maps/search/?api=1&query=${googleQuery}`;

  return (
    <div className="overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-strong)] shadow-[var(--shadow-soft)]">
      <div className="relative min-h-[320px] overflow-hidden md:min-h-[620px]">
        <iframe
          title={`Mapa de ${selectedListing.title}`}
          src={googleMapEmbedUrl}
          className="h-full min-h-[320px] w-full border-0 md:min-h-[620px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

        <div className="absolute left-4 right-4 top-4 flex gap-2 overflow-x-auto pb-1">
          {listings.map((listing) => {
            const isSelected = listing.slug === selectedListing.slug;

            return (
              <button
                key={listing.slug}
                type="button"
                onClick={() => setSelectedSlug(listing.slug)}
                className={`shrink-0 rounded-full border px-3 py-2 text-sm font-bold shadow-lg ${
                  isSelected
                    ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--text-inverse)]"
                    : "border-[var(--border-soft)] bg-[var(--surface-strong)] text-[var(--text-primary)]"
                }`}
              >
                {listing.price}
              </button>
            );
          })}
        </div>

        <div className="absolute bottom-4 left-4 right-4 rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--surface-elevated)] p-4 shadow-[var(--shadow-soft)] backdrop-blur-xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)]">
                <LuMapPin className="text-[var(--accent)]" />
                {selectedListing.city}, {selectedListing.country}
              </p>
              <h3 className="mt-2 text-xl font-extrabold text-[var(--text-primary)]">
                {selectedListing.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                {selectedListing.summary}
              </p>
            </div>
            <span className="flex items-center gap-1 rounded-full bg-[var(--surface-strong)] px-3 py-2 text-sm font-semibold text-[var(--text-primary)]">
              <LuStar className="text-[var(--accent)]" />
              {selectedListing.rating}
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="text-sm text-[var(--text-secondary)]">
              {selectedListing.capacity} huéspedes · {selectedListing.availability}
            </p>
            <div className="flex items-center gap-2">
              <a
                href={googleMapsExternalUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-strong)] px-4 py-3 text-sm font-semibold text-[var(--text-primary)]"
              >
                <span>Google Maps</span>
                <LuExternalLink className="text-base" />
              </a>
              <Link
                href={`/alojamientos/${selectedListing.slug}`}
                className="rounded-full bg-[var(--surface-contrast)] px-4 py-3 text-sm font-semibold text-[var(--text-inverse)]"
              >
                Ver detalle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}