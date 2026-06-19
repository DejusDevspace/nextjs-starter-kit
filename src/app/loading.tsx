import { LoadingSpinner } from "@/components/ui";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <LoadingSpinner label="Loading page" />
    </main>
  );
}
