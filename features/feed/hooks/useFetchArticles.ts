import useSWR from "swr";
import { fetcher } from "@/lib/fetchers";
import { Article, SourceMeta } from "@/features/feed/types";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default function useFetchArticles(sourceId: string, page: number = 1) {
  const { data, error, isLoading, mutate } = useSWR(
    `${API_URL}/api/rss/articles?sourceId=${sourceId}&page=${page}`,
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
    articles: (data ? data.data : []) as Article[],
    meta: (data ? data.meta : { total: 0, page: 1, limit: 10 }) as SourceMeta,
    isLoading,
    error,
    revalidate,
  };
}
