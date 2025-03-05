"use client";
import { useEffect, useState } from "react";
import useWallpapers from "@/features/wallpapers/hooks/useWallpapers";
import { QueueElement } from "@/features/wallpapers/types";

function Cover() {
  const [image, setImage] = useState<QueueElement | null>(null);
  const { getLandscapeRandomImage, queueList } = useWallpapers();
  useEffect(() => {
    if (queueList.length === 0 || image) return;
    const rndImage = getLandscapeRandomImage();
    setImage(rndImage);
  }, [queueList, image]);
  return (
    <div className="w-full h-96 bg-gray-800 flex ">
      {image && (
        <img
          src={`/wh-proxy?url=${image.path}`}
          className={"w-full object-cover"}
        />
      )}
    </div>
  );
}

export default Cover;
