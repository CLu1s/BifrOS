import History from "@/features/wallpapers/components/History";
import PageLayout from "@/components/PageLayout";

export default function WallpaperHistoryPage() {
  return (
    <PageLayout title={"History"}>
      <History allHistory />;
    </PageLayout>
  );
}
