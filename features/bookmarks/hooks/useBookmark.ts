import {
  selectActiveCategory,
  selectBookmarks,
  selectCategories,
  selectFilterByTerm,
} from "@/features/bookmarks/redux/bookmarkSelector";
import { useSelector } from "react-redux";
import { useMemo, useCallback } from "react";
import { toast } from "react-hot-toast";
import useActions from "./useActions";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const useBookmark = () => {
  const { addBookmark, setFilterByTerm } = useActions();
  const bookmarks = useSelector(selectBookmarks);
  const filterByTerm = useSelector(selectFilterByTerm);
  const categories = useSelector(selectCategories);
  const activeCategory = useSelector(selectActiveCategory);
  const numberOfBookmarksByCategory = useMemo(() => {
    return 0;
  }, []);

  const orderedBookmarks = useMemo(() => {
    return bookmarks.length > 0
      ? [...bookmarks]
          .filter((bookmark) => {
            if (!filterByTerm) return true;
            console.log("bookmark", bookmark);
            return (
              bookmark.title
                ?.toLowerCase()
                .includes(filterByTerm.toLowerCase()) ||
              bookmark.url.toLowerCase().includes(filterByTerm.toLowerCase())
            );
          })
          .sort((a, b) => {
            return a.createdAt > b.createdAt ? -1 : 1;
          })
      : [];
  }, [bookmarks, activeCategory, filterByTerm]);

  const favorites = orderedBookmarks.filter((bookmark) => bookmark.isFavorite);

  const createBookmark = useCallback(async (url: string, id?: string) => {
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
  }, []);

  const deleteBookmark = useCallback(async (id: string) => {
    await fetch(`${API_URL}/api/bookmarks/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete bookmark");
        }
        return res.json();
      })
      .then(() => {
        toast.success("Bookmark deleted");
      })
      .catch(() => {
        toast.error("Failed to delete bookmark");
      });
  }, []);

  return {
    bookmarks: orderedBookmarks,
    favorites,
    categories,
    numberOfBookmarksByCategory,
    createBookmark,
    filterByTerm,
    deleteBookmark,
    setFilterByTerm,
  };
};

export default useBookmark;
