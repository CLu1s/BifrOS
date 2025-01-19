import useFeed from "@/features/feed/hooks/useFeed";
import { FeedElement } from "@/features/feed/components/FeedElement";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FeedList = () => {
  const { feeds, feedKeys, todayFeed } = useFeed();

  const container =
    "container m-auto grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 lg:gap-4 lg:px-20";
  const items = [
    <TabsContent
      key="today"
      value="today"
      className={"capitalize text-2xl font-bold"}
    >
      <div className={container}>
        {todayFeed.map((feed) => {
          return <FeedElement key={feed.id} feed={feed} />;
        })}
      </div>
    </TabsContent>,
  ];

  const tabsTrigger = feedKeys.map((key) => {
    return (
      <TabsTrigger key={key} value={key}>
        {key}
      </TabsTrigger>
    );
  });

  const tabsContent = feedKeys.map((key) => {
    return (
      <TabsContent
        key={key}
        value={key}
        className={"capitalize text-2xl font-bold"}
      >
        <div className={container}>
          {feeds[key].map((feed) => {
            return <FeedElement key={feed.id} feed={feed} />;
          })}
        </div>
      </TabsContent>
    );
  });

  return (
    <div className={"col-span-2 m-auto w-full"}>
      <Tabs defaultValue="anime" className="w-full">
        <TabsList>
          <TabsTrigger value="today">Today</TabsTrigger>
          {tabsTrigger}
        </TabsList>
        {items.concat(tabsContent)}
      </Tabs>
    </div>
  );
};

export default FeedList;
