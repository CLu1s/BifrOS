import History from "@/features/wallpapers/components/History";
import PageLayout from "@/components/PageLayout";
import LastScraperResult from "@/features/scrapper/components/LastScraperResult";
import React from "react";

export default function KosanshaPage() {
  return (
    <PageLayout title={"Kodansha Results"}>
      <LastScraperResult />
    </PageLayout>
  );
}
