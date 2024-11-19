"use client";
import { useEffect, useState } from "react";
import CreateNewBookmark from "@/features/bookmarks/components/CreateNewBookmark";
import { readDocsFromFirestore } from "@/firebase/services";
import { Execution } from "@/features/scrapper/types";
import { setExecutions } from "@/features/scrapper/redux/scrapperSlice";
import { useDispatch } from "react-redux";
import { Bookmark } from "@/features/bookmarks/types";
import { setBookmarks } from "@/features/bookmarks/redux/bookmarksSlice";
import useBookmark from "@/features/bookmarks/hooks/useBookmark";
import BookmarkContainer from "@/features/bookmarks/components/BookmarkContainer";

const BookmarksDashboard = () => {
  const dispatch = useDispatch();
  const { bookmarks } = useBookmark();
  useEffect(() => {
    (async () => {
      const data = (await readDocsFromFirestore(
        "bookmarker/myData/bookmarks",
      )) as Bookmark[];
      console.log(data);
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
