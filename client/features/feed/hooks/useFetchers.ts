import { readDocsFromFirestore } from "@/firebase/services";
import useSWR, { useSWRConfig } from "swr";
import { Feed } from "@/features/feed/types";

const useFetchers = () => {
  const { mutate } = useSWRConfig();
  const key = "rssFeeds/cache/items";
  const { data, isLoading, error, isValidating } = useSWR(
    key,
    readDocsFromFirestore,
  );

  const revalidateCache = () => {
    void mutate(key);
  };

  return {
    feeds: data as Feed[],
    isLoading,
    isError: error,
    isValidating: isValidating,
    revalidateCache,
  };
};

export default useFetchers;
