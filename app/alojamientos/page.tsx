import { AppShell } from "@/component/app-shell";
import { ListingCard } from "@/component/listing-card";
import { MapPanel } from "@/component/map-panel";
import { listings } from "@/app/lib/listings";

type ListingsPageProps = {
  searchParams: Promise<{
    destino?: string;
    fechas?: string;
    huespedes?: string;
  }>;
};

function normalizeValue(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getFilteredListings({
  destination,
  dates,
  guests,
}: {
  destination: string;
  dates: string;
  guests: number | null;
}) {
  const normalizedDestination = normalizeValue(destination);
  const normalizedDates = normalizeValue(dates);

  return listings.filter((listing) => {
    const destinationMatches =
      normalizedDestination.length === 0 ||
      normalizeValue(`${listing.title} ${listing.city} ${listing.country} ${listing.location}`).includes(
        normalizedDestination,
      );

    const datesMatches =
      normalizedDates.length === 0 ||
      normalizeValue(listing.availability).includes(normalizedDates);

    const guestsMatches = guests === null || listing.capacity >= guests;

    return destinationMatches && datesMatches && guestsMatches;
  });
}

export default async function ListingsPage({ searchParams }: ListingsPageProps) {
  const params = await searchParams;
  const destination = params.destino ?? "";
  const dates = params.fechas ?? "";
  const guestsValue = Number(params.huespedes);
  const guests = Number.isFinite(guestsValue) && guestsValue > 0 ? guestsValue : null;

  const filteredListings = getFilteredListings({
    destination,
    dates,
    guests,
  });

  const headlineLocation = destination.trim().length > 0 ? destination : "Buenos Aires";

  return (
    <AppShell showCompactSearch>
      <div className="flex flex-col gap-8">

        <section className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(320px,480px)] md:items-start">
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                {filteredListings.length} resultados
              </p>
              <h1 className="max-w-2xl text-3xl font-extrabold tracking-tight text-[var(--text-primary)] md:text-5xl">
                Alojamientos en {headlineLocation}
              </h1>
            </div>

            {filteredListings.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-2">
                {filteredListings.map((listing, index) => (
                  <ListingCard
                    key={listing.slug}
                    listing={listing}
                    variant="list"
                    selected={index === 0}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--surface-strong)] p-6 shadow-[var(--shadow-soft)]">
                <h2 className="text-xl font-bold text-[var(--text-primary)]">No encontramos alojamientos</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                  Probá con otro destino o bajá la cantidad de huéspedes para ampliar resultados.
                </p>
              </div>
            )}
          </div>

          <div id="mapa" className="md:sticky md:top-32">
            <MapPanel listings={filteredListings} />
          </div>
        </section>
      </div>
    </AppShell>
  );
}