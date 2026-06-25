"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuCalendarDays, LuMapPin, LuSearch, LuUsers } from "react-icons/lu";

export function HeroFilter() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("2");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams();

    if (destination.trim()) {
      params.set("destino", destination.trim());
    }

    if (dates.trim()) {
      params.set("fechas", dates.trim());
    }

    if (guests.trim()) {
      params.set("huespedes", guests.trim());
    }

    const queryString = params.toString();
    router.push(queryString ? `/alojamientos?${queryString}` : "/alojamientos");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-strong)] p-3 shadow-[var(--shadow-soft)]"
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-center">
        <label className="flex flex-1 items-center gap-3 rounded-[1.5rem] px-4 py-4 md:border-r md:border-[var(--border-soft)]">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-muted)] text-[var(--accent)]">
            <LuMapPin className="text-lg" />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="text-sm font-semibold text-[var(--text-primary)]">Dónde</span>
            <input
              type="text"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              placeholder="Explora destinos"
              className="bg-transparent text-sm text-[var(--text-secondary)] outline-none placeholder:text-[var(--text-secondary)]"
              aria-label="Destino"
            />
          </span>
        </label>

        <label className="flex flex-1 items-center gap-3 rounded-[1.5rem] px-4 py-4 md:border-r md:border-[var(--border-soft)]">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-muted)] text-[var(--accent)]">
            <LuCalendarDays className="text-lg" />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="text-sm font-semibold text-[var(--text-primary)]">Fechas</span>
            <input
              type="date"
              value={dates}
              onChange={(event) => setDates(event.target.value)}
              placeholder="Agrega fechas"
              className="bg-transparent text-sm text-[var(--text-secondary)] outline-none placeholder:text-[var(--text-secondary)]"
              aria-label="Fechas"
            />
          </span>
        </label>

        <label className="flex flex-1 items-center gap-3 rounded-[1.5rem] px-4 py-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-muted)] text-[var(--accent)]">
            <LuUsers className="text-lg" />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="text-sm font-semibold text-[var(--text-primary)]">Quién</span>
            <input
              type="number"
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
              placeholder="¿Cuántos?"
              className="bg-transparent text-sm text-[var(--text-secondary)] outline-none placeholder:text-[var(--text-secondary)]"
              aria-label="Cantidad de huéspedes"
              inputMode="numeric"
            />
          </span>
        </label>

        <button
          type="submit"
          className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-[var(--text-inverse)] md:w-auto"
        >
          <LuSearch className="text-base" />
          <span>Buscar</span>
        </button>
      </div>
    </form>
  );
}