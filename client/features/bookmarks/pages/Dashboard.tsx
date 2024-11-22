"use client";
import { useEffect } from "react";
import CreateNewBookmark from "@/features/bookmarks/components/CreateNewBookmark";
import { useDispatch } from "react-redux";
import { setBookmarks } from "@/features/bookmarks/redux/bookmarksSlice";
import useBookmark from "@/features/bookmarks/hooks/useBookmark";
import BookmarkContainer from "@/features/bookmarks/components/BookmarkContainer";
import { getBookmarksFromFirestore } from "@/features/lib";

const BookmarksDashboard = () => {
  const dispatch = useDispatch();
  const { bookmarks } = useBookmark();
  useEffect(() => {
    (async () => {
      const data = await getBookmarksFromFirestore();
      dispatch(setBookmarks(data));
    })();
  }, []);

  return (
    <div className={"flex flex-col gap-8 m-2 lg:m-10"}>
      <h1 className={"text-2xl font-bold"}>Bookmarks</h1>
      <CreateNewBookmark />
      <BookmarkContainer bookmarks={bookmarks} />
    </div>
  );
};

export default BookmarksDashboard;
