export const queryKeys = {
  health: ["health"] as const,
  example: {
    all: ["example"] as const,
    list: () => ["example", "list"] as const,
    detail: (id: string) => ["example", "detail", id] as const,
  },
} as const;
