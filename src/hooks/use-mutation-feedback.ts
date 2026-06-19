"use client";

import { useToast } from "@/context/toast-context";
import { getErrorMessage } from "@/lib/utils/errors";

export function useMutationFeedback() {
  const toast = useToast();

  return {
    onSuccess: (message = "Changes saved") => toast.success(message),
    onError: (error: unknown, title = "Request failed") =>
      toast.error(title, getErrorMessage(error)),
  };
}
