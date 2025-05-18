import { readDocsFromFirestore } from "@/firebase/services";
import useSWR, { useSWRConfig } from "swr";
import { HistoryElement, QueueElement } from "@/features/wallpapers/types";
import {
  allHistoryFromFirebaseFetcher,
  historyFromFirebaseFetcher,
} from "@/features/wallpapers/lib";

const useFetchers = (allHistory?: boolean) => {
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
  const history = useSWR(
    allHistory ? null : historyKey,
    historyFromFirebaseFetcher,
  );

  const allHistoryData = useSWR(
    allHistory ? historyKey : null,
    allHistoryFromFirebaseFetcher,
  );

  const revalidateCache = () => {
    void mutate(landscapeKey);
    void mutate(portraitKey);
    void mutate(historyKey);
  };

  return {
    queue: {
      landscape: (landscapeQueue.data || []) as QueueElement[],
      portrait: (portraitQueue.data || []) as QueueElement[],
    },
    history: (history.data || allHistoryData.data || []) as HistoryElement[],
    isLoading:
      landscapeQueue.isLoading ||
      portraitQueue.isLoading ||
      history.isLoading ||
      allHistoryData.isLoading,
    isError:
      landscapeQueue.error ||
      portraitQueue.error ||
      history.error ||
      allHistoryData.error,
    isValidating:
      landscapeQueue.isValidating ||
      portraitQueue.isValidating ||
      history.isValidating ||
      allHistoryData.isValidating,
    revalidateCache,
  };
};

export default useFetchers;
