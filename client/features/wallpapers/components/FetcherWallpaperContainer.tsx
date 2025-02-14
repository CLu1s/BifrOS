"use client";
import { ReactNode, useEffect } from "react";
import useFetchers from "@/features/wallpapers/hooks/useFetchers";
import {
  setHistory,
  setQueue,
} from "@/features/wallpapers/redux/wallpaperSlice";
import { useDispatch } from "react-redux";
import useWallpapers from "@/features/wallpapers/hooks/useWallpapers";
import Spinner from "@/components/Spinner";
const FetcherWallpaperContainer = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const { all, history } = useWallpapers();
  const {
    queue,
    isLoading,
    isError,
    isValidating,
    history: historyData,
  } = useFetchers();
  const newQueueLength = queue.landscape.length + queue.portrait.length;

  useEffect(() => {
    if (
      !isLoading &&
      !isError &&
      !isValidating &&
      newQueueLength !== all.length
    ) {
      dispatch(setQueue(queue));
    }
  }, [isLoading, isError, isValidating, newQueueLength, all, queue, dispatch]);

  useEffect(() => {
    if (history.length !== historyData.length) {
      dispatch(setHistory(historyData));
    }
  }, []);

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error...</div>;
  return <>{children}</>;
};

export default FetcherWallpaperContainer;
