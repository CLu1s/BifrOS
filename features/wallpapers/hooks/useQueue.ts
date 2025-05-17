"use client";
import {
  getHistory,
  landscapeQueue,
  portraitQueue,
  selectCollectionsInfo,
} from "@/features/wallpapers/redux/wallpaperSelector";
import { useDispatch, useSelector } from "react-redux";
import type { QueueElement } from "@/features/wallpapers/types";
import { deleteFromFirestore, saveOnFirestore } from "@/firebase/services";
import {
  addToQueue,
  removeFromQueue,
} from "@/features/wallpapers/redux/wallpaperSlice";
import useFetchers from "@/features/wallpapers/hooks/useFetchers";
import { orderQueue } from "@/features/wallpapers/lib";
import { ImageWallpaper } from "@/features/wallpapers/classes/Image";

const useQueue = () => {
  const { revalidateCache } = useFetchers();
  const dispatch = useDispatch();
  const landscape = useSelector(landscapeQueue);
  const portrait = useSelector(portraitQueue);
  const info = useSelector(selectCollectionsInfo);
  const history = useSelector(getHistory);
  const queueList = [...landscape, ...portrait].sort(orderQueue);

  const removeImage = async (image: QueueElement) => {
    await deleteFromFirestore(`wallpapers/myData/${image.queue}/${image.id}`);
    const type = Number(image.ratio) < 1 ? "portrait" : "landscape";
    dispatch(removeFromQueue({ id: image.id, type: type }));
    revalidateCache();
  };

  const getQueue = (type: "landscape" | "portrait") => {
    if (type === "landscape") {
      return landscape;
    }
    return portrait;
  };

  const getNextQueueNumberOrder = () => {
    const all = [...landscape, ...portrait];
    if (all.length === 0) return 1;
    const queueNumbers = all.map((element) => element.order);
    const maxNumber = Math.max(...queueNumbers, 0);
    return maxNumber + 1;
  };

  const find = (id: string | number | undefined) => {
    if (!id) return;
    return info.find((el) => el.id === id);
  };

  const addImageToQueue = async (image: ImageWallpaper) => {
    const find = queueList.find((el) => el.id === image.data.id);
    if (find) return;
    const type = image.getType();

    const element: QueueElement = {
      ...image.data,
      addedAt: new Date().toISOString(),
      isActive: false,
      order: getNextQueueNumberOrder(),
      queue: `${type}-queue`,
    };

    try {
      await saveOnFirestore(
        `wallpapers/myData/${type}-queue/${image.data.id}`,
        element,
      );
      revalidateCache();
      dispatch(
        addToQueue({
          element,
          type,
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getRandomImage = () => {
    const random = Math.floor(Math.random() * queueList.length);
    return queueList[random];
  };
  const getLandscapeRandomImage = (): QueueElement => {
    const random = Math.floor(Math.random() * landscape.length);
    if (!landscape[random]) return getLandscapeRandomImage();
    return landscape[random];
  };

  return {
    getLandscapeRandomImage,
    getRandomImage,
    getNextQueueNumberOrder,
    getQueue,
    find,
    removeImage,
    queueList,
    addImageToQueue,
    history,
  };
};

export default useQueue;
