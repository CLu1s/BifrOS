"use client";

import BookmarkItem from "./BookmarkItem";
import { Bookmark } from "@/features/bookmarks/types";

function BookmarkContainer(props: { bookmarks: Bookmark[] }) {
  const { bookmarks } = props;

  const dataToRender = bookmarks.map((url) => {
    return <BookmarkItem key={url.id} data={url} />;
  });

  return (
    <div className={"w-full"}>
      <h1>URLs</h1>
      <div className={"flex flex-col gap-2"}>{dataToRender}</div>
    </div>
  );
}

export default BookmarkContainer;
