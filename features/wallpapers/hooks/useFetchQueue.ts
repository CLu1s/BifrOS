import { useCallback } from "react";
import { QueueElement } from "@/features/wallpapers/types";
import useSWR from "swr";
import { fetcher } from "@/features/wallpapers/lib";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function useFetchQueue() {
  const { data, error, isLoading, mutate } = useSWR(
    `${API_URL}/api/wallpapers/queue?status=PENDING`,
    fetcher,
    {
      revalidateOnFocus: true, // Revalida al volver a la pestaña
      revalidateOnReconnect: true,
    },
  );

  const refreshQueue = useCallback(async () => {
    try {
      await mutate();
    } catch (error) {
      console.error("Error al refrescar la cola:", error);
    }
  }, [mutate]);
  return {
    queueList: (data?.data as QueueElement[]) || [],
    isLoading,
    error,
    refreshQueue,
  };
}
