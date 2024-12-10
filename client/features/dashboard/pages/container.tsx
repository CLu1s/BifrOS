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
import Favorites from "@/features/bookmarks/components/Favorites";
import LastAnimeCornerResult from "@/features/scrapper/components/LastAnimeCornerResult";
import LastBookmarks from "@/features/bookmarks/components/LastBookmarks";
import LatestFeed from "@/features/feed/components/LatestFeed";
import useActions from "@/features/feed/hooks/useActions";
import PageLayout from "@/components/PageLayout";
import FetcherWallpaperContainer from "@/features/wallpapers/components/FetcherWallpaperContainer";
import { useDispatch } from "react-redux";

const Container = () => {
  const dispatch = useDispatch();
  const { setFeeds } = useActions();

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    (async () => {
      const db = getFirestore();
      const ref = collection(db, "activities");
      const q = query(ref, orderBy("timestamp", "desc"), limit(7));
      const data = (await queryFirestore(q)) as Activity[];
      setActivities(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await getScraperDocsFromFirebase();
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
      <div className={"col-span-1 "}>
        <Favorites />
      </div>
      <div className={"col-span-1 lg:col-span-1 "}>
        <RecentActivity activities={activities} />
      </div>

      <div className={" col-span-1 lg:col-span-2 2xl:col-span-2"}>
        <LatestFeed />
      </div>
      <div className={" col-span-1 lg:col-span-1"}>
        <LastBookmarks />
      </div>
      <div className={" col-span-1 lg:col-span-3 "}>
        <LastScraperResult />
      </div>
      <div className={" col-span-1 lg:col-span-2  2xl:col-span-1"}>
        <FetcherWallpaperContainer>
          <NextInQueue />
        </FetcherWallpaperContainer>
      </div>
      <div className={"col-span-1"}>
        <LastAnimeCornerResult />
      </div>
    </PageLayout>
  );
};

export default Container;
