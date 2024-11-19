import { selectBookmarks } from "@/features/bookmarks/redux/bookmarkSelector";
import { useSelector } from "react-redux";

const useBookmark = () => {
  const bookmarks = useSelector(selectBookmarks);

  return { bookmarks };
};

export default useBookmark;
