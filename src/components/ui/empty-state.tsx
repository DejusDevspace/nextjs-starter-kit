import type { ReactNode } from "react";

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-border-default bg-bg-surface p-10 text-center">
      <h2 className="text-xl font-semibold tracking-[-0.03em]">{title}</h2>
      {description ? (
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-text-secondary">
          {description}
        </p>
      ) : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
