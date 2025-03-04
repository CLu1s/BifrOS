"use client";

import { HistoryElement } from "@/features/wallpapers/types";
import React from "react";
import { QueueImage } from "@/features/wallpapers/components/QueueImage";
import Card, { ExtraButton } from "@/components/Card";
import useSWR from "swr";
import {
  allHistoryFromFirebaseFetcher,
  historyFromFirebaseFetcher,
} from "@/features/wallpapers/lib";
import Spinner from "@/components/Spinner";
import { cn } from "@/lib/utils";

interface Props {
  showExtraButton?: boolean;
  allHistory?: boolean;
  isWidget?: boolean;
}

const History = ({ showExtraButton, allHistory, isWidget }: Props) => {
  const historyKey = allHistory
    ? "wallpapers/myData/history/all"
    : "wallpapers/myData/history";

  const { data: history, isLoading } = useSWR(
    historyKey,
    allHistory ? allHistoryFromFirebaseFetcher : historyFromFirebaseFetcher,
  );

  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );
  if (!history) return null;

  const showQueue = history.map((image: HistoryElement) => (
    <QueueImage key={image.id} image={image} isHistory />
  ));

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
            isWidget
              ? "md:grid-cols-3 "
              : "md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6",
          )}
        >
          {showQueue}
        </div>
      </div>
    </Card>
  );
};
export default History;
