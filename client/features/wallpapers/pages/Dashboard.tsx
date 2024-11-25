import Container from "@/features/wallpapers/components/Container";
import Queue from "@/features/wallpapers/components/Queue";
import NextInQueue from "@/features/wallpapers/components/NextInQueue";
import History from "@/features/wallpapers/components/History";

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
  const topCollection = await fetch(buildUrl("toplist", "portrait", "1w"), {
    next: { revalidate: REVALIDATE },
  });
  const htopCollections = await fetch(buildUrl("toplist", "landscape", "1w"), {
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
        id: "top",
        label: "Vertical Top",
        views: 0,
        public: 1,
        count: topCollectionJson.meta.total,
        per_page: topCollectionJson.meta.per_page,
      },
      {
        id: "htop",
        label: "Horizontal Top",
        views: 0,
        public: 1,
        count: htopCollectionsJson.meta.total,
        per_page: htopCollectionsJson.meta.per_page,
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
        id: "hot",
        label: "Hot",
        views: 0,
        public: 1,
        count: hotCollectionsJson.meta.total,
        per_page: hotCollectionsJson.meta.per_page,
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
    <div className={"flex flex-col gap-8 m-2 lg:m-10"}>
      <h1 className={"text-2xl font-bold"}>Wallpaper Dashboard</h1>
      <div className={"grid grid-cols-1 lg:grid-cols-3 gap-8"}>
        <div className={"flex gap-8 col-span-1 lg:col-span-3"}>
          <Queue />
        </div>
        <div className={"col-span-1"}>
          <NextInQueue />
        </div>
        <div className={"col-span-1 lg:col-span-2"}>
          <History />
        </div>
        <div className={"col-span-1 lg:col-span-3"}>
          <Container
            collectionsInfo={JSON.stringify(collections.data)}
            config={JSON.stringify(userConfig)}
          />
        </div>
      </div>
    </div>
  );
}
