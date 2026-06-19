"use client";

import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/lib/api/query-keys";
import { listExampleItems } from "@/features/example/services/example-service";

export function useExampleItems() {
  return useQuery({
    queryKey: queryKeys.example.list(),
    queryFn: listExampleItems,
  });
}
