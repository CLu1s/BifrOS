import { readDocsFromFirestore } from "@/firebase/services";
import useSWR, { useSWRConfig } from "swr";
import { HistoryElement, QueueElement } from "@/features/wallpapers/types";
import { historyFromFirebaseFetcher } from "@/features/wallpapers/lib";

const useFetchers = () => {
  const { mutate } = useSWRConfig();
  const landscapeKey = "wallpapers/myData/landscape-queue";
  const portraitKey = "wallpapers/myData/portrait-queue";
  const landscapeQueue = useSWR(landscapeKey, readDocsFromFirestore, {
    revalidateIfStale: false,
  });
  const portraitQueue = useSWR(portraitKey, readDocsFromFirestore, {
    revalidateIfStale: false,
  });
  const historyKey = "wallpapers/myData/history";
  const history = useSWR(historyKey, historyFromFirebaseFetcher);

  const revalidateCache = () => {
    void mutate(landscapeKey);
    void mutate(portraitKey);
  };

  return {
    queue: {
      landscape: (landscapeQueue.data || []) as QueueElement[],
      portrait: (portraitQueue.data || []) as QueueElement[],
    },
    history: (history.data || []) as HistoryElement[],
    isLoading:
      landscapeQueue.isLoading || portraitQueue.isLoading || history.isLoading,
    isError: landscapeQueue.error || portraitQueue.error || history.error,
    isValidating:
      landscapeQueue.isValidating ||
      portraitQueue.isValidating ||
      history.isValidating,
    revalidateCache,
  };
};

export default useFetchers;
