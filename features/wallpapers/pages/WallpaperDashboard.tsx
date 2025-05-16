import Container from "@/features/wallpapers/components/Container";

import FetcherWallpaperContainer from "@/features/wallpapers/components/FetcherWallpaperContainer";
import React from "react";

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
  const collections = await fetch(
    `https://wallhaven.cc/api/v1/collections?apikey=${KEY}`,
    { next: { revalidate: REVALIDATE } },
  );
  const topCollection = await fetch(buildUrl("toplist", undefined, "1w"), {
    next: { revalidate: REVALIDATE },
  });
  const htopCollections = await fetch(buildUrl("toplist", "landscape", "3d"), {
    next: { revalidate: REVALIDATE },
  });

  const randomCollections = await fetch(buildUrl("random"), {
    next: { revalidate: REVALIDATE },
  });

  const hotCollections = await fetch(buildUrl("hot"), {
    next: { revalidate: REVALIDATE },
  });
  const latesCollection = await fetch(buildUrl("date_added"), {
    next: { revalidate: REVALIDATE },
  });

  const collectionsJson = await collections.json();
  const topCollectionJson = await topCollection.json();
  const htopCollectionsJson = await htopCollections.json();
  const randomCollectionsJson = await randomCollections.json();
  const hotCollectionsJson = await hotCollections.json();
  const latesCollectionJson = await latesCollection.json();
  return {
    data: [
      {
        id: "hot",
        label: "Hot",
        views: 0,
        public: 1,
        count: hotCollectionsJson.meta.total,
        per_page: hotCollectionsJson.meta.per_page,
      },
      {
        id: "toplist3d",
        label: "Top 3D",
        views: 0,
        public: 1,
        count: htopCollectionsJson.meta.total,
        per_page: htopCollectionsJson.meta.per_page,
      },
      {
        id: "toplist",
        label: "Top 1W",
        views: 0,
        public: 1,
        count: topCollectionJson.meta.total,
        per_page: topCollectionJson.meta.per_page,
      },

      {
        id: "latest",
        label: "Latest",
        views: 0,
        public: 1,
        count: latesCollectionJson.meta.total,
        per_page: latesCollectionJson.meta.per_page,
      },
      {
        id: "random",
        label: "Random",
        views: 0,
        public: 1,
        count: randomCollectionsJson.meta.total,
        per_page: randomCollectionsJson.meta.per_page,
      },
      ...collectionsJson.data,
    ],
  };
}

const getUserConfig = async () => {
  const results = await fetch(
    `https://wallhaven.cc/api/v1/settings?apikey=${KEY}`,
  );
  return await results.json();
};

export default async function WallpaperDashboard() {
  const [collections, userConfig] = await Promise.allSettled([
    getAllCollections(),
    getUserConfig(),
  ]);

  if (collections.status === "rejected") {
    console.error(collections.reason);
    return <div>Failed to fetch collections {collections.reason}</div>;
  }
  if (userConfig.status === "rejected") {
    console.error(userConfig.reason);
    return <div>Failed to fetch user config</div>;
  }

  const collectionsJson = JSON.stringify(collections.value.data);
  const userConfigJson = JSON.stringify(userConfig.value);

  return (
    <FetcherWallpaperContainer>
      <Container collectionsInfo={collectionsJson} config={userConfigJson} />
    </FetcherWallpaperContainer>
  );
}
