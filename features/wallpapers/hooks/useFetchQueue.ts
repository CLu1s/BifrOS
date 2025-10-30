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

  // Sort by priority (higher priority first), then by addedAt (newer first)
  const sortedQueueList = (data?.data as QueueElement[]) || [];
  sortedQueueList.sort((a, b) => {
    // First sort by priority (descending)
    if (b.priority !== a.priority) {
      return b.priority - a.priority;
    }
    // If priorities are equal, sort by date (newest first)
    return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime();
  });

  return {
    queueList: sortedQueueList,
    isLoading,
    error,
    refreshQueue,
  };
}
