import { Card, CardBody, CardHeader } from "@heroui/react";
import useScrapper from "@/features/scrapper/hooks/useScrapper";
import { format } from "date-fns";
import useBookmark from "@/features/bookmarks/hooks/useBookmark";
import useFetchQueue from "@/features/wallpapers/hooks/useFetchQueue";

const Generals = () => {
  const { queueList } = useFetchQueue();
  const { metrics, executions } = useScrapper();
  const { bookmarks } = useBookmark();

  return (
    <Card className={"p-2"}>
      <CardHeader>
        <h2 className={"text-xl font-semibold"}>General Statistics </h2>
      </CardHeader>
      <CardBody>
        <ul className={"flex flex-col gap-2"}>
          <li>Wallpapers on queue: {queueList.length} </li>
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
