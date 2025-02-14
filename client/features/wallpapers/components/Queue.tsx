"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { type QueueElement } from "@/features/wallpapers/types";
import React from "react";
import useWallpapers from "@/features/wallpapers/hooks/useWallpapers";
import { QueueImage } from "@/features/wallpapers/components/QueueImage";

const Queue = () => {
  const { all } = useWallpapers();

  const showQueue = all.map((image: QueueElement) => (
    <QueueImage key={image.id} image={image} />
  ));

  return (
    <Card
      className={"p-2 w-full"}
      // className={" px-10 w-[calc(100vw-4.5rem)]  xl:w-[calc(100vw-15rem)] "}
    >
      <CardHeader>
        <h2 className="text-xl font-bold">In Queue: {all.length}</h2>
      </CardHeader>
      <CardBody className={" w-full max-h-[650px] overflow-auto   pb-10"}>
        <div
          className={`grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4`}
        >
          {showQueue}
        </div>
      </CardBody>
    </Card>
  );
};
export default Queue;
