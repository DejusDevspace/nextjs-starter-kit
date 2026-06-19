import type { MetadataRoute } from "next";
import { appConfig } from "@/config/app";
import { routes } from "@/config/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: new URL(routes.home, appConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: new URL(routes.dashboard, appConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
