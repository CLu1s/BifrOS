"use client";

import { type QueueElement } from "@/features/wallpapers/types";
import React, { useMemo } from "react";
import { QueueImage } from "@/features/wallpapers/components/QueueImage";
import { cn } from "@/lib/utils";
import useFetchQueue from "@/features/wallpapers/hooks/useFetchQueue";

const Queue = () => {
  const { queueList } = useFetchQueue();
  const showQueue = useMemo(
    () =>
      queueList.map((image: QueueElement) => (
        <QueueImage key={image.id} image={image} />
      )),
    [queueList],
  );

  return (
    <div className={" w-full "}>
      <h2 className={"text-2xl font-semibold m-10"}>
        In Queue: {queueList.length}
      </h2>
      <div
        className={cn(
          "m-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-7  gap-4 md:gap-4  2xl:gap-6 md:px-10 xls:px-28  2xl:px-32",
        )}
      >
        {showQueue}
      </div>
    </div>
  );
};
export default Queue;
