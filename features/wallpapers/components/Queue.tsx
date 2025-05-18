"use client";

import { type QueueElement } from "@/features/wallpapers/types";
import React, { useMemo } from "react";
import { QueueImage } from "@/features/wallpapers/components/QueueImage";
import Card from "@/components/Card";
import { cn } from "@/lib/utils";
import useFetchQueue from "@/features/wallpapers/hooks/useFetchQueue";

interface Props {
  extraButton?: React.ReactNode;
  isWidget?: boolean;
}

const Queue = ({ extraButton, isWidget }: Props) => {
  const { queueList } = useFetchQueue();
  const showQueue = useMemo(
    () =>
      queueList.map((image: QueueElement) => (
        <QueueImage key={image.id} image={image} />
      )),
    [queueList],
  );

  return (
    <Card title={`In Queue: ${queueList.length}`} renderExtra={extraButton}>
      <div className={" w-full "}>
        <div
          className={cn(
            `grid grid-cols-2 gap-4`,
            isWidget
              ? "md:grid-cols-4 2xl:grid-cols-5 "
              : "md:grid-cols-4 2xl:grid-cols-6",
          )}
        >
          {showQueue}
        </div>
      </div>
    </Card>
  );
};
export default Queue;
