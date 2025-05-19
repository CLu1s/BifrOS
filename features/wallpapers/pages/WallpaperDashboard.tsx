import Container from "@/features/wallpapers/components/Container";

const getCollections = async () => {
  const results = await fetch(
    `http://localhost:4000/api/wallhaven/collections`,
  );
  return await results.json();
};

export default async function WallpaperDashboard() {
  const [collections] = await Promise.allSettled([getCollections()]);

  if (collections.status === "rejected") {
    console.error(collections.reason);
    return <div>Failed to fetch collections {collections.reason}</div>;
  }

  const collectionsJson = JSON.stringify(collections.value);

  return <Container collectionsInfo={collectionsJson} />;
}
