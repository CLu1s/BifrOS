import { HistoryElement } from "@/features/wallpapers/types";
import useSWR from "swr";
import { fetcher } from "@/features/wallpapers/lib";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function useFetchHistory() {
  const { data, error, isLoading } = useSWR(
    `${API_URL}/api/wallpapers/history`,
    fetcher,
    {
      revalidateOnFocus: true, // Revalida al volver a la pestaña
      revalidateOnReconnect: true,
    },
  );

  return {
    historyList: (data?.wallpapers as HistoryElement[]) || [],
    isLoading,
    error,
  };
}
