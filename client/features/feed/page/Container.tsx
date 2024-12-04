"use client";

import { useEffect } from "react";
import useActions from "@/features/feed/hooks/useActions";
import FeedList from "@/features/feed/components/FeedList";
import { getFeeds } from "@/features/feed/lib";

const Container = () => {
  const { setFeeds } = useActions();
  useEffect(() => {
    (async () => {
      const result = await getFeeds();
      setFeeds(result);
    })();
  }, []);
  return (
    <div className={"flex flex-col gap-8 m-2 lg:m-10"}>
      <h1 className={"text-2xl font-bold"}>Feed</h1>
      <FeedList />
    </div>
  );
};

export default Container;
