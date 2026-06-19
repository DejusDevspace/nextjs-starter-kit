import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "focus-ring h-11 w-full rounded-xl border border-border-subtle bg-bg-surface px-3 text-sm text-text-primary placeholder:text-text-tertiary",
        className,
      )}
      {...props}
    />
  );
}
