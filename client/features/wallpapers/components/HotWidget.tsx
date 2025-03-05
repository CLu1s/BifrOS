import type { Image as ImageType } from "@/features/wallpapers/types";
import React from "react";
import Card from "@/components/Card";
import ServerGalleryImage from "@/features/wallpapers/components/ServerGalleryImage";

const SEARCH_URL = "https://wallhaven.cc/api/v1/search?";
const KEY = process.env.WALLHAVEN_KEY;
const REVALIDATE = 3600;

const buildUrl = (
  sorting: "date_added" | "hot" | "toplist" | "views" | "relevance" | "random",
  ratio?: "portrait" | "landscape",
  topRange?: "1d" | "3d" | "1w" | "1M" | "3M" | "6M" | "1y",
) => {
  let url = `${SEARCH_URL}sorting=${sorting}&apikey=${KEY}`;
  if (ratio) url += `&ratios=${ratio}`;
  if (topRange) url += `&topRange=${topRange}`;
  return url;
};

async function getAllCollections() {
  const hotCollections = await fetch(buildUrl("hot"), {
    next: { revalidate: REVALIDATE },
  });

  const hotCollectionsJson = await hotCollections.json();
  return {
    data: hotCollectionsJson.data,
  };
}

export default async function HotWidget() {
  const [hotCollection] = await Promise.all([getAllCollections()]);
  const images = hotCollection.data.map((imageRaw: ImageType) => {
    return (
      <ServerGalleryImage
        key={imageRaw.id}
        imageString={JSON.stringify(imageRaw)}
      />
    );
  });
  return (
    <Card title={"Hot"}>
      <div
        className={
          "grid grid-cols-2 xl:grid-cols-4 gap-4 max-h-[700px] overflow-auto "
        }
      >
        {images}
      </div>
    </Card>
  );
}
