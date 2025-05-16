"use client";
import Favorites from "@/features/bookmarks/components/Favorites";
import LastBookmarks from "@/features/bookmarks/components/LastBookmarks";
import Card, { ExtraButton } from "@/components/Card";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBookmarksFromFirestore } from "@/features/bookmarks/lib";
import { setBookmarks } from "@/features/bookmarks/redux/bookmarksSlice";

const BookmarkWidget = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const data = await getBookmarksFromFirestore();
      dispatch(setBookmarks(data));
    })();
  }, []);
  return (
    <Card
      title={"Bookmarks"}
      renderExtra={<ExtraButton href={"/feed"}>View All</ExtraButton>}
    >
      <Favorites />
      <LastBookmarks />
    </Card>
  );
};

export default BookmarkWidget;
