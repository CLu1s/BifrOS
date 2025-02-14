"use client";

import { useEffect } from "react";

import { getScraperDocsFromFirebase } from "@/features/scrapper/lib";
import { setExecutions } from "@/features/scrapper/redux/scrapperSlice";
import { getBookmarksFromFirestore } from "@/features/bookmarks/lib";
import { setBookmarks } from "@/features/bookmarks/redux/bookmarksSlice";
import LastScraperResult from "@/features/scrapper/components/LastScraperResult";
import PageLayout from "@/components/PageLayout";
import FetcherWallpaperContainer from "@/features/wallpapers/components/FetcherWallpaperContainer";
import { useDispatch } from "react-redux";
import { Execution } from "@/features/scrapper/types";
import BookmarkWidget from "@/features/bookmarks/components/BookmarkWidget";
import Queue from "@/features/wallpapers/components/Queue";
import LatestFeedContainer from "@/features/feed/components/LatestFeedContainer";

const DashboardContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const data =
        (await getScraperDocsFromFirebase()) as unknown as Execution[];
      dispatch(setExecutions(data));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await getBookmarksFromFirestore();
      dispatch(setBookmarks(data));
    })();
  }, []);

  return (
    <PageLayout
      title={"Bienvenido"}
      className={"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-4 "}
    >
      <div className={"col-span-1  lg:col-span-2 2xl:col-span-1"}>
        <LatestFeedContainer />
      </div>

      <div className={" col-span-1 md:col-span-2 2xl:col-span-1"}>
        <BookmarkWidget />
      </div>

      <div className={" col-span-1 lg:col-span-2 2xl:col-span-1 "}>
        <LastScraperResult />
      </div>
      <div className={" col-span-1 lg:col-span-2 2xl:col-span-1"}>
        <FetcherWallpaperContainer>
          <Queue showExtraButton />
        </FetcherWallpaperContainer>
      </div>
    </PageLayout>
  );
};

export default DashboardContainer;
