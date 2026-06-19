"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useUrlState() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function setParam(key: string, value: string | null) {
    const next = new URLSearchParams(searchParams);

    if (value === null || value === "") {
      next.delete(key);
    } else {
      next.set(key, value);
    }

    const query = next.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  }

  return {
    searchParams,
    getParam: (key: string) => searchParams.get(key),
    setParam,
  };
}
