import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "focus-ring min-h-28 w-full rounded-xl border border-border-subtle bg-bg-surface px-3 py-2 text-sm text-text-primary placeholder:text-text-tertiary",
        className,
      )}
      {...props}
    />
  );
}
