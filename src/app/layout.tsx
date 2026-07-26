import type { Metadata } from "next";
import { AppProviders } from "@/components/providers/app-providers";
import { appConfig } from "@/config/app";
import { createMetadata } from "@/lib/utils/metadata";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full antialiased", "font-sans", geist.variable)}
    >
      <body className="flex min-h-full flex-col bg-bg-page text-text-primary">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
