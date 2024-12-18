import { useSelector } from "react-redux";
import { selectFeeds } from "@/features/feed/redux/feedSelector";
import { Feed } from "@/features/feed/types";

const useFeed = () => {
  const feeds = useSelector(selectFeeds);

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
  const NUMBER_OF_FEEDS = 16;
  const numberOfFeedsByCategory = Math.ceil(NUMBER_OF_FEEDS / feedKeys.length);
  const feedKeysByCategory = feedKeys
    .map((key) => {
      return groupedByCategory[key].slice(0, numberOfFeedsByCategory);
    })
    .flat();

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
