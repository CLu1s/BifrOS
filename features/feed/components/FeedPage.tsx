import { FeedElement } from "@/features/feed/components/FeedElement";
import useFetchArticles from "@/features/feed/hooks/useFetchArticles";
import useActions from "@/features/feed/hooks/useActions";
import { useEffect } from "react";

interface FeedPageProps {
  activeSource: string;
  page: number;
}

export default function FeedPage({ activeSource, page }: FeedPageProps) {
  const { articles, meta } = useFetchArticles(activeSource, page);
  const { setFeedHasMore } = useActions();

  useEffect(() => {
    if (!meta.pages) return;
    if (page >= meta.pages || articles.length === 0) {
      setFeedHasMore(false);
    }
  }, [meta.pages, articles.length, page, setFeedHasMore]);

  const items = articles.map((feed) => {
    return <FeedElement key={feed.id} article={feed} />;
  });

  return (
    <div className="container m-auto grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 lg:gap-4 lg:px-20">
      {items}
    </div>
  );
}
