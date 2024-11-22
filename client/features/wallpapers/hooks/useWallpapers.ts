import {
  landscapeQueue,
  portraitQueue,
  selectCollectionsInfo,
} from "@/features/wallpapers/redux/wallpaperSelector";
import { useDispatch, useSelector } from "react-redux";
import type { QueueElement } from "@/features/wallpapers/types";
import { deleteFromFirestore } from "@/firebase/services";
import { removeFromQueue } from "@/features/wallpapers/redux/wallpaperSlice";

const useWallpapers = () => {
  const dispatch = useDispatch();
  const landscape = useSelector(landscapeQueue);
  const portrait = useSelector(portraitQueue);
  const info = useSelector(selectCollectionsInfo);

  const removeImage = async (image: QueueElement) => {
    await deleteFromFirestore(`wallpapers/myData/${image.queue}/${image.id}`);
    dispatch(removeFromQueue({ id: image.id, type: image.type }));
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

  return {
    getNextQueueNumberOrder,
    getQueue,
    find,
    removeImage,
    all: [...landscape, ...portrait].sort((a, b) => a.order - b.order),
  };
};

export default useWallpapers;
