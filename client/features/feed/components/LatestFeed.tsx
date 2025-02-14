import useFeed from "@/features/feed/hooks/useFeed";
import { FeedElementRow } from "@/features/feed/components/FeedElementRow";
import useFetchers from "@/features/feed/hooks/useFetchers";
import { useMemo } from "react";
import Card, { ExtraButton } from "@/components/Card";

const LatestFeed = () => {
  const { mostRecentFeed } = useFeed();
  const { isLoading } = useFetchers();

  const renderFeeds = useMemo(
    () =>
      mostRecentFeed.map((feed) => (
        <FeedElementRow key={feed.id} feed={feed} />
      )),
    [mostRecentFeed],
  );

  return (
    <Card
      title={"Latest Feed"}
      isLoading={isLoading}
      renderExtra={<ExtraButton href={"/feed"}>View All</ExtraButton>}
    >
      <div className={"grid grid-cols-2 lg:grid-cols-4  gap-3"}>
        {renderFeeds}
      </div>
    </Card>
  );
};

export default LatestFeed;
