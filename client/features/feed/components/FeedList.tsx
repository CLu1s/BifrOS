import useFeed from "@/features/feed/hooks/useFeed";
import { Card, CardHeader, CardBody, Image, Link } from "@nextui-org/react";

const FeedList = () => {
  const { feeds } = useFeed();
  const feedList = feeds.map((feed) => (
    <Card className="py-4" key={feed.id}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">
          {new Date(feed.pubDate).toDateString()}
        </p>
        <small className="text-default-500">{feed.source}</small>
        <Link
          href={feed.link}
          target={"_blank"}
          className="font-bold text-large"
        >
          {feed.title}
        </Link>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover w-full rounded-xl"
          src={feed.imageUrl}
          height={200}
        />
      </CardBody>
    </Card>
  ));
  return <div className={"grid grid-cols-3 gap-4"}>{feedList}</div>;
};

export default FeedList;
