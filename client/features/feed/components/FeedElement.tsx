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
    <Card className="py-4 relative shrink-0">
      <div className="absolute top-2 right-2 z-40">
        <Button
          isIconOnly
          variant={"light"}
          onPress={() => saveBookmark(props.feed.link, props.feed.id)}
          className={findBookmark(props.feed.link) ? "text-yellow-500" : ""}
        >
          <Bookmark className={"h-8 w-8"} />
        </Button>
      </div>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">
          {new Date(props.feed.pubDate).toDateString()}
        </p>
        <small className="text-default-500">{props.feed.source}</small>
        <Link
          href={props.feed.link}
          target={"_blank"}
          className="font-bold text-large"
        >
          {props.feed.title}
        </Link>
      </CardHeader>
      <CardBody className="overflow-visible m-auto py-2">
        <div className={"m-auto "}>
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={props.feed.imageUrl}
            height={300}
          />
        </div>
      </CardBody>
    </Card>
  );
}
