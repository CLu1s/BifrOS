import {
  selectActiveCategory,
  selectBookmarks,
  selectCategories,
} from "@/features/bookmarks/redux/bookmarkSelector";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const useBookmark = () => {
  const bookmarks = useSelector(selectBookmarks);
  const categories = useSelector(selectCategories);
  const activeCategory = useSelector(selectActiveCategory);
  const numberOfBookmarksByCategory = useMemo(() => {
    return bookmarks.reduce(
      (acc, bookmark) => {
        if (!bookmark.category) return acc;
        if (!acc[bookmark.category.id]) {
          acc[bookmark.category.id] = 0;
        }
        acc[bookmark.category.id] += 1;
        return acc;
      },
      {} as Record<string, number>,
    );
  }, [bookmarks]);

  const orderedBookmarks = useMemo(() => {
    return bookmarks.length > 0
      ? [...bookmarks]
          .filter((i) => {
            if (!activeCategory) return true;
            return i.category?.id === activeCategory.id;
          })
          .sort((a, b) => {
            return a.timestamp > b.timestamp ? -1 : 1;
          })
      : [];
  }, [bookmarks, activeCategory]);
  const favorites = orderedBookmarks.filter((bookmark) => bookmark.isFavorite);

  return {
    bookmarks: orderedBookmarks,
    favorites,
    categories,
    numberOfBookmarksByCategory,
  };
};

export default useBookmark;
