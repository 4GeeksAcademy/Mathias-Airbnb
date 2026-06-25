"use client";

import { useEffect, useState } from "react";
import { HeroFilter } from "@/component/hero-filter";
import { SiteFooter } from "@/component/site-footer";
import { SiteHeader } from "@/component/site-header";

type AppShellProps = {
  children: React.ReactNode;
  showCompactSearch?: boolean;
  showTopFilter?: boolean;
};

export function AppShell({
  children,
  showCompactSearch = false,
  showTopFilter = false,
}: AppShellProps) {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const savedTheme = window.localStorage.getItem("airbnb-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("airbnb-theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen">
      <SiteHeader
        showCompactSearch={showCompactSearch}
        onToggleTheme={() => {
          setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
        }}
      />
      {showTopFilter ? (
        <div className="mx-auto w-full max-w-7xl px-4 pt-4 md:px-8 md:pt-6">
          <HeroFilter />
        </div>
      ) : null}
      <main className="mx-auto flex w-full max-w-7xl flex-col px-4 pb-14 pt-4 md:px-8 md:pb-16 md:pt-8">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}