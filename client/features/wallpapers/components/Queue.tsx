"use client";

import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { type QueueElement } from "@/features/wallpapers/types";
import React from "react";
import useWallpapers from "@/features/wallpapers/hooks/useWallpapers";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  type: "landscape" | "portrait";
};

const Queue = ({ type }: Props) => {
  const { getQueue } = useWallpapers();
  const cols = type === "portrait" ? "grid-cols-2  " : "grid-cols-1 ";

  const showQueue = getQueue(type).map((image: QueueElement) => (
    <div key={image.id}>
      <Image
        key={image.id}
        alt={image.url}
        src={image.url}
        className={"max-h-[310px]"}
      />
    </div>
  ));

  return (
    <Card>
      <CardHeader>
        <h3 className={"text-xl font-bold capitalize "}>Queue {type}</h3>
      </CardHeader>
      <CardBody>
        <ScrollArea className={"max-h-[40rem] w-full   "}>
          <div className={`grid  ${cols} gap-2 lg:gap-8`}>{showQueue}</div>
        </ScrollArea>
      </CardBody>
    </Card>
  );
};
export default Queue;
