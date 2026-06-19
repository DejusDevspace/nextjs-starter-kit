import {
  ArrowRight,
  Blocks,
  DatabaseZap,
  Replace,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { MarketingShell } from "@/components/layout/marketing-shell";
import { Button } from "@/components/ui/button";

export default function Home() {
  const pillars = [
    {
      icon: Blocks,
      title: "Modular by default",
      description:
        "Config, API, auth, UI, and features live behind clear boundaries so you can replace one layer without rewriting the app.",
    },
    {
      icon: DatabaseZap,
      title: "Server state solved",
      description:
        "TanStack Query, Axios, services, query keys, cache persistence, and mutation feedback are ready to reuse.",
    },
    {
      icon: Replace,
      title: "Swap-friendly pieces",
      description:
        "Auth and UI are intentionally thin abstractions, making it practical to switch providers or component libraries later.",
    },
    {
      icon: ShieldCheck,
      title: "Starter guardrails",
      description:
        "Typed env parsing, route config, tokens, tests, formatting, and docs reduce setup decisions on every new project.",
    },
  ];

  return (
    <MarketingShell>
      <main>
        <section className="relative overflow-hidden border-b border-border-subtle">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,var(--color-accent-muted),transparent_34%),linear-gradient(135deg,var(--color-bg-page),var(--color-bg-muted))]" />
          <Container className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-24 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-full border border-accent-border bg-accent-muted px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Next.js Starter Kit
              </p>
              <h1 className="font-sans text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-text-primary sm:text-7xl">
                A reusable frontend foundation that stays easy to replace.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-text-secondary">
                App Router, TypeScript, Tailwind tokens, TanStack Query, Axios,
                typed config, theme handling, toast feedback, and feature-first
                folders without backend assumptions.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild href="/dashboard" size="lg">
                  View dashboard shell <ArrowRight size={18} />
                </Button>
                <Button
                  asChild
                  href="#architecture"
                  variant="secondary"
                  size="lg"
                >
                  See architecture
                </Button>
              </div>
            </div>

            <div className="rounded-4xl border border-border-subtle bg-bg-surface/80 p-5 shadow-2xl shadow-black/10 backdrop-blur">
              <div className="rounded-[1.4rem] border border-border-subtle bg-bg-elevated p-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-xs text-text-tertiary">
                    src/
                  </span>
                  <span className="rounded-full bg-success-muted px-2 py-1 font-mono text-[0.65rem] text-success">
                    modular
                  </span>
                </div>
                {[
                  "config/app.ts",
                  "lib/api/client.ts",
                  "lib/query/query-client.ts",
                  "components/providers/app-providers.tsx",
                  "features/example",
                  "components/ui",
                ].map((path) => (
                  <div
                    key={path}
                    className="mb-2 rounded-lg border border-border-subtle bg-bg-page px-4 py-3 font-mono text-sm text-text-secondary"
                  >
                    {path}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section id="architecture" className="py-20">
          <Container>
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Core architecture
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-text-primary">
                Built for fast starts, not future rewrites.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="card">
                  <pillar.icon className="mb-5 text-accent" size={24} />
                  <h3 className="text-xl font-semibold tracking-[-0.03em]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 leading-7 text-text-secondary">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </MarketingShell>
  );
}
