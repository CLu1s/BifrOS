import { Card, CardBody, Image, Link } from "@nextui-org/react";
import { Feed } from "@/features/feed/types";
import useBookmark from "@/features/bookmarks/hooks/useBookmark";

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
    <Card className=" w-full flex ">
      {/*<div className=" ">*/}
      {/*  <Button*/}
      {/*    isIconOnly*/}
      {/*    variant={"light"}*/}
      {/*    onPress={() => saveBookmark(props.feed.link, props.feed.id)}*/}
      {/*    className={`${findBookmark(props.feed.link) && "text-yellow-500"}`}*/}
      {/*  >*/}
      {/*    <Bookmark className={"h-6 w-6"} />*/}
      {/*  </Button>*/}
      {/*</div>*/}
      <CardBody className=" m-auto py-2 grid grid-cols-6 gap-2">
        <div className={"m-auto col-span-2 "}>
          <Image
            alt="Card background"
            className="h-60 w-[422px] object-contain  rounded-xl"
            src={props.feed.imageUrl}
            height={78}
            width={78}
          />
        </div>
        <div className={"flex flex-col col-span-4"}>
          <Link
            href={props.feed.link}
            target={"_blank"}
            className="font-semibold text-medium leading-5  "
          >
            {props.feed.title}
          </Link>
          <p className="text-tiny font-medium">{props.feed.source}</p>
          <small className="text-tiny text-default-500">
            {new Date(props.feed.pubDate).toDateString()}
          </small>
        </div>
      </CardBody>
    </Card>
  );
}
