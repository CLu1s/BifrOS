"use client";

import { HistoryElement } from "@/features/wallpapers/types";
import React from "react";
import { QueueImage } from "@/features/wallpapers/components/QueueImage";
import Card, { ExtraButton } from "@/components/Card";

import Spinner from "@/components/Spinner";
import { cn } from "@/lib/utils";
import useFetchHistory from "@/features/wallpapers/hooks/useFetchHistory";

interface Props {
  showExtraButton?: boolean;
  allHistory?: boolean;
  isWidget?: boolean;
}

const History = ({ showExtraButton }: Props) => {
  const { historyList, isLoading } = useFetchHistory();
  console.log("historyList", historyList);
  const showQueue = historyList.map((image: HistoryElement) => (
    <QueueImage key={image.id} image={image} isHistory />
  ));

  if (isLoading) {
    return (
      <Card title={"History"}>
        <div className="flex justify-center items-center h-full">
          <Spinner />
        </div>
      </Card>
    );
  }

  return (
    <Card
      // className={" px-10 w-[calc(100vw-4.5rem)]  xl:w-[calc(100vw-15rem)] "}
      title={"History"}
      renderExtra={
        showExtraButton && (
          <ExtraButton href={"/wallpapers/history"}>View More</ExtraButton>
        )
      }
    >
      <div className={" h-[650px] xl:h-[800px] overflow-auto   pb-10"}>
        <div
          className={cn(
            ` grid grid-cols-2  gap-2 lg:gap-6`,
            "md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6",
          )}
        >
          {showQueue}
        </div>
      </div>
    </Card>
  );
};
export default History;
