import { Card, CardBody, CardHeader } from "@nextui-org/react";
import useFeed from "@/features/feed/hooks/useFeed";
import { FeedElementRow } from "@/features/feed/components/FeedElementRow";

const LatestFeed = () => {
  const { mostRecentFeed } = useFeed();

  const renderFeeds = mostRecentFeed.map((feed) => (
    <FeedElementRow key={feed.id} feed={feed} />
  ));
  return (
    <Card className={"p-2 w-full shrink-0"}>
      <CardHeader>
        <h2 className={"text-xl font-semibold"}>Latest Feed</h2>
      </CardHeader>
      <CardBody>
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-4"}>
          {renderFeeds}
        </div>
      </CardBody>
    </Card>
  );
};

export default LatestFeed;
