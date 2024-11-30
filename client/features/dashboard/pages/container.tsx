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
import Generals from "@/features/dashboard/components/Generals";
import { useDispatch } from "react-redux";
import { getQueueFromFirebase } from "@/features/wallpapers/lib";
import { setQueue } from "@/features/wallpapers/redux/wallpaperSlice";
import { getScraperDocsFromFirebase } from "@/features/scrapper/lib";
import { setExecutions } from "@/features/scrapper/redux/scrapperSlice";
import useWallpapers from "@/features/wallpapers/hooks/useWallpapers";
import { getBookmarksFromFirestore } from "@/features/bookmarks/lib";
import { setBookmarks } from "@/features/bookmarks/redux/bookmarksSlice";
import LastScraperResult from "@/features/scrapper/components/LastScraperResult";
import NextInQueue from "@/features/wallpapers/components/NextInQueue";
import Favorites from "@/features/bookmarks/components/Favorites";
import LastAnimeCornerResult from "@/features/scrapper/components/LastAnimeCornerResult";
import LastBookmarks from "@/features/bookmarks/components/LastBookmarks";
import LastestFeed from "@/features/feed/components/LastestFeed";
import useActions from "@/features/feed/hooks/useActions";
import { getFeeds } from "@/features/feed/lib";

const Container = () => {
  const dispatch = useDispatch();
  const { setFeeds } = useActions();

  const { all } = useWallpapers();
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
    if (all.length > 0) return;
    (async () => {
      const data = await getQueueFromFirebase();
      dispatch(setQueue(data));
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

  useEffect(() => {
    (async () => {
      const result = await getFeeds();
      setFeeds(result);
    })();
  }, []);

  return (
    <div className={"flex flex-col gap-8 m-2 lg:m-10"}>
      <h1>Dashboard</h1>
      <div className={"grid grid-cols-1 lg:grid-cols-3 gap-4"}>
        <div className={"col-span-1 lg:col-span-2 w-full  "}>
          <RecentActivity activities={activities} />
        </div>
        <div className={"col-span-1 flex flex-col gap-2 "}>
          <Generals />
          <Favorites />
        </div>
        <div className={"flex gap-4 w-full col-span-1 lg:col-span-3"}>
          <LastestFeed />
        </div>
        <div className={"flex gap-4 w-full col-span-1 lg:col-span-3"}>
          <LastBookmarks />
        </div>
        <div className={" col-span-1 lg:col-span-2     "}>
          <LastScraperResult />
        </div>

        <div className={"flex flex-col gap-4 col-span-1"}>
          <NextInQueue />
          <LastAnimeCornerResult />
        </div>
      </div>
    </div>
  );
};

export default Container;
