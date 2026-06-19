import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export function LoadingSpinner({
  label = "Loading",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 text-sm text-text-secondary",
        className,
      )}
    >
      <Loader2 className="animate-spin text-accent" size={18} />
      <span>{label}</span>
    </div>
  );
}
