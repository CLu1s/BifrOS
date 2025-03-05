import LastScraperResult from "@/features/scrapper/components/LastScraperResult";
import PageLayout from "@/components/PageLayout";
import BookmarkWidget from "@/features/bookmarks/components/BookmarkWidget";
import LatestFeedContainer from "@/features/feed/components/LatestFeedContainer";

import HotWidget from "@/features/wallpapers/components/HotWidget";

const DashboardContainer = () => {
  return (
    <PageLayout
      title={"Bienvenido"}
      className={"grid grid-cols-1  md:grid-cols-[60%_40%] gap-8 "}
    >
      <div className={"flex flex-col order-3 md:order-2   gap-8"}>
        <HotWidget />

        <LastScraperResult isWidget />
      </div>
      <div className={"flex flex-col order-1 md:order-2 gap-8"}>
        <LatestFeedContainer />
        <BookmarkWidget />
      </div>
    </PageLayout>
  );
};

export default DashboardContainer;
