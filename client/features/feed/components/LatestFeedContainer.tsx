import useFeed from "@/features/feed/hooks/useFeed";
import useFetchers from "@/features/feed/hooks/useFetchers";
import { useEffect } from "react";
import useActions from "@/features/feed/hooks/useActions";
import LatestFeed from "@/features/feed/components/LatestFeed";

const LatestFeedContainer = () => {
  const { setFeeds } = useActions();
  const { normalizeFeeds, feedsLength } = useFeed();
  const { feeds: data, isLoading, isError, isValidating } = useFetchers();

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
  }, [isLoading, isError, isValidating]);

  return <LatestFeed />;
};

export default LatestFeedContainer;
