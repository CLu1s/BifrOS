"use client";
import useWallpapers from "@/features/wallpapers/hooks/useWallpapers";
import { Image } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { fetchCollectionPage } from "@/features/wallpapers/lib";
import { Image as ImageType } from "../types";

const Jumbo = () => {
  const { addImageToQueue } = useWallpapers();
  const [index, setIndex] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const length = 63;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  const { data, error, isLoading } = fetchCollectionPage({
    collectionID: "hot",
    index: lastPage > 0 ? lastPage : 1,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>No data</div>;
  const metadata = data?.meta as { last_page: number };
  if (metadata && lastPage === 0) {
    setLastPage(Math.round(Math.random() * metadata.last_page));
    setIndex(1);
  }
  const images = data.data as ImageType[];
  if (index > images.length) {
    setLastPage(Math.round(Math.random() * metadata.last_page));
    setIndex(1);
  }
  if (!images[index] || !images[index].path) return <div>No data</div>;
  return (
    <div className="w-full h-full ">
      <button onClick={() => addImageToQueue(images[index])} type="button">
        <img
          className={
            "h-[600px] w-[1073px] max-h-[600px] min-w-fit object-cover object-top"
          }
          alt={images[index].path}
          src={images[index].path}
          width={1000}
          height={1000}
        />
      </button>
    </div>
  );
};

export default Jumbo;
