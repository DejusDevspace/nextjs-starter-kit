"use client";

import { useState, type ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { ThemeProvider } from "next-themes";
import { appConfig } from "@/config/app";
import { ToastProvider } from "@/context/toast-context";
import { createQueryClient } from "@/lib/query/query-client";

export function AppProviders({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => createQueryClient());
  const [persister] = useState(() =>
    typeof window === "undefined"
      ? null
      : createSyncStoragePersister({
          storage: window.localStorage,
          key: appConfig.storageKeys.queryCache,
        }),
  );

  const tree = (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey={appConfig.storageKeys.theme}
    >
      <ToastProvider>{children}</ToastProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </ThemeProvider>
  );

  if (!persister) {
    return (
      <QueryClientProvider client={queryClient}>{tree}</QueryClientProvider>
    );
  }

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister, maxAge: 24 * 60 * 60 * 1000 }}
    >
      {tree}
    </PersistQueryClientProvider>
  );
}
