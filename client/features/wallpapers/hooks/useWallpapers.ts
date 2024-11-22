import {
  landscapeQueue,
  portraitQueue,
} from "@/features/wallpapers/redux/wallpaperSelector";
import { useSelector } from "react-redux";

const useWallpapers = () => {
  const landscape = useSelector(landscapeQueue);
  const portrait = useSelector(portraitQueue);

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
  return {
    getNextQueueNumberOrder,
    getQueue,
    all: [...landscape, ...portrait],
  };
};

export default useWallpapers;
