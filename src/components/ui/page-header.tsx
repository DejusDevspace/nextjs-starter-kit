import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5 border-b border-border-subtle pb-8 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow ? (
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-3xl font-semibold tracking-[-0.04em]">{title}</h1>
        {description ? (
          <p className="mt-2 max-w-2xl leading-7 text-text-secondary">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
