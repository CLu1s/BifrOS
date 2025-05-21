"use client";
import BookmarkItem from "./BookmarkItem";
import useFetchBookmarks from "../hooks/useFetchBookmarks";
import { Bookmark } from "@/features/bookmarks/types";

function BookmarkContainer() {
  const { bookmarks } = useFetchBookmarks();
  console.log(bookmarks);
  const dataToRender = bookmarks.map((bookmark: Bookmark) => {
    return <BookmarkItem key={bookmark.id} data={bookmark} />;
  });

  return (
    <div className={"w-full"}>
      <h1>URLs</h1>
      <div className={" grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4"}>
        {dataToRender}
      </div>
    </div>
  );
}

export default BookmarkContainer;
