import type { ApiError } from "@/types";

export function getErrorMessage(
  error: unknown,
  fallback = "Something went wrong.",
) {
  if (typeof error === "string") return error;
  if (isApiError(error)) return error.message;
  if (error instanceof Error) return error.message;
  return fallback;
}

export function isApiError(error: unknown): error is ApiError {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    "status" in error
  );
}
