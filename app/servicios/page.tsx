import { AppShell } from "@/component/app-shell";
import { HighlightGrid } from "@/component/highlight-grid";
import { serviceHighlights } from "@/app/lib/listings";

const supportBlocks = [
  {
    title: "Política",
    description:
      "Resumen legible de reglas de estadía, tiempos de cancelación y compromiso de transparencia para la reserva.",
  },
  {
    title: "Privacidad",
    description:
      "Explica cómo se presenta la información del usuario, qué datos de viaje se muestran y qué permanece protegido.",
  },
  {
    title: "Seguridad",
    description:
      "Agrupa ayuda, soporte y recordatorios prácticos para reservas, pagos y comunicación con el anfitrión.",
  },
];

export default function ServicesPage() {
  return (
    <AppShell>
      <div className="flex flex-col gap-8">
        <section className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-elevated)] p-6 shadow-[var(--shadow-soft)] md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Servicios
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-[var(--text-primary)] md:text-5xl">
            Información práctica ordenada para decidir con menos fricción.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] md:text-base">
            La sección agrupa políticas, privacidad y seguridad dentro del mismo ecosistema de navegación. Sirve como respaldo para el usuario cuando compara opciones o está por confirmar una reserva.
          </p>
        </section>

        <HighlightGrid
          eyebrow="Soporte"
          title="Beneficios que se entienden rápido en móvil"
          description="La misma información que aparece comprimida en tarjetas y resultados se expande aquí en un lenguaje corto, visual y consistente."
          items={serviceHighlights}
          ctaHref="/"
          ctaLabel="Volver al inicio"
        />

        <section className="grid gap-5 md:grid-cols-3">
          {supportBlocks.map((block) => (
            <article
              key={block.title}
              className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-strong)] p-6 shadow-[var(--shadow-soft)]"
            >
              <h2 className="text-xl font-bold text-[var(--text-primary)]">{block.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{block.description}</p>
            </article>
          ))}
        </section>
      </div>
    </AppShell>
  );
}