import type { Metadata } from "next";
import { appConfig } from "@/config/app";

interface MetadataInput {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}

export function createMetadata({
  title,
  description = appConfig.description,
  path = "/",
  image,
}: MetadataInput): Metadata {
  const url = new URL(path, appConfig.url).toString();

  return {
    title: {
      default: title,
      template: `%s | ${appConfig.name}`,
    },
    description,
    metadataBase: new URL(appConfig.url),
    openGraph: {
      title,
      description,
      url,
      siteName: appConfig.name,
      images: image ? [{ url: image }] : undefined,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}
