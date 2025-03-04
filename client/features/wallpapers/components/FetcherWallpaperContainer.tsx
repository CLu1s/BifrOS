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
const FetcherWallpaperContainer = ({
  children,
  allHistory,
}: {
  children: ReactNode;
  allHistory?: boolean;
}) => {
  const dispatch = useDispatch();
  const { queueList, history } = useWallpapers();
  const {
    queue,
    isLoading,
    isError,
    isValidating,
    history: historyData,
  } = useFetchers(allHistory);
  const newQueueLength = queue.landscape.length + queue.portrait.length;
  useEffect(() => {
    if (
      !isLoading &&
      !isError &&
      !isValidating &&
      newQueueLength !== queueList.length
    ) {
      dispatch(setQueue(queue));
    }
  }, [
    isLoading,
    isError,
    isValidating,
    newQueueLength,
    queueList,
    queue,
    dispatch,
  ]);

  useEffect(() => {
    if (history.length !== historyData.length) {
      dispatch(setHistory(historyData));
    }
  }, [historyData, allHistory]);

  if (isLoading)
    return (
      <div
        className={
          "relative w-[calc(100vw-64px)] flex justify-center items-center"
        }
      >
        <Spinner />
      </div>
    );
  if (isError) return <div>Error...</div>;
  return <>{children}</>;
};

export default FetcherWallpaperContainer;
