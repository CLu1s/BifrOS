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
  return { bookmarks: orderedBookmarks };
};

export default useBookmark;
