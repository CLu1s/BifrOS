import Container from "@/features/wallpapers/components/Container";
import Queue from "@/features/wallpapers/components/Queue";

const SEARCH_URL = "https://wallhaven.cc/api/v1/search?";
const KEY = process.env.WALLHAVEN_KEY;
const REVALIDATE = 3600;

async function getAllCollections() {
  const collections = await fetch(
    `https://wallhaven.cc/api/v1/collections?apikey=${KEY}`,
    { next: { revalidate: REVALIDATE } },
  );
  const topCollection = await fetch(
    `${SEARCH_URL}ratios=portrait&sorting=toplist&order=desc&topRange=1w&apikey=${KEY}`,
    { next: { revalidate: REVALIDATE } },
  );
  const htopCollections = await fetch(
    `${SEARCH_URL}ratios=landscape&sorting=toplist&topRange=1w&order=desc&apikey=${KEY}`,
    { next: { revalidate: REVALIDATE } },
  );

  const collectionsJson = await collections.json();
  const topCollectionJson = await topCollection.json();
  const htopCollectionsJson = await htopCollections.json();
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
      <div className={"flex w-full gap-8"}>
        <Queue />
      </div>
      <Container
        collectionsInfo={JSON.stringify(collections.data)}
        config={JSON.stringify(userConfig)}
      />
    </div>
  );
}
