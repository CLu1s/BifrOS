"use client";

import { useEffect } from "react";
import useActions from "@/features/feed/hooks/useActions";
import FeedList from "@/features/feed/components/FeedList";
import useFeed from "@/features/feed/hooks/useFeed";
import useFetchers from "@/features/feed/hooks/useFetchers";

const Container = () => {
  const { setFeeds } = useActions();
  const { feeds, normalizeFeeds, feedsLength } = useFeed();
  const { feeds: data, isLoading, isError, isValidating } = useFetchers(true);
  useEffect(() => {
    if (
      !isLoading &&
      !isError &&
      !isValidating &&
      data.length !== feedsLength
    ) {
      const normalizedData = normalizeFeeds(data);
      setFeeds(normalizedData);
    }
  }, [isLoading, isError, isValidating, feeds]);

  return (
    <div className={"flex flex-col gap-8 m-2 lg:m-10"}>
      <h1 className={"text-2xl font-bold"}>Feed</h1>
      {isLoading ? <div>Loading</div> : <FeedList />}
    </div>
  );
};

export default Container;
