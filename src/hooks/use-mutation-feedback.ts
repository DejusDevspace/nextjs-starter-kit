"use client";

import { toast } from "sonner";
import { getErrorMessage } from "@/lib/utils/errors";

export function useMutationFeedback() {
  return {
    onSuccess: (message = "Changes saved") => toast.success(message),
    onError: (error: unknown, title = "Request failed") =>
      toast.error(title, { description: getErrorMessage(error) }),
  };
}
