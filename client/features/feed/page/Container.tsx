"use client";

import { useEffect } from "react";
import useActions from "@/features/feed/hooks/useActions";
import FeedList from "@/features/feed/components/FeedList";
import useFeed from "@/features/feed/hooks/useFeed";
import useFetchers from "@/features/feed/hooks/useFetchers";
import PageLayout from "@/components/PageLayout";

const Container = () => {
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

  return (
    <PageLayout title={"Feed"}>
      {isLoading ? <div>Loading</div> : <FeedList />}
    </PageLayout>
  );
};

export default Container;
