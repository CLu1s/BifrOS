import { useSelector } from "react-redux";
import { selectFeeds } from "@/features/feed/redux/feedSelector";
import { Feed } from "@/features/feed/types";
import { FeedList } from "@/features/feed/class/Feeds";

const useFeed = () => {
  const feeds = useSelector(selectFeeds);
  const feedElements = FeedList.fromArray(feeds);
  const groupedByCategory = feeds.reduce(
    (acc, feed) => {
      const { category } = feed;
      if (!category) return acc;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(feed);
      return acc;
    },
    {} as Record<string, Feed[]>,
  );
  const feedKeys = Object.keys(groupedByCategory);
  const ITEMS_PER_CATEGORY = 3;

  const feedKeysByCategory = feedElements.getFeeds(ITEMS_PER_CATEGORY);

  const todayFeed = feeds.filter((feed) => {
    const today = new Date();
    const feedDate = new Date(feed.pubDate);
    return (
      today.getDate() === feedDate.getDate() &&
      today.getMonth() === feedDate.getMonth() &&
      today.getFullYear() === feedDate.getFullYear()
    );
  });

  const normalizeFeeds = (feeds: any[]) => {
    return feeds.map((feed) => {
      const { cachedAt, ...rest } = feed;
      return {
        ...rest,
      };
    });
  };

  return {
    feeds: groupedByCategory,
    feedKeys,
    mostRecentFeed: feedKeysByCategory,
    todayFeed,
    feedsLength: feeds.length,
    normalizeFeeds,
  };
};

export default useFeed;
