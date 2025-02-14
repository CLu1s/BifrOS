"use client";

import { type QueueElement } from "@/features/wallpapers/types";
import React from "react";
import useWallpapers from "@/features/wallpapers/hooks/useWallpapers";
import { QueueImage } from "@/features/wallpapers/components/QueueImage";
import Card, { ExtraButton } from "@/components/Card";

interface Props {
  showExtraButton?: boolean;
}

const Queue = ({ showExtraButton }: Props) => {
  const { all } = useWallpapers();

  const showQueue = all.map((image: QueueElement) => (
    <QueueImage key={image.id} image={image} />
  ));

  return (
    <Card
      title={`In Queue: ${all.length}`}
      renderExtra={
        showExtraButton && (
          <ExtraButton href={"/wallpapers"}>View More</ExtraButton>
        )
      }
    >
      <div className={" w-full max-h-[650px] overflow-auto   pb-10"}>
        <div
          className={`grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4`}
        >
          {showQueue}
        </div>
      </div>
    </Card>
  );
};
export default Queue;
