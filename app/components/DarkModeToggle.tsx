"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function DarkModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed right-5 top-5 z-40 inline-flex items-center gap-2 rounded-full border border-[#D6DBEC] bg-white/90 px-4 py-2 text-sm font-semibold text-[#4B537F] shadow-sm backdrop-blur-sm transition-colors hover:bg-white dark:border-[#2C314A] dark:bg-[#171A28]/90 dark:text-[#D2D8F3] dark:hover:bg-[#1C2030]"
      aria-label="Toggle theme"
      type="button"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
