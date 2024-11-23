import { selectBookmarks } from "@/features/bookmarks/redux/bookmarkSelector";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const useBookmark = () => {
  const bookmarks = useSelector(selectBookmarks);
  const orderedBookmarks = useMemo(() => {
    return bookmarks.length > 0
      ? [...bookmarks].sort((a, b) => {
          return a.timestamp > b.timestamp ? -1 : 1;
        })
      : [];
  }, [bookmarks]);
  const favorites = orderedBookmarks.filter((bookmark) => bookmark.isFavorite);
  return { bookmarks: orderedBookmarks, favorites };
};

export default useBookmark;
