import { queryFirestore, readDocsFromFirestore } from "@/firebase/services";
import useSWR, { useSWRConfig } from "swr";
import { Feed } from "@/features/feed/types";
import {
  collection,
  getFirestore,
  limit,
  orderBy,
  query,
} from "firebase/firestore";

const useFetchers = (full = false) => {
  const { mutate } = useSWRConfig();
  const db = getFirestore();
  const key = "rssFeeds/cache/items";

  const ref = collection(db, key);

  const q = query(ref, orderBy("dateInSec", "desc"), limit(16));
  const queryResults = useSWR(full ? null : key, () => queryFirestore(q));

  const { data, isLoading, error, isValidating } = useSWR(
    full ? key : null,
    readDocsFromFirestore,
  );

  const revalidateCache = () => {
    void mutate(key);
  };

  return {
    feeds: (data || queryResults.data) as Feed[],
    isLoading: isLoading || queryResults.isLoading,
    isError: error || queryResults.error,
    isValidating: isValidating || queryResults.isValidating,
    revalidateCache,
  };
};

export default useFetchers;
