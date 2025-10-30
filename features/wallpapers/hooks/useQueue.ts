"use client";
import { QueueElement, QueueElementInput } from "@/features/wallpapers/types";

import { ImageWallpaper } from "@/features/wallpapers/classes/Image";
import useFetchQueue from "@/features/wallpapers/hooks/useFetchQueue";
import { toast } from "react-hot-toast";
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
      await refreshQueue();
      toast.success("Added to the queue");
    } catch (error) {
      console.log(error);
    }
  };

  const updatePriority = async (imageId: string, newPriority: number) => {
    try {
      await fetch(`${API_URL}/api/wallpapers/queue/${imageId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priority: newPriority,
        }),
      });
      await refreshQueue();
    } catch (error) {
      console.log(error);
      toast.error("Error updating priority");
    }
  };

  const bulkUpdatePriorities = async (updates: { id: string; priority: number }[]) => {
    try {
      await Promise.all(
        updates.map(({ id, priority }) =>
          fetch(`${API_URL}/api/wallpapers/queue/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ priority }),
          })
        )
      );
      await refreshQueue();
    } catch (error) {
      console.log(error);
      toast.error("Error updating priorities");
    }
  };

  return {
    // find,
    removeImage,
    addImageToQueue,
    updatePriority,
    bulkUpdatePriorities,
  };
};

export default useQueue;
