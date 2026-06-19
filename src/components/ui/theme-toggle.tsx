"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const nextTheme =
    theme === "light" ? "dark" : theme === "dark" ? "system" : "light";

  return (
    <Button
      type="button"
      variant="secondary"
      size="sm"
      aria-label="Toggle theme"
      onClick={() => setTheme(nextTheme)}
    >
      {theme === "light" ? <Sun size={16} /> : null}
      {theme === "dark" ? <Moon size={16} /> : null}
      {!theme || theme === "system" ? <Monitor size={16} /> : null}
      <span className="hidden sm:inline">{theme ?? "system"}</span>
    </Button>
  );
}
