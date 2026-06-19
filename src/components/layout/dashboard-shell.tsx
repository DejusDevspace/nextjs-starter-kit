import Link from "next/link";
import type { ReactNode } from "react";
import { dashboardNav, routes } from "@/config/routes";
import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bg-muted">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-border-subtle bg-bg-surface p-4 lg:block">
        <Link
          href={routes.home}
          className="mb-8 block font-mono text-sm font-bold"
        >
          NextKit
        </Link>
        <nav className="space-y-1">
          {dashboardNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-text-secondary hover:bg-bg-muted hover:text-text-primary"
            >
              {item.icon ? <item.icon size={16} /> : null}
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 border-b border-border-subtle bg-bg-surface/85 backdrop-blur">
          <Container className="flex h-16 items-center justify-between">
            <Link href={routes.home} className="font-mono text-sm lg:hidden">
              NextKit
            </Link>
            <div className="ml-auto">
              <ThemeToggle />
            </div>
          </Container>
        </header>
        <main>
          <Container className="py-8">{children}</Container>
        </main>
      </div>
    </div>
  );
}
