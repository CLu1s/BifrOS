import { queryFirestore, readDocsFromFirestore } from "@/firebase/services";
import useSWR, { useSWRConfig } from "swr";
import { Feed } from "@/features/feed/types";
import {
  collection,
  getFirestore,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";

const useFetchers = (readAllDocuments = false) => {
  const { mutate } = useSWRConfig();
  const db = getFirestore();
  const path = "rssFeeds/cache/items";
  const animeKey = "rssFeeds/cache/items/anime";
  const techKey = "rssFeeds/cache/items/tech";
  const allKey = "rssFeeds/cache/items";

  const ref = collection(db, path);

  const a = query(
    ref,
    where("category", "==", "anime"),
    orderBy("dateInSec", "desc"),
    limit(15),
  );
  const q = query(
    ref,
    where("category", "==", "tech"),
    orderBy("dateInSec", "desc"),
    limit(15),
  );
  const queryAnimeResults = useSWR(readAllDocuments ? null : animeKey, () =>
    queryFirestore(a),
  );
  const queryTechResults = useSWR(readAllDocuments ? null : techKey, () =>
    queryFirestore(q),
  );
  const mergeResults = [
    ...(queryAnimeResults.data || []),
    ...(queryTechResults.data || []),
  ];

  const { data, isLoading, error, isValidating } = useSWR(
    readAllDocuments ? allKey : null,
    readDocsFromFirestore,
  );

  const revalidateCache = () => {
    void mutate(techKey);
  };

  return {
    feeds: (data || mergeResults) as Feed[],
    isLoading:
      isLoading || queryTechResults.isLoading || queryAnimeResults.isLoading,
    isError: error || queryTechResults.error,
    isValidating: isValidating || queryTechResults.isValidating,
    revalidateCache,
  };
};

export default useFetchers;
