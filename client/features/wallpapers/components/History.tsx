"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { HistoryElement } from "@/features/wallpapers/types";
import React from "react";
import useWallpapers from "@/features/wallpapers/hooks/useWallpapers";
import { QueueImage } from "@/features/wallpapers/components/QueueImage";

const History = () => {
  const { history } = useWallpapers();
  const showQueue = history.map((image: HistoryElement) => (
    <QueueImage key={image.id} image={image} isHistory />
  ));

  return (
    <Card
      className={"px-4"}
      // className={" px-10 w-[calc(100vw-4.5rem)]  xl:w-[calc(100vw-15rem)] "}
    >
      <CardHeader>
        <h2 className="text-2xl font-bold">History</h2>
      </CardHeader>
      <CardBody className={" h-[650px] xl:h-[800px] overflow-auto   pb-10"}>
        <div className={` grid grid-cols-1 gap-2 lg:gap-6  `}>{showQueue}</div>
      </CardBody>
    </Card>
  );
};
export default History;
