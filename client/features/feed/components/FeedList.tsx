import useFeed from "@/features/feed/hooks/useFeed";
import { FeedElement } from "@/features/feed/components/FeedElement";
import { Accordion, AccordionItem } from "@nextui-org/react";
import PageLayout from "@/components/PageLayout";

const FeedList = () => {
  const { feeds, feedKeys, todayFeed } = useFeed();

  const container =
    "container m-auto grid grid-cols-3 2xl:grid-cols-4 gap-4 lg:px-20";
  const items = [
    <AccordionItem
      key={"Today"}
      aria-label={"Today"}
      title={"Today"}
      className={"capitalize text-2xl font-bold"}
    >
      <div className={container}>
        {todayFeed.map((feed) => {
          return <FeedElement key={feed.id} feed={feed} />;
        })}
      </div>
    </AccordionItem>,
  ];
  const feedList = feedKeys.map((key) => {
    return (
      <AccordionItem
        key={key}
        aria-label={key}
        title={key}
        className={" text-2xl font-bold"}
      >
        <div className={container}>
          {feeds[key].map((feed) => {
            return <FeedElement key={feed.id} feed={feed} />;
          })}
        </div>
      </AccordionItem>
    );
  });

  return (
    <Accordion defaultExpandedKeys={["Today"]}>
      {items.concat(feedList)}
    </Accordion>
  );
};

export default FeedList;
