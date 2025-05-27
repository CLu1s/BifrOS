import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useFetchSources from "@/features/feed/hooks/useFetchSources";
import { useEffect, useState } from "react";
import FeedPageWrapper from "@/features/feed/components/FeedPageWrapper";

const FeedList = () => {
  const { sources } = useFetchSources();
  const [activeSource, setActiveSource] = useState<string>("");

  useEffect(() => {
    if (sources.length > 0 && !activeSource) {
      setActiveSource(sources[0].id);
    }
  }, [sources, activeSource]);
  console.log(activeSource);

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
        className={"capitalize text-2xl font-bold "}
      >
        <FeedPageWrapper sourceId={activeSource} />
      </TabsContent>
    );
  });

  return (
    <div className={"col-span-2 m-auto w-full px-8 min-h-[calc(100vh-4rem)]"}>
      <Tabs defaultValue="anime" className="w-full">
        <TabsList>{tabsTrigger}</TabsList>
        {tabsContent}
      </Tabs>
    </div>
  );
};

export default FeedList;
