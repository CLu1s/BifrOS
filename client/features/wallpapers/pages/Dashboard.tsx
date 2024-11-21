import { CollectionInfo } from "../types";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Container from "@/features/wallpapers/components/Container";

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
      ...collectionsJson.data,
      {
        id: "top",
        label: "Top Collections",
        views: 0,
        public: 1,
        count: topCollectionJson.meta.total,
        per_page: topCollectionJson.meta.per_page,
      },
      {
        id: "htop",
        label: "HTop Collections",
        views: 0,
        public: 1,
        count: htopCollectionsJson.meta.total,
        per_page: htopCollectionsJson.meta.per_page,
      },
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
      <Card>
        <CardHeader>
          <h3 className={"text-2xl font-bold"}> Wallpaper Collections</h3>
        </CardHeader>
        <CardBody>
          <div className="flex m-auto flex-col lg:flex-row gap-2 lg:gap-8">
            {collections.data.map((collection: CollectionInfo) => (
              <div
                key={collection.id}
                className="flex lg:flex-col justify-between lg:gap-2 bg-gray-100 p-4 rounded-md"
              >
                <h3 className={"text-lg font-medium text-center"}>
                  {collection.label}
                </h3>
                <div className={"flex m-auto  gap-2"}>
                  <div className={"flex flex-col justify-center text-center"}>
                    <div className={"font-medium text-lg"}>
                      {collection.count}
                    </div>
                    <div className={"font-medium text-sm"}> Count</div>
                  </div>
                  <div className={"flex flex-col justify-center text-center"}>
                    <div className={"font-medium text-lg"}>
                      {collection.views}
                    </div>
                    <div className={"font-medium text-sm"}> Views</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
      <Container
        collectionsInfo={JSON.stringify(collections.data)}
        config={JSON.stringify(userConfig)}
      />
    </div>
  );
}
