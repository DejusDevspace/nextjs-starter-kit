import { CheckCircle2, Info, TriangleAlert, X, XCircle } from "lucide-react";
import type { Toast } from "@/context/toast-context";
import { cn } from "@/lib/utils/cn";

const icons = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
  warning: TriangleAlert,
};

export function ToastViewport({
  toasts,
  onDismiss,
}: {
  toasts: Toast[];
  onDismiss: (id: string) => void;
}) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex w-[calc(100vw-2rem)] max-w-sm flex-col gap-3">
      {toasts.map((toast) => {
        const Icon = icons[toast.type];

        return (
          <div
            key={toast.id}
            className={cn(
              "rounded-2xl border bg-bg-surface p-4 shadow-xl shadow-black/10",
              toast.type === "success" && "border-success-muted",
              toast.type === "error" && "border-danger-muted",
              toast.type === "warning" && "border-warning-muted",
              toast.type === "info" && "border-accent-border",
            )}
          >
            <div className="flex items-start gap-3">
              <Icon className="mt-0.5 text-accent" size={18} />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-text-primary">{toast.title}</p>
                {toast.description ? (
                  <p className="mt-1 text-sm leading-5 text-text-secondary">
                    {toast.description}
                  </p>
                ) : null}
              </div>
              <button
                type="button"
                className="focus-ring rounded-full p-1 text-text-tertiary hover:bg-bg-muted hover:text-text-primary"
                aria-label="Dismiss toast"
                onClick={() => onDismiss(toast.id)}
              >
                <X size={16} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
