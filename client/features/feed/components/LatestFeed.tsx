import { Card, CardBody, CardHeader } from "@nextui-org/react";
import useFeed from "@/features/feed/hooks/useFeed";
import { FeedElementRow } from "@/features/feed/components/FeedElementRow";
import useFetchers from "@/features/feed/hooks/useFetchers";
import { useEffect } from "react";
import useActions from "@/features/feed/hooks/useActions";

const LatestFeed = () => {
  const { setFeeds } = useActions();
  const { mostRecentFeed, feeds, normalizeFeeds, feedsLength } = useFeed();
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
  }, [isLoading, isError, isValidating, feeds]);
  const renderFeeds = mostRecentFeed.map((feed) => (
    <FeedElementRow key={feed.id} feed={feed} />
  ));
  return (
    <Card className={"p-2 w-full shrink-0"}>
      <CardHeader>
        <h2 className={"text-xl font-semibold"}>Latest Feed</h2>
      </CardHeader>
      <CardBody>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className={"grid grid-cols-1 lg:grid-cols-2 gap-4"}>
            {renderFeeds}
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default LatestFeed;
