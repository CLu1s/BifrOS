import { Link } from "@heroui/react";
import { Article } from "@/features/feed/types";

export function FeedElement(props: { article: Article }) {
  const { article } = props;
  const articleImage = article.imageUrl || article.thumbnailUrl || null;
  return (
    <Link
      href={article.link}
      target={"_blank"}
      className="flex flex-col gap-4 w-full relative"
    >
      {articleImage && (
        <div className={"col-span-2 2xl:col-span-1  h-[200px] w-full"}>
          <img
            alt="Card background"
            className="w-full h-full object-cover  rounded "
            src={articleImage}
          />
        </div>
      )}
      <div className={"col-span-9"}>
        {article.title}

        {/*<p className="text-tiny font-medium">{article.source}</p>*/}
        <small className="text-tiny text-default-500">
          {new Date(article.pubDate).toDateString()}
        </small>
      </div>
      {/*<div className="absolute top-1 right-1 z-40">*/}
      {/*  <Button*/}
      {/*    onClick={(e) => {*/}
      {/*      e.preventDefault();*/}
      {/*      saveBookmark(article.link, article.id);*/}
      {/*    }}*/}
      {/*    className={`${findBookmark(article.link) && "text-yellow-500"} bg-gray-300/50`}*/}
      {/*  >*/}
      {/*    <Bookmark className={"h-6 w-6"} />*/}
      {/*  </Button>*/}
      {/*</div>*/}
    </Link>
  );
}
