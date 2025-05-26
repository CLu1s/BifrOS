import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useFetchSources from "@/features/feed/hooks/useFetchSources";
import { useState } from "react";
import FeedPageWrapper from "@/features/feed/components/FeedPageWrapper";

const FeedList = () => {
  const [activeSource, setActiveSource] = useState("today");
  const { sources } = useFetchSources();

  const tabsTrigger = sources.map((source) => {
    return (
      <TabsTrigger
        key={source.id}
        value={source.id}
        onClick={() => {
          setActiveSource(source.id);
        }}
      >
        {source.name}
      </TabsTrigger>
    );
  });

  const tabsContent = sources.map((source) => {
    return (
      <TabsContent
        key={source.id}
        value={source.id}
        className={"capitalize text-2xl font-bold"}
      >
        <FeedPageWrapper sourceId={activeSource} />
      </TabsContent>
    );
  });

  return (
    <div className={"col-span-2 m-auto w-full px-8"}>
      <Tabs defaultValue="anime" className="w-full">
        <TabsList>
          <TabsTrigger value="today">Today</TabsTrigger>
          {tabsTrigger}
        </TabsList>
        {tabsContent}
      </Tabs>
    </div>
  );
};

export default FeedList;
