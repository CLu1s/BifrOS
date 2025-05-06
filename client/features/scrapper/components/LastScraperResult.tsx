"use client";
import { Link, Image } from "@heroui/react";
import Card, { ExtraButton } from "@/components/Card";
import { useEffect, useState } from "react";
import { getScraperDocsFromFirebase } from "@/features/scrapper/lib";
import { Manga } from "@/features/scrapper/types";
import { MangaList } from "@/features/scrapper/classes/MangaList";
import { cn } from "@/lib/utils";
interface Props {
  isWidget?: boolean;
}

const LastScraperResult = ({ isWidget }: Props) => {
  const [data, setData] = useState<Manga[]>([]);

  useEffect(() => {
    (async () => {
      const data = (await getScraperDocsFromFirebase()) as unknown as Manga[];
      setData(data.sort((a, b) => a.volumeName.localeCompare(b.volumeName)));
    })();
  }, []);

  const series = new MangaList(data).getSeries();
  const sortedSeries = Array.from(series).sort(
    ([aKey, aValue], [bKey, bValue]) =>
      aValue.avgPrice > bValue.avgPrice ? 1 : -1,
  );
  const seriesList = isWidget ? sortedSeries.slice(0, 12) : sortedSeries;
  // <Image
  //     src={"/proxy?url=" + element.thumbnails[0].url}
  //     alt={element.relativeName}
  //     width={150}
  //     height={200}
  // />;
  const difference = series.size - seriesList.length;

  const buttonText = difference > 0 ? `View ${difference} More` : "View More";
  return (
    <Card
      title={"Last Kodansha Results"}
      renderExtra={
        isWidget && (
          <ExtraButton href={"/scraper/kodansha"}>{buttonText}</ExtraButton>
        )
      }
    >
      <div
        className={cn(
          " grid grid-cols-2  gap-4 overflow-auto  lg:grid-cols-5  xl:grid-cols-6 ",
        )}
      >
        {seriesList.map(([key, value]) => {
          return (
            <Link
              key={key}
              href={value.url}
              target={"_blank"}
              className={"flex flex-col text-left gap-2"}
            >
              <Image
                src={"/proxy?url=" + value.thumbnail}
                alt={key}
                className={"w-full"}
              />
              <h3 className={"text-sm font-semibold text-left w-full"}>
                {value.title}
              </h3>
              <span className={"flex flex-wrap justify-between w-full"}>
                <p className={"text-sm"}>
                  <span>Lowest: </span>
                  {value.lowestPrice}
                </p>
                <p className={"text-sm"}>
                  <span>Highest: </span>
                  {value.highestPrice}
                </p>
                <p className={"text-sm"}>
                  <span>Avg: </span>${value.avgPrice}
                </p>
                <p className={"text-sm"}>
                  <span>Vols: </span>
                  {value.volumes.length}
                </p>
              </span>
            </Link>
          );
        })}
      </div>
    </Card>
  );
};

export default LastScraperResult;
