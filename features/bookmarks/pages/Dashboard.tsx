"use client";
import { useEffect } from "react";
import CreateNewBookmark from "@/features/bookmarks/components/CreateNewBookmark";

import BookmarkContainer from "@/features/bookmarks/components/BookmarkContainer";
import { getBookmarksFromFirestore } from "@/features/bookmarks/lib";
// import Categories from "@/features/bookmarks/components/Categories";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Divider } from "@heroui/react";
const BookmarksDashboard = () => {
  useEffect(() => {
    (async () => {
      const data = await getBookmarksFromFirestore();
      console.log(data);
    })();
  }, []);

  return (
    <div
      className={" flex flex-col justify-center align-middle gap-8 m-2 lg:m-10"}
    >
      <CreateNewBookmark />
      <Divider />
      <div className={"container m-auto w-full"}>
        {/*<div className={"col-span-1 mt-2"}>*/}
        {/*  <Categories />*/}
        {/*</div>*/}
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
