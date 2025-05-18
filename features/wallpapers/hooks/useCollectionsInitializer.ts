import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCollectionsInfo } from "@/features/wallpapers/redux/wallpaperSelector";
import useActions from "@/features/wallpapers/hooks/useActions";

export function useCollectionsInitializer(data?: string) {
  const collections = useSelector(selectCollectionsInfo);
  const { setCollectionsInfo } = useActions();

  useEffect(() => {
    if (!data || collections.length > 0) return;
    try {
      const parsedData = JSON.parse(data);
      if (Array.isArray(parsedData)) {
        setCollectionsInfo(parsedData);
      }
    } catch (error) {
      console.error("Failed to parse data:", error);
    }
  }, [collections.length, data, setCollectionsInfo]);

  return collections;
}
