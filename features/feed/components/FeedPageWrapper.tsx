import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import FeedPage from "@/features/feed/components/FeedPage";
import { useSelector } from "react-redux";
import { selectFeedHasMore } from "@/features/feed/redux/feedSelector";
import useActions from "@/features/feed/hooks/useActions";

interface Props {
  sourceId: string;
}

export default function FeedPageWrapper({ sourceId }: Props) {
  const [count, setCount] = useState(1);
  const feedHasMore = useSelector(selectFeedHasMore);
  const { setFeedHasMore } = useActions();
  useEffect(() => () => {
    setFeedHasMore(true);
  });

  const loadNextPage = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const items = [];
  for (let i = 1; i <= count; i++) {
    items.push(<FeedPage key={i} activeSource={sourceId} page={i} />);
  }

  return (
    <InfiniteScroll
      dataLength={items.length} //This is important field to render the next data
      next={loadNextPage}
      hasMore={feedHasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {items}
    </InfiniteScroll>
  );
}
