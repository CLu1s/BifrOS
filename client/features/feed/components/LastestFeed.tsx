import { Card, CardBody, CardHeader } from "@nextui-org/react";
import useFeed from "@/features/feed/hooks/useFeed";
import { FeedElement } from "@/features/feed/components/FeedElement";

const LastestFeed = () => {
  const { mostRecentFeed } = useFeed();

  const renderFeeds = mostRecentFeed.map((feed) => (
    <div className={"w-60 shrink-0"} key={feed.id}>
      <FeedElement feed={feed} />
    </div>
  ));
  return (
    <Card className={"p-2 w-full shrink-0"}>
      <CardHeader>
        <h2 className={"text-xl font-semibold"}>Latest Feed</h2>
      </CardHeader>
      <CardBody>
        <div className={"flex justify-between gap-2 2xl:gap-4  "}>
          {renderFeeds}
        </div>
      </CardBody>
    </Card>
  );
};

export default LastestFeed;
