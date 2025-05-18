"use client";

import { useEffect } from "react";
import useActions from "@/features/feed/hooks/useActions";
import FeedList from "@/features/feed/components/FeedList";
import useFeed from "@/features/feed/hooks/useFeed";
import useFetchers from "@/features/feed/hooks/useFetchers";

const FeedContainer = () => {
  const { setFeeds } = useActions();
  const { normalizeFeeds, feedsLength } = useFeed();
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
  }, [isLoading, isError, isValidating, data, feedsLength]);

  return <div>{isLoading ? <div>Loading</div> : <FeedList />}</div>;
};

export default FeedContainer;
