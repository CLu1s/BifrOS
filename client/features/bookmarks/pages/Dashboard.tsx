"use client";
import { useEffect } from "react";
import CreateNewBookmark from "@/features/bookmarks/components/CreateNewBookmark";
import { useDispatch } from "react-redux";
import { setBookmarks } from "@/features/bookmarks/redux/bookmarksSlice";
import BookmarkContainer from "@/features/bookmarks/components/BookmarkContainer";
import { getBookmarksFromFirestore } from "@/features/bookmarks/lib";
import Categories from "@/features/bookmarks/components/Categories";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Divider } from "@heroui/react";
const BookmarksDashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await getBookmarksFromFirestore();
      dispatch(setBookmarks(data));
    })();
  }, []);

  return (
    <div
      className={" flex flex-col justify-center align-middle gap-8 m-2 lg:m-10"}
    >
      <CreateNewBookmark />
      <Divider />
      <div
        className={
          "container m-auto grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 gap-4"
        }
      >
        <div className={"col-span-1 mt-2"}>
          <Categories />
        </div>
        <div className={"col-span-3 xl:col-span-5 mt-2"}>
          <ScrollArea className={" h-[700px] w-full"}>
            <BookmarkContainer />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default BookmarksDashboard;
