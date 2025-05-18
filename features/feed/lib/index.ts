import { readDocsFromFirestore } from "@/firebase/services";
import { Feed } from "@/features/feed/types";

export async function getFeeds() {
  const result = await readDocsFromFirestore("rssFeeds/cache/items");

  return result.map((item: any) => {
    const { cachedAt, ...rest } = item;
    return {
      ...rest,
    };
  }) as Feed[];
}
