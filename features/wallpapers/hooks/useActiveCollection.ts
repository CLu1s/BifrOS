import { CollectionInfo } from "@/features/wallpapers/types";
import { useSelector } from "react-redux";
import { selectActiveCollection } from "@/features/wallpapers/redux/wallpaperSelector";
import useActions from "@/features/wallpapers/hooks/useActions";
import { useCallback, useState } from "react";

export function useActiveCollection() {
  const activeCollection = useSelector(selectActiveCollection);
  const { setActiveCollection } = useActions();
  const [currentPage, setCurrentPage] = useState(1);
  const [resetKey, setResetKey] = useState(0);

  const selectCollection = useCallback(
    (collection: CollectionInfo) => {
      setCurrentPage(1);
      setActiveCollection(collection);
      setResetKey((prev) => prev + 1);
    },
    [setActiveCollection],
  );

  return {
    activeCollection,
    currentPage,
    setCurrentPage,
    selectCollection,
    resetKey,
  };
}
