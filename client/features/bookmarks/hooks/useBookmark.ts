import {
  selectActiveCategory,
  selectBookmarks,
  selectCategories,
} from "@/features/bookmarks/redux/bookmarkSelector";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { toast } from "react-hot-toast";
import useActions from "./useActions";
import { deleteFromFirestore } from "@/firebase/services";

const useBookmark = () => {
  const { addBookmark, removeBookmark } = useActions();
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

  const createBookmark = async (url: string, id?: string) => {
    const toastId = toast.loading("Adding bookmark");
    try {
      const serverUrl = process.env.NEXT_PUBLIC_SAVE_BOOKMARK_URL || "";
      const response = await fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: url.trim(), id }),
      });
      const result = await response.json();
      addBookmark(result);

      toast.success("Bookmark added", {
        id: toastId,
      });
    } catch {
      toast.error("Failed to extract metadata", {
        id: toastId,
      });
      return;
    }
  };

  const deleteBookmark = async (id: string) => {
    removeBookmark(id);
    await deleteFromFirestore(`bookmarker/myData/bookmarks/${id}`);
  };

  return {
    bookmarks: orderedBookmarks,
    favorites,
    categories,
    numberOfBookmarksByCategory,
    createBookmark,
    deleteBookmark,
  };
};

export default useBookmark;
