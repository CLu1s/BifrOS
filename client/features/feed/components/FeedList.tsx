import useFeed from "@/features/feed/hooks/useFeed";
import { FeedElement } from "@/features/feed/components/FeedElement";

const FeedList = () => {
  const { feeds } = useFeed();
  const feedList = feeds.map((feed) => (
    <FeedElement key={feed.id} feed={feed} />
  ));
  return (
    <div
      className={
        " container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4"
      }
    >
      {feedList}
    </div>
  );
};

export default FeedList;
