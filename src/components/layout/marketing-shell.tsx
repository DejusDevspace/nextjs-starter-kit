import Link from "next/link";
import type { ReactNode } from "react";
import { mainNav } from "@/config/routes";
import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-border-subtle bg-bg-page/85 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm font-bold uppercase tracking-[0.16em]"
          >
            NextKit
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-text-secondary md:flex">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-text-primary"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </Container>
      </header>
      <div className="flex-1">{children}</div>
    </div>
  );
}
