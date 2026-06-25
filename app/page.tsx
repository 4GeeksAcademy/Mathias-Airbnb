import { AppShell } from "@/component/app-shell";
import { HighlightGrid } from "@/component/highlight-grid";
import { TrendSection } from "@/component/trend-section";
import {
  experienceHighlights,
  serviceHighlights,
  trendSections,
} from "@/app/lib/listings";

export default function Home() {
  return (
    <AppShell showTopFilter>
      <div className="flex flex-col gap-10 md:gap-14">
        <section className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-elevated)] p-6 shadow-[var(--shadow-soft)] md:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
              Mobile-first · Buenos Aires
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-extrabold tracking-tight text-[var(--text-primary)] md:text-6xl md:leading-[1.05]">
              Encuentra estadías, experiencias y servicios sin salir del mismo flujo.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] md:text-base">
              La home concentra búsqueda rápida, tendencias de alojamientos y accesos directos a la exploración por mapa para que el viaje empiece bien desde 375 px.
            </p>
          </div>
        </section>

        {trendSections.map((section) => (
          <TrendSection key={section.slug} section={section} />
        ))}

        <div className="grid gap-6 md:grid-cols-2">
          <HighlightGrid
            eyebrow="Experiencias"
            title="Planes que completan la estadía"
            description="La sección de experiencias prioriza recorridos, eventos y recomendaciones curadas para que el usuario pase de comparar alojamientos a imaginar el viaje completo."
            items={experienceHighlights}
            ctaHref="/experiencias"
            ctaLabel="Explorar experiencias"
          />
          <HighlightGrid
            eyebrow="Servicios"
            title="Información crítica visible desde el inicio"
            description="Servicios presenta beneficios prácticos, amenidades y condiciones del viaje con una jerarquía simple, útil para decidir rápido desde el móvil."
            items={serviceHighlights}
            ctaHref="/servicios"
            ctaLabel="Ver servicios"
          />
        </div>
      </div>
    </AppShell>
  );
}
