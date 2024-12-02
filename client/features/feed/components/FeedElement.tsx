import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";
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
    <Card className="py-4 w-full relative">
      <div className="absolute top-1 right-1 z-40">
        <Button
          isIconOnly
          variant={"light"}
          onPress={() => saveBookmark(props.feed.link, props.feed.id)}
          className={findBookmark(props.feed.link) ? "text-yellow-500" : ""}
        >
          <Bookmark className={"h-8 w-8"} />
        </Button>
      </div>
      <CardHeader className="pb-0  gap-0 lg:gap-2 flex-col items-start">
        <p className="text-tiny uppercase font-medium">{props.feed.source}</p>
        <small className="text-default-500">
          {new Date(props.feed.pubDate).toDateString()}
        </small>
        <Link
          href={props.feed.link}
          target={"_blank"}
          className="font-semibold text-large leading-5 lg:leading-6 "
        >
          {props.feed.title}
        </Link>
      </CardHeader>
      <CardBody className="hidden lg:flex  m-auto py-2">
        <div className={"m-auto "}>
          <Image
            alt="Card background"
            className="h-60 w-[422px] object-contain  rounded-xl"
            src={props.feed.imageUrl}
            height={150}
          />
        </div>
      </CardBody>
    </Card>
  );
}
