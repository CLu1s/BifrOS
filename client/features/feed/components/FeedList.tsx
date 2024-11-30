import useFeed from "@/features/feed/hooks/useFeed";
import { FeedElement } from "@/features/feed/components/FeedElement";
import { Accordion, AccordionItem } from "@nextui-org/react";

const FeedList = () => {
  const { feeds, feedKeys, todayFeed } = useFeed();
  const items = [
    <AccordionItem
      key={"Today"}
      aria-label={"Today"}
      title={"Today"}
      className={"capitalize text-2xl font-bold"}
    >
      <div
        className={
          " container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4"
        }
      >
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
        <div
          className={
            " container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4"
          }
        >
          {feeds[key].map((feed) => {
            return <FeedElement key={feed.id} feed={feed} />;
          })}
        </div>
      </AccordionItem>
    );
  });

  return (
    <div className={" container m-auto  "}>
      <Accordion defaultExpandedKeys={["Today"]}>
        {items.concat(feedList)}
      </Accordion>
    </div>
  );
};

export default FeedList;
