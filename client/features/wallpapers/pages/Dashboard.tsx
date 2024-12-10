import Container from "@/features/wallpapers/components/Container";
import Queue from "@/features/wallpapers/components/Queue";
import NextInQueue from "@/features/wallpapers/components/NextInQueue";
import History from "@/features/wallpapers/components/History";
import PageLayout from "@/components/PageLayout";
import Jumbo from "@/features/wallpapers/components/Jumbo";
import FetcherWallpaperContainer from "@/features/wallpapers/components/FetcherWallpaperContainer";

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
        id: "hot",
        label: "Hot",
        views: 0,
        public: 1,
        count: hotCollectionsJson.meta.total,
        per_page: hotCollectionsJson.meta.per_page,
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
  const [collections, userConfig] = await Promise.all([
    getAllCollections(),
    getUserConfig(),
  ]);
  return (
    <FetcherWallpaperContainer>
      <PageLayout title={"Wallpaper"}>
        <div className={"col-span-1 lg:col-span-2"}>
          <Jumbo />
        </div>
        <div className={"col-span-1"}>
          <NextInQueue />
        </div>
        <div className={"flex  gap-8 col-span-1 lg:col-span-2"}>
          <Queue />
        </div>
        <div className={"col-span-1"}>
          <History />
        </div>

        <div className={"col-span-1 lg:col-span-3 xl:col-span-4"}>
          <Container
            collectionsInfo={JSON.stringify(collections.data)}
            config={JSON.stringify(userConfig)}
          />
        </div>
      </PageLayout>
    </FetcherWallpaperContainer>
  );
}
