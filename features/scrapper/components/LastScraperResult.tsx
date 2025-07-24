"use client";
import { Link, Image } from "@heroui/react";
import Card from "@/components/Card";
import { cn } from "@/lib/utils";
import useGetKodansha from "@/features/scrapper/hooks/useGetKodansha";

const LastScraperResult = () => {
  const { kodanshaList, isLoading } = useGetKodansha();

  console.log(kodanshaList, isLoading);
  if (isLoading) {
    return (
      <Card title={"Last Kodansha Results"}>
        <div className="flex items-center justify-center h-32">
          <p>Loading...</p>
        </div>
      </Card>
    );
  }

  return (
    <Card title={"Last Kodansha Results"}>
      <div
        className={cn(
          " grid grid-cols-2  gap-4 overflow-auto  lg:grid-cols-5  xl:grid-cols-5 ",
        )}
      >
        {kodanshaList.map((item: any) => {
          return (
            <Link
              key={item.title}
              href={item.seriesReadableUrl}
              target={"_blank"}
              className={"flex flex-col text-left gap-2"}
            >
              <Image
                src={"/proxy?url=" + item.thumbnails[0].url}
                alt={item.thumbnails[0].url}
                className={"w-full"}
              />
              <h3 className={"text-sm font-semibold text-left w-full"}>
                {item.title}
              </h3>
              <p className={"text-sm"}>
                <span>Generes: </span>
                {item.genres.map((gen: any) => (
                  <span
                    key={gen.id}
                    className={"text-xs px-2 py-1 rounded mr-1"}
                  >
                    {gen.name}
                  </span>
                ))}
              </p>
              <span className={"flex flex-wrap justify-between w-full"}>
                <p className={"text-sm"}>
                  <span>Lowest: </span>
                  {item.lowestPrice}
                </p>
                <p className={"text-sm"}>
                  <span>Highest: </span>
                  {item.highestPrice}
                </p>
                <p className={"text-sm"}>
                  <span>Avg: </span>${item.averagePrice}
                </p>
                <p className={"text-sm"}>
                  <span>Vols: </span>
                  {item.totalVols}
                </p>
                <p className={"text-sm"}>
                  <span>Total: </span>
                  {item.totalPrice}
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
