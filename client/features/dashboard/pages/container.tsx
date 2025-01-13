"use client";

import { useEffect, useState } from "react";
import { queryFirestore } from "@/firebase/services";
import { Activity } from "@/features/dashboard/types";
import RecentActivity from "@/features/dashboard/components/RecentActivity";
import {
  collection,
  getFirestore,
  query,
  limit,
  orderBy,
} from "firebase/firestore";
import { getScraperDocsFromFirebase } from "@/features/scrapper/lib";
import { setExecutions } from "@/features/scrapper/redux/scrapperSlice";
import { getBookmarksFromFirestore } from "@/features/bookmarks/lib";
import { setBookmarks } from "@/features/bookmarks/redux/bookmarksSlice";
import LastScraperResult from "@/features/scrapper/components/LastScraperResult";
import NextInQueue from "@/features/wallpapers/components/NextInQueue";
import LastAnimeCornerResult from "@/features/scrapper/components/LastAnimeCornerResult";
import LatestFeed from "@/features/feed/components/LatestFeed";
import PageLayout from "@/components/PageLayout";
import FetcherWallpaperContainer from "@/features/wallpapers/components/FetcherWallpaperContainer";
import { useDispatch } from "react-redux";
import { Execution } from "@/features/scrapper/types";
import BookmarkWidget from "@/features/bookmarks/components/BookmarkWidget";
import Queue from "@/features/wallpapers/components/Queue";

const Container = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const db = getFirestore();
      const ref = collection(db, "activities");
      const q = query(ref, orderBy("timestamp", "desc"), limit(7));
      const data = (await queryFirestore(q)) as Activity[];
    })();
  }, []);

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
    <PageLayout title={"Bienvenido"}>
      <div className={"col-span-2 2xl:col-span-1"}>
        <LatestFeed />
      </div>

      <div className={" col-span-1 lg:col-span-3 2xl:col-span-1"}>
        <BookmarkWidget />
      </div>

      <div className={" col-span-1 lg:col-span-3 "}>
        <LastScraperResult />
      </div>
      <div className={" col-span-1 lg:col-span-2  2xl:col-span-2"}>
        <FetcherWallpaperContainer>
          <Queue />
        </FetcherWallpaperContainer>
      </div>
    </PageLayout>
  );
};

export default Container;
