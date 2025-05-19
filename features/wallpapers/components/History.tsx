"use client";

import { HistoryElement } from "@/features/wallpapers/types";
import React from "react";
import { QueueImage } from "@/features/wallpapers/components/QueueImage";
import Card from "@/components/Card";

import Spinner from "@/components/Spinner";
import { cn } from "@/lib/utils";
import useFetchHistory from "@/features/wallpapers/hooks/useFetchHistory";

const History = () => {
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
    <div className={" px-10 xls:px-28  2xl:px-32"}>
      <h2 className={"text-2xl font-semibold m-10"}>History</h2>
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
    </div>
  );
};
export default History;
