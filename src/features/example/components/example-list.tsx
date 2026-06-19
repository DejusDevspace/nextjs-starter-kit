"use client";

import { ErrorState, LoadingSpinner } from "@/components/ui";
import { useExampleItems } from "@/features/example/hooks/use-example-items";

export function ExampleList() {
  const { data, error, isLoading } = useExampleItems();

  if (isLoading) return <LoadingSpinner label="Loading example feature" />;
  if (error) return <ErrorState error={error} />;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {data?.map((item) => (
        <article key={item.id} className="card">
          <h2 className="font-semibold tracking-[-0.03em]">{item.title}</h2>
          <p className="mt-2 text-sm leading-6 text-text-secondary">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}
