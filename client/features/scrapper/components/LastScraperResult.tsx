import { Link, Image } from "@heroui/react";
import Card, { ExtraButton } from "@/components/Card";
import { useEffect, useState } from "react";
import { getScraperDocsFromFirebase } from "@/features/scrapper/lib";
import { Manga } from "@/features/scrapper/types";
import { MangaList } from "@/features/scrapper/classes/MangaList";

const LastScraperResult = () => {
  const [data, setData] = useState<Manga[]>([]);

  useEffect(() => {
    (async () => {
      const data = (await getScraperDocsFromFirebase()) as unknown as Manga[];
      setData(data.sort((a, b) => a.seriesName.localeCompare(b.seriesName)));
    })();
  }, []);

  // const series = new MangaList(data).getSeries();

  return (
    <Card
      title={"Last Kodansha Results"}
      renderExtra={<ExtraButton href={"/scraper"}>View More</ExtraButton>}
    >
      <div className={"grid grid-cols-2 lg:grid-cols-5 2xl:grid-cols-6 gap-4"}>
        {data.map((element) => (
          <div key={element.dbID} className={"flex flex-col gap-1"}>
            <Image
              src={"/proxy?url=" + element.thumbnails[0].url}
              alt={element.relativeName}
              width={150}
              height={200}
            />
            <p className={"font-semibold"}>{element.seriesName}</p>
            <div className={"flex gap-2"}>
              <p>{element.ageRating}</p>
              <p>
                {" "}
                $
                {isNaN(element.discountPrice)
                  ? element.fullPrice
                  : element.discountPrice}
              </p>
              <span
                className={
                  Math.floor(
                    100 - (element.discountPrice * 100) / element.fullPrice,
                  ) > 40
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {!isNaN(element.discountPrice) &&
                  Math.floor(
                    100 - (element.discountPrice * 100) / element.fullPrice,
                  ) + "% "}
              </span>
              <Link
                href={element.readableUrl}
                underline={"always"}
                className={"font-semibold"}
              >
                Link
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default LastScraperResult;
