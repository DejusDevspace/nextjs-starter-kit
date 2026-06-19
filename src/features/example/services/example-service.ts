import { apiClient } from "@/lib/api/client";

export interface ExampleItem {
  id: string;
  title: string;
  description: string;
}

const fallbackItems: ExampleItem[] = [
  {
    id: "api-layer",
    title: "Service layer",
    description:
      "Wrap every backend call in a small function before using it in hooks.",
  },
  {
    id: "query-hooks",
    title: "Query hooks",
    description:
      "Keep cache keys and React Query options close to the feature.",
  },
  {
    id: "feature-folder",
    title: "Feature folder",
    description:
      "Move project-specific code into features so shared infrastructure stays clean.",
  },
];

export async function listExampleItems() {
  if (process.env.NEXT_PUBLIC_ENABLE_EXAMPLE_API !== "true") {
    return fallbackItems;
  }

  const { data } = await apiClient.get<ExampleItem[]>("/example");
  return data;
}
