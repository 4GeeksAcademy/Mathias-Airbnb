import Link from "next/link";
import { LuCalendarDays, LuMapPin, LuSearch, LuUsers } from "react-icons/lu";

type CompactSearchBarProps = {
  className?: string;
};

export function CompactSearchBar({ className = "" }: CompactSearchBarProps) {
  return (
    <Link
      href="/alojamientos"
      className={`flex w-full items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-strong)] p-2 shadow-[var(--shadow-soft)] ${className}`}
    >
      <span className="flex min-w-0 flex-1 items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-[var(--text-primary)]">
        <LuMapPin className="shrink-0 text-base text-[var(--accent)]" />
        <span className="truncate">Alojamientos en Buenos Aires</span>
      </span>
      <span className="hidden h-8 w-px bg-[var(--border-soft)] md:block" />
      <span className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm text-[var(--text-secondary)] md:flex">
        <LuCalendarDays className="text-base" />
        <span>Cualquier fin de semana</span>
      </span>
      <span className="hidden h-8 w-px bg-[var(--border-soft)] md:block" />
      <span className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm text-[var(--text-secondary)] md:flex">
        <LuUsers className="text-base" />
        <span>¿Cuántos?</span>
      </span>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--text-inverse)]">
        <LuSearch className="text-lg" />
      </span>
    </Link>
  );
}