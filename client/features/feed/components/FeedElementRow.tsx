import { Button, Image, Link } from "@nextui-org/react";
import { Feed } from "@/features/feed/types";
import useBookmark from "@/features/bookmarks/hooks/useBookmark";
import { Bookmark } from "lucide-react";

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

  return (
    <div className=" w-full flex justify-between">
      <div className="flex  gap-2">
        <div className={"col-span-1 "}>
          <Image
            alt="Card background"
            className="min-w-[45px] object-cover  rounded"
            src={props.feed.imageUrl}
            height={45}
            width={45}
          />
        </div>
        <div className={"flex flex-col col-span-5"}>
          <Link
            href={props.feed.link}
            target={"_blank"}
            className=" text-sm leading-4  "
          >
            {props.feed.title}
          </Link>
          <div className={"flex  gap-4 col-span-4"}>
            <p className="text-tiny font-medium text-neutral-500">
              {props.feed.source}
            </p>
          </div>
        </div>
      </div>
      <div className=" ">
        <Button
          isIconOnly
          variant={"light"}
          onPress={() => saveBookmark(props.feed.link, props.feed.id)}
          className={`${findBookmark(props.feed.link) && "text-yellow-500"}`}
        >
          <Bookmark className={"h-6 w-6"} />
        </Button>
      </div>
    </div>
  );
}
