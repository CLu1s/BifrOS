import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useFetchSources from "@/features/feed/hooks/useFetchSources";
import { useEffect, useState } from "react";
import FeedPageWrapper from "@/features/feed/components/FeedPageWrapper";

const FeedList = () => {
  const { sources } = useFetchSources();
  const [activeSource, setActiveSource] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (sources.length > 0 && !activeSource) {
      setActiveSource(sources[0].id);
      setIsLoading(false);
    }
  }, [sources, activeSource]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

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
      <Tabs defaultValue={activeSource} className="w-full ">
        <div className={"overflow-auto w-full "}>
          <TabsList>{tabsTrigger}</TabsList>
        </div>
        {tabsContent}
      </Tabs>
    </div>
  );
};

export default FeedList;
