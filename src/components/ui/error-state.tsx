import { AlertCircle } from "lucide-react";
import { getErrorMessage } from "@/lib/utils/errors";

export function ErrorState({
  title = "Unable to load this section",
  error,
}: {
  title?: string;
  error?: unknown;
}) {
  return (
    <div className="rounded-2xl border border-danger-muted bg-danger-muted p-6 text-danger">
      <div className="flex items-start gap-3">
        <AlertCircle className="mt-0.5" size={20} />
        <div>
          <h2 className="font-semibold">{title}</h2>
          <p className="mt-1 text-sm opacity-85">{getErrorMessage(error)}</p>
        </div>
      </div>
    </div>
  );
}
