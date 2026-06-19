import type { Metadata } from "next";
import { AppProviders } from "@/components/providers/app-providers";
import { appConfig } from "@/config/app";
import { createMetadata } from "@/lib/utils/metadata";
import "./globals.css";

export const metadata: Metadata = createMetadata({
  title: appConfig.name,
  description: appConfig.description,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-bg-page text-text-primary">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
