"use client";
import { QueueElement, QueueElementInput } from "@/features/wallpapers/types";

import { ImageWallpaper } from "@/features/wallpapers/classes/Image";
import useFetchQueue from "@/features/wallpapers/hooks/useFetchQueue";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const useQueue = () => {
  // const info = useSelector(selectCollectionsInfo);
  // const history = useSelector(getHistory);
  const { refreshQueue } = useFetchQueue();

  const removeImage = async (image: QueueElement) => {
    try {
      await fetch(`${API_URL}/api/wallpapers/queue/${image.id}`, {
        method: "DELETE",
      });
      await refreshQueue();
    } catch (error) {
      console.log(error);
    }
  };

  // const find = useCallback(
  //   (id: string | number | undefined) => {
  //     if (!id) return;
  //     return info.find((el) => el.id === id);
  //   },
  //   [info],
  // );

  const addImageToQueue = async (wallpaper: ImageWallpaper) => {
    const image = wallpaper.data;
    // const find = queueList.find((el) => el.id === image.data.id);
    // if (find) return;

    const element: QueueElementInput = {
      category: image.category,
      imageUrl: image.path,
      purity: image.purity,
      resolution: image.ratio,
      status: "pending",
      addedAt: new Date(),
      thumbnailUrl: image.thumbs.large,
      wallhavenId: image.id,
      aspectRatio: Number(image.ratio),
      priority: 100, //getNextQueueNumberOrder(),
    };
    try {
      await fetch(`${API_URL}/api/wallpapers/queue`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...element,
        }),
      });

      // dispatch(
      //   addToQueue({
      //     element,
      //     type,
      //   }),
      // );
    } catch (error) {
      console.log(error);
    }
  };

  return {
    // find,
    removeImage,
    addImageToQueue,
  };
};

export default useQueue;
