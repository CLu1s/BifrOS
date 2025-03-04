import { Button, Link } from "@heroui/react";
import { Feed } from "@/features/feed/types";
import useBookmark from "@/features/bookmarks/hooks/useBookmark";
import { Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

export function FeedElementRow(props: { feed: Feed }) {
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

  const habdleBookmark = (e: any) => {
    e.preventDefault();
    void saveBookmark(props.feed.link, props.feed.id);
  };

  return (
    <Link
      href={props.feed.link}
      target={"_blank"}
      className="grid grid-rows-1 relative mb-2"
    >
      <div className="  grid grid-rows-2   gap-2">
        <div className={"col-span-1 min-h-32 max-h-32"}>
          <img
            alt="Card background"
            className=" h-full w-full object-cover  rounded-lg"
            src={props.feed.imageUrl}
          />
        </div>
        <div className={"flex flex-col    "}>
          <p
            className={
              "text-sm leading-4 2xl:text-sm text-ellipsis whitespace-break-spaces"
            }
          >
            {props.feed.title}
          </p>

          <div className={"flex  gap-4 col-span-4"}>
            <p className="text-tiny font-medium text-neutral-500">
              {props.feed.source}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 z-20">
        <button
          onClick={habdleBookmark}
          className={cn(
            "p-2 rounded hover:bg-yellow-500",
            findBookmark(props.feed.link) && " bg-yellow-500  text-white",
          )}
        >
          <Bookmark className={"h-6 w-6 "} />
        </button>
      </div>
    </Link>
  );
}
