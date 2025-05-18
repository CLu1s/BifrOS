"use client";
import BookmarkItem from "./BookmarkItem";
import useBookmark from "@/features/bookmarks/hooks/useBookmark";

function BookmarkContainer() {
  const { bookmarks } = useBookmark();

  const dataToRender = bookmarks.map((url) => {
    return <BookmarkItem key={url.id} data={url} />;
  });

  return (
    <div className={"w-full"}>
      <h1>URLs</h1>
      <div className={"flex flex-col 2xl:grid grid-cols-3 gap-2"}>
        {dataToRender}
      </div>
    </div>
  );
}

export default BookmarkContainer;
