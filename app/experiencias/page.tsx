import { HighlightGrid } from "@/component/highlight-grid";
import { AppShell } from "@/component/app-shell";
import { experienceHighlights } from "@/app/lib/listings";

const editorialBlocks = [
  {
    title: "Recorridos de barrio",
    description:
      "Caminatas cortas por Palermo, Recoleta y San Telmo para pasar de la reserva al plan real en pocos taps.",
  },
  {
    title: "Agenda cultural próxima",
    description:
      "Selección de eventos y visitas recomendadas para completar un fin de semana sin fricción en la búsqueda.",
  },
  {
    title: "Experiencias nocturnas",
    description:
      "Opciones pensadas para usuarios que priorizan gastronomía, coctelería y salidas cerca del alojamiento elegido.",
  },
];

export default function ExperiencesPage() {
  return (
    <AppShell>
      <div className="flex flex-col gap-8">
        <section className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-elevated)] p-6 shadow-[var(--shadow-soft)] md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Experiencias
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-[var(--text-primary)] md:text-5xl">
            Planes editoriales para sumar valor después de elegir dónde dormir.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] md:text-base">
            Esta página extiende la navegación principal con actividades y recomendaciones visibles sin recargar la app. Mantiene el mismo lenguaje visual que la home para que el flujo se sienta continuo.
          </p>
        </section>

        <HighlightGrid
          eyebrow="Curaduría"
          title="Descubrimiento simple y enfocado"
          description="Cada bloque comunica qué puede hacer el usuario dentro de la sección y por qué le conviene explorar más allá del alojamiento."
          items={experienceHighlights}
          ctaHref="/alojamientos"
          ctaLabel="Volver a alojamientos"
        />

        <section className="grid gap-5 md:grid-cols-3">
          {editorialBlocks.map((block) => (
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