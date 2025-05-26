import { fetcher } from "@/lib/fetchers";
import useSWR from "swr";
import { Source } from "@/features/feed/types";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function useFetchSources() {
  const { data, error, isLoading, mutate } = useSWR(
    `${API_URL}/api/rss/sources`,
    fetcher,
    {
      revalidateOnFocus: true, // Revalida al volver a la pestaña
      revalidateOnReconnect: true,
    },
  );
  const revalidate = async () => {
    await mutate();
  };

  return {
    sources: (data ? data.data : []) as Source[],
    meta: data ? data.meta : null,
    isLoading,
    error,
    revalidate,
  };
}
