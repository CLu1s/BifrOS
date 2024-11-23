"use client";

import { Card, CardBody, CardHeader, Image, Button } from "@nextui-org/react";
import { type QueueElement } from "@/features/wallpapers/types";
import React from "react";
import useWallpapers from "@/features/wallpapers/hooks/useWallpapers";
import { CircleX } from "lucide-react";

const Queue = () => {
  const { all, removeImage } = useWallpapers();

  const showQueue = all.map((image: QueueElement) => (
    <div key={image.id} className="border-none  relative shrink-0">
      <Button
        isIconOnly
        variant={"light"}
        color={"danger"}
        className={"absolute z-40 right-1"}
        size={"sm"}
        onPress={() => removeImage(image)}
      >
        <CircleX />
      </Button>
      <Image
        key={image.id}
        alt={image.url}
        src={image.url}
        height={200}
        width={240}
        className={"rounded object-cover"}
      />
    </div>
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
