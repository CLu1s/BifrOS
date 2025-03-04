"use client";

import React, { useEffect } from "react";
import { getBookmarksFromFirestore } from "@/features/bookmarks/lib";
import { setBookmarks } from "@/features/bookmarks/redux/bookmarksSlice";
import LastScraperResult from "@/features/scrapper/components/LastScraperResult";
import PageLayout from "@/components/PageLayout";
import FetcherWallpaperContainer from "@/features/wallpapers/components/FetcherWallpaperContainer";
import { useDispatch } from "react-redux";
import BookmarkWidget from "@/features/bookmarks/components/BookmarkWidget";
import Queue from "@/features/wallpapers/components/Queue";
import LatestFeedContainer from "@/features/feed/components/LatestFeedContainer";
import Cover from "@/features/dashboard/components/Cover";
import { ExtraButton } from "@/components/Card";

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
      className={"grid grid-cols-1  md:grid-cols-[60%_40%] gap-8 "}
    >
      <div className={"flex flex-col order-3 md:order-2   gap-8"}>
        <FetcherWallpaperContainer>
          <Queue
            extraButton={
              <ExtraButton href={"/wallpapers"}>View More</ExtraButton>
            }
            isWidget
          />
        </FetcherWallpaperContainer>

        <LastScraperResult isWidget />
      </div>
      <div className={"flex flex-col order-1 md:order-2 gap-8"}>
        <LatestFeedContainer />
        <BookmarkWidget />
      </div>
    </PageLayout>
  );
};

export default DashboardContainer;
