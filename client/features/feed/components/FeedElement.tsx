import { Button, Link } from "@nextui-org/react";
import { Feed } from "@/features/feed/types";
import { Bookmark } from "lucide-react";
import useBookmark from "@/features/bookmarks/hooks/useBookmark";

export function FeedElement(props: { feed: Feed }) {
  const { createBookmark, bookmarks, deleteBookmark } = useBookmark();

  const findBookmark = (url: string) => {
    return bookmarks.find((bookmark) => bookmark.url === url);
  };

  const saveBookmark = async (url: string, id: string) => {
    if (findBookmark(url)) {
      await deleteBookmark(id);
      return;
    }
    await createBookmark(url, id);
  };

  return (
    <Link
      href={props.feed.link}
      target={"_blank"}
      className="flex flex-col gap-4 w-full relative"
    >
      <div className={"col-span-2 2xl:col-span-1 h-32 w-full"}>
        <img
          alt="Card background"
          className="w-full h-full object-cover  rounded "
          src={props.feed.imageUrl}
        />
      </div>
      <div className={"col-span-9"}>
        {props.feed.title}

        <p className="text-tiny font-medium">{props.feed.source}</p>
        <small className="text-tiny text-default-500">
          {new Date(props.feed.pubDate).toDateString()}
        </small>
      </div>
      <div className="absolute top-1 right-1 z-40">
        <Button
          isIconOnly
          variant={"light"}
          onPress={() => saveBookmark(props.feed.link, props.feed.id)}
          className={`${findBookmark(props.feed.link) && "text-yellow-500"}`}
        >
          <Bookmark className={"h-6 w-6"} />
        </Button>
      </div>
    </Link>
  );
}
