import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="max-w-lg text-center">
        <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          404
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em]">
          Page not found
        </h1>
        <p className="mt-4 leading-7 text-text-secondary">
          This starter includes a reusable not-found boundary. Replace the copy
          and visual treatment per project.
        </p>
        <Button asChild href="/" className="mt-6">
          Back home
        </Button>
      </div>
    </main>
  );
}
