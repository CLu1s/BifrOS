import { Card, CardBody, CardHeader, Link, Image } from "@nextui-org/react";
import LocalLink from "next/link";
import useScrapper from "../hooks/useScrapper";
import { Button } from "@nextui-org/button";

const LastScraperResult = () => {
  const { executions } = useScrapper();
  if (!(executions.length > 0)) return null;
  const { result } = executions[0];
  const keys = Object.keys(result).sort((a, b) => {
    return a.localeCompare(b);
  });
  // getting the first element of the executions array of each key
  const elements = keys.map((key) => result[key][0]);

  return (
    <Card className={"p-2"}>
      <CardHeader>
        <div className={"flex justify-between w-full"}>
          <h2 className={"text-xl font-semibold"}>Last Scraper Results</h2>
          <Button
            as={LocalLink}
            href={"/scraper"}
            color="primary"
            variant="solid"
            size={"sm"}
          >
            View More
          </Button>
        </div>
      </CardHeader>
      <CardBody>
        <div
          className={"grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-8 gap-4"}
        >
          {elements.map((element) => (
            <div key={element.relativeName} className={"flex flex-col gap-1"}>
              <Image
                src={"/proxy?url=" + element.thumbnail.url}
                alt={element.relativeName}
                width={150}
                height={200}
              />
              <p className={"font-semibold"}>{element.seriesName}</p>
              <div className={"flex gap-2"}>
                <p>{element.ageRating}</p>
                <p> ${element.discountPrice}</p>
                <span
                  className={
                    Math.floor(
                      100 - (element.discountPrice * 100) / element.fullPrice,
                    ) > 40
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {Math.floor(
                    100 - (element.discountPrice * 100) / element.fullPrice,
                  )}
                  %
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
      </CardBody>
    </Card>
  );
};

export default LastScraperResult;
