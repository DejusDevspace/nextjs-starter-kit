import { env } from "@/env";

export const appConfig = {
  name: "Next.js Starter Kit",
  description:
    "A reusable Next.js frontend starter with modular architecture, typed config, API services, theming, and dashboard-ready primitives.",
  url: env.NEXT_PUBLIC_APP_URL,
  apiBaseUrl: env.NEXT_PUBLIC_API_BASE_URL,
  repository: "https://github.com/DejusDevspace/nextjs-starter-kit",
  storageKeys: {
    queryCache: "nextjs-starter-kit:query-cache",
    theme: "nextjs-starter-kit:theme",
  },
  pagination: {
    defaultPage: 1,
    defaultPageSize: 10,
  },
} as const;
