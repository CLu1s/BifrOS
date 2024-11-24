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
    <Card className={" px-10 w-full "}>
      <CardHeader>
        <h2 className="text-2xl font-bold">Queue</h2>
      </CardHeader>
      <CardBody
        className={"max-w-full  overflow-x-auto overflow-y-hidden pb-10"}
      >
        <div className={` flex gap-2 lg:gap-6  `}>{showQueue}</div>
      </CardBody>
    </Card>
  );
};
export default Queue;
