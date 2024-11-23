import { Card, CardBody, CardHeader } from "@nextui-org/react";
import useWallpapers from "@/features/wallpapers/hooks/useWallpapers";
import useScrapper from "@/features/scrapper/hooks/useScrapper";
import { format } from "date-fns";
import useBookmark from "@/features/bookmarks/hooks/useBookmark";

const Generals = () => {
  const { all } = useWallpapers();
  const { metrics, executions } = useScrapper();
  const { bookmarks } = useBookmark();

  return (
    <Card className={"p-2"}>
      <CardHeader>
        <h2 className={"text-xl font-semibold"}>General Statistics </h2>
      </CardHeader>
      <CardBody>
        <ul className={"flex flex-col gap-2"}>
          <li>Wallpapers on queue: {all.length} </li>
          <li>Scrapper executions: {executions.length} </li>
          <li>
            Last scraper execution:{" "}
            {metrics.length > 0
              ? format(new Date(metrics[0].timestamp), "dd/MM HH:mm")
              : 0}
          </li>
          <li>Bookmarks: {bookmarks.length} </li>
        </ul>
      </CardBody>
    </Card>
  );
};

export default Generals;
