import Image from "next/image";
import { notFound } from "next/navigation";
import { LuBadgeCheck, LuCalendarDays, LuMapPin, LuShieldCheck, LuStar, LuUsers } from "react-icons/lu";
import { AppShell } from "@/component/app-shell";
import { ListingCard } from "@/component/listing-card";
import { getListingBySlug, listings } from "@/app/lib/listings";

export function generateStaticParams() {
  return listings.map((listing) => ({ slug: listing.slug }));
}

type ListingDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ListingDetailPage({ params }: ListingDetailPageProps) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);

  if (!listing) {
    notFound();
  }

  const relatedListings = listings
    .filter((currentListing) => currentListing.slug !== listing.slug)
    .slice(0, 3);

  return (
    <AppShell showCompactSearch>
      <div className="flex flex-col gap-8">
        <section className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Alojamiento destacado
          </p>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-[var(--text-primary)] md:text-5xl">
                {listing.title}
              </h1>
              <p className="mt-3 flex items-center gap-2 text-sm text-[var(--text-secondary)] md:text-base">
                <LuMapPin className="text-[var(--accent)]" />
                {listing.location}
              </p>
            </div>
          
          </div>
        </section>

        <section className="grid gap-3 md:grid-cols-[1.3fr_minmax(0,1fr)]">
          <div className="relative min-h-[320px] overflow-hidden rounded-[2rem]">
            <Image
              src={listing.gallery[0]}
              alt={listing.title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 60vw, 100vw"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {listing.gallery.slice(1, 5).map((image, index) => (
              <div key={`${listing.slug}-${index}`} className="relative min-h-[156px] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={image}
                  alt={`${listing.title} ${index + 2}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 20vw, 50vw"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-[minmax(0,1fr)_360px] md:items-start">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-strong)] p-6 shadow-[var(--shadow-soft)]">
              <h2 className="text-2xl font-extrabold text-[var(--text-primary)]">
                Alojamiento entero en {listing.city}, {listing.country}
              </h2>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {listing.capacity} huéspedes · {listing.beds} camas · {listing.baths} baño · {listing.availability}
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-4">
                <div className="rounded-[1.5rem] border border-[var(--border-soft)] p-4">
                  <p className="text-sm text-[var(--text-secondary)]">Popularidad</p>
                  <p className="mt-2 text-base font-bold text-[var(--text-primary)]">{listing.tag}</p>
                </div>
                <div className="rounded-[1.5rem] border border-[var(--border-soft)] p-4">
                  <p className="text-sm text-[var(--text-secondary)]">Anfitrión</p>
                  <p className="mt-2 text-base font-bold text-[var(--text-primary)]">{listing.host}</p>
                </div>
                <div className="rounded-[1.5rem] border border-[var(--border-soft)] p-4">
                  <p className="text-sm text-[var(--text-secondary)]">Puntaje</p>
                  <p className="mt-2 flex items-center gap-2 text-base font-bold text-[var(--text-primary)]">
                    <LuStar className="text-[var(--accent)]" />
                    {listing.rating}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-[var(--border-soft)] p-4">
                  <p className="text-sm text-[var(--text-secondary)]">Reseñas</p>
                  <p className="mt-2 text-base font-bold text-[var(--text-primary)]">{listing.reviews}</p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-[1.5rem] bg-[var(--surface)] p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface-muted)] text-[var(--accent)]">
                  <LuBadgeCheck className="text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--text-primary)]">{listing.host}</p>
                  <p className="text-sm text-[var(--text-secondary)]">{listing.hostStatus}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-strong)] p-6 shadow-[var(--shadow-soft)]">
              <h2 className="text-2xl font-extrabold text-[var(--text-primary)]">Sobre este lugar</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)] md:text-base">
                {listing.description}
              </p>

              <div className="mt-6 space-y-4">
                {listing.benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3 rounded-[1.25rem] bg-[var(--surface)] p-4">
                    <span className="mt-1 text-[var(--accent)]">
                      <LuShieldCheck className="text-lg" />
                    </span>
                    <p className="text-sm leading-6 text-[var(--text-secondary)]">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-strong)] p-6 shadow-[var(--shadow-soft)]">
              <h2 className="text-2xl font-extrabold text-[var(--text-primary)]">Amenidades y beneficios</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {listing.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-secondary)]"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="md:sticky md:top-32">
            <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-strong)] p-6 shadow-[var(--shadow-soft)]">
              <p className="rounded-full bg-[var(--surface-muted)] px-4 py-2 text-sm font-semibold text-[var(--accent)]">
                Los precios incluyen todas las tarifas
              </p>
              <p className="mt-6 text-3xl font-extrabold text-[var(--text-primary)]">
                {listing.price} UYU
                <span className="ml-2 text-base font-medium text-[var(--text-secondary)]">por 2 noches</span>
              </p>

              <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--border-soft)]">
                <div className="bg-[var(--surface-strong)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                    Llegada
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
                    <LuCalendarDays className="text-[var(--accent)]" />
                    24/7/2026
                  </p>
                </div>
                <div className="bg-[var(--surface-strong)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                    Salida
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
                    <LuCalendarDays className="text-[var(--accent)]" />
                    26/7/2026
                  </p>
                </div>
                <div className="col-span-2 bg-[var(--surface-strong)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                    Huéspedes
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
                    <LuUsers className="text-[var(--accent)]" />
                    1 huésped de hasta {listing.capacity}
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-full bg-[var(--accent)] px-5 py-4 text-sm font-semibold text-[var(--text-inverse)]"
              >
                Reserva
              </button>
              <p className="mt-4 text-center text-sm text-[var(--text-secondary)]">
                No se hará ningún cargo por el momento.
              </p>
            </div>
          </aside>
        </section>

        <section className="flex flex-col gap-5">
          <h2 className="text-2xl font-extrabold tracking-tight text-[var(--text-primary)] md:text-3xl">
            Más alojamientos para comparar
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {relatedListings.map((relatedListing) => (
              <ListingCard key={relatedListing.slug} listing={relatedListing} />
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}