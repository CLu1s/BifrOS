"use client";

import { useEffect } from "react";
import { getBookmarksFromFirestore } from "@/features/bookmarks/lib";
import { setBookmarks } from "@/features/bookmarks/redux/bookmarksSlice";
import LastScraperResult from "@/features/scrapper/components/LastScraperResult";
import PageLayout from "@/components/PageLayout";
import FetcherWallpaperContainer from "@/features/wallpapers/components/FetcherWallpaperContainer";
import { useDispatch } from "react-redux";
import BookmarkWidget from "@/features/bookmarks/components/BookmarkWidget";
import Queue from "@/features/wallpapers/components/Queue";
import LatestFeedContainer from "@/features/feed/components/LatestFeedContainer";

const DashboardContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const data = await getBookmarksFromFirestore();
      dispatch(setBookmarks(data));
    })();
  }, []);

  return (
    <PageLayout
      title={"Bienvenido"}
      className={"grid grid-cols-1  md:grid-cols-[70%_30%] gap-4 "}
    >
      <div
        className={
          "grid grid-cols-1 order-3 md:order-2 xl:grid-rows-[650px_repeat(3,_minmax(700px,700px))] gap-4"
        }
      >
        <LatestFeedContainer />
        <LastScraperResult />
      </div>
      <div
        className={
          "grid grid-cols-1 order-1 md:order-2 xl:grid-rows-[650px_repeat(3,_minmax(700px,700px))] gap-4"
        }
      >
        <BookmarkWidget />
        <FetcherWallpaperContainer>
          <Queue showExtraButton isWidget />
        </FetcherWallpaperContainer>
      </div>
    </PageLayout>
  );
};

export default DashboardContainer;
