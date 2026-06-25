"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LuCircleHelp,
  LuGlobe,
  LuHouse,
  LuMoonStar,
  LuSparkles,
  LuWaves,
} from "react-icons/lu";
import { CompactSearchBar } from "@/component/compact-search-bar";

const navigationItems = [
  { href: "/", label: "Todo", icon: LuGlobe },
  { href: "/alojamientos", label: "Alojamientos", icon: LuHouse },
  { href: "/experiencias", label: "Experiencias", icon: LuSparkles },
  { href: "/servicios", label: "Servicios", icon: LuWaves },
];

const languages = ["Español", "English", "Português"];

type SiteHeaderProps = {
  showCompactSearch: boolean;
  onToggleTheme: () => void;
};

export function SiteHeader({ showCompactSearch, onToggleTheme }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-soft)] bg-[var(--surface-elevated)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 md:px-8">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-[var(--accent)]"
          >
            <span className="rounded-full bg-[var(--surface-strong)] px-3 py-2 shadow-[var(--shadow-soft)]">
              A
            </span>
            <span className="font-[var(--font-heading)]">airbnb</span>
          </Link>

          {showCompactSearch ? (
            <div className="hidden flex-1 justify-center md:flex">
              <CompactSearchBar className="max-w-3xl" />
            </div>
          ) : (
            <nav className="hidden items-center justify-center gap-2 md:flex">
              {navigationItems.map(({ href, label, icon: Icon }) => {
                const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

                return (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold ${
                      isActive
                        ? "bg-[var(--surface-strong)] text-[var(--text-primary)] shadow-[var(--shadow-soft)]"
                        : "text-[var(--text-secondary)] hover:bg-[var(--surface-strong)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    <Icon className="text-base" />
                    <span>{label}</span>
                  </Link>
                );
              })}
            </nav>
          )}

          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsLanguageMenuOpen((currentValue) => !currentValue)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-strong)] text-[var(--text-primary)] shadow-[var(--shadow-soft)] hover:-translate-y-0.5"
                aria-label="Cambiar idioma"
                aria-expanded={isLanguageMenuOpen}
              >
                <LuGlobe className="text-lg" />
              </button>

              {isLanguageMenuOpen ? (
                <div className="absolute right-0 top-14 min-w-36 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-strong)] p-2 shadow-[var(--shadow-soft)]">
                  {languages.map((language) => (
                    <button
                      key={language}
                      type="button"
                      onClick={() => setIsLanguageMenuOpen(false)}
                      className="w-full rounded-xl px-3 py-2 text-left text-sm text-[var(--text-secondary)] hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)]"
                    >
                      {language}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            <button
              type="button"
              onClick={onToggleTheme}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-strong)] text-[var(--text-primary)] shadow-[var(--shadow-soft)] hover:-translate-y-0.5"
              aria-label="Cambiar modo de color"
            >
              <LuMoonStar className="text-lg" />
            </button>

            <a
              href="https://www.youtube.com/watch?v=GvP-4hX0b7g"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-strong)] px-4 py-3 text-sm font-semibold text-[var(--text-primary)] shadow-[var(--shadow-soft)] hover:-translate-y-0.5 md:flex"
            >
              <LuCircleHelp className="text-base" />
              <span>Ayuda</span>
            </a>
          </div>
        </div>

        {showCompactSearch ? (
          <CompactSearchBar className="md:hidden" />
        ) : null}

        <nav className="flex gap-2 overflow-x-auto pb-1 md:hidden">
          {navigationItems.map(({ href, label, icon: Icon }) => {
            const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold ${
                  isActive
                    ? "bg-[var(--surface-strong)] text-[var(--text-primary)] shadow-[var(--shadow-soft)]"
                    : "border border-[var(--border-soft)] text-[var(--text-secondary)]"
                }`}
              >
                <Icon className="text-base" />
                <span>{label}</span>
              </Link>
            );
          })}

          <a
            href="https://www.youtube.com/watch?v=GvP-4hX0b7g"
            target="_blank"
            rel="noreferrer"
            className="flex shrink-0 items-center gap-2 rounded-full border border-[var(--border-soft)] px-4 py-3 text-sm font-semibold text-[var(--text-secondary)]"
          >
            <LuCircleHelp className="text-base" />
            <span>Ayuda</span>
          </a>
        </nav>
      </div>
    </header>
  );
}