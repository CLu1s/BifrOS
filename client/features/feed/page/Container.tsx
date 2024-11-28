"use client";

import { useEffect } from "react";
import { readDocsFromFirestore } from "@/firebase/services";
import useActions from "@/features/feed/hooks/useActions";
import FeedList from "@/features/feed/components/FeedList";

const Container = () => {
  const { setFeeds } = useActions();
  useEffect(() => {
    (async () => {
      const result = await readDocsFromFirestore("rssFeeds/cache/items");
      const cleanData = result.map((item: any) => {
        const { cachedAt, ...rest } = item;
        return {
          ...rest,
        };
      });
      setFeeds(cleanData);
    })();
  }, []);
  return (
    <div className={"flex flex-col gap-8 m-2 lg:m-10"}>
      <h1 className={"text-2xl font-bold"}>Feed</h1>
      <div>
        <div>
          <FeedList />
        </div>
      </div>
    </div>
  );
};

export default Container;
