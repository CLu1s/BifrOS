"use client";

import { type QueueElement } from "@/features/wallpapers/types";
import React from "react";
import useWallpapers from "@/features/wallpapers/hooks/useWallpapers";
import { QueueImage } from "@/features/wallpapers/components/QueueImage";
import Card, { ExtraButton } from "@/components/Card";
import { cn } from "@/lib/utils";

interface Props {
  showExtraButton?: boolean;
  isWidget?: boolean;
}

const Queue = ({ showExtraButton, isWidget }: Props) => {
  const { queueList } = useWallpapers();

  const showQueue = queueList.map((image: QueueElement) => (
    <QueueImage key={image.id} image={image} />
  ));

  return (
    <Card
      title={`In Queue: ${queueList.length}`}
      renderExtra={
        showExtraButton && (
          <ExtraButton href={"/wallpapers"}>View More</ExtraButton>
        )
      }
    >
      <div
        className={
          " w-full max-h-[600px] lg:max-h-[800px]  2xl:max-h-[800px] overflow-auto   pb-10"
        }
      >
        <div
          className={cn(
            `grid grid-cols-2 gap-4`,
            isWidget
              ? "md:grid-cols-3 2xl:grid-cols-3"
              : "md:grid-cols-3 2xl:grid-cols-6",
          )}
        >
          {showQueue}
        </div>
      </div>
    </Card>
  );
};
export default Queue;
