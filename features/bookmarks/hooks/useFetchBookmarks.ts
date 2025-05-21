import { fetcher } from "@/lib/fetchers";
import useSWR from "swr";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function useFetchBookmarks() {
  const { data, error, isLoading, mutate } = useSWR(
    `${API_URL}/api/bookmarks`,
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
    bookmarks: data ? data.bookmark : [],
    isLoading,
    error,
    revalidate,
  };
}
