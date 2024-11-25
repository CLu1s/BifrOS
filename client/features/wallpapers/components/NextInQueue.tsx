"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import useWallpapers from "@/features/wallpapers/hooks/useWallpapers";
import { QueueImage } from "@/features/wallpapers/components/QueueImage";
import GalleryModal from "@/features/wallpapers/components/GalleryModal";

const NextInQueue = () => {
  const { getQueue } = useWallpapers();
  const portrait = getQueue("portrait");
  const landscape = getQueue("landscape");

  return (
    <>
      <Card className={"p-2"}>
        <CardHeader>
          <h2 className={"text-xl font-semibold"}>Next wallpaper in queue </h2>
        </CardHeader>
        <CardBody>
          <div className={"grid grid-cols-1  2xl:grid-cols-2 gap-4  m-auto"}>
            <div className={"flex flex-col gap-2 text-center"}>
              <QueueImage image={landscape[0]} />

              <p>Wallpapers on landscape queue: {landscape.length}</p>
            </div>
            <div className={"flex flex-col gap-2 text-center"}>
              <QueueImage image={portrait[0]} />

              <p>Wallpapers on portrait queue: {portrait.length}</p>
            </div>
          </div>
        </CardBody>
      </Card>
      <GalleryModal />
    </>
  );
};

export default NextInQueue;
