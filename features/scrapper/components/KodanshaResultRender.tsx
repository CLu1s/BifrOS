import { KodanshaResult } from "@/features/scrapper/types";
import { Accordion, AccordionItem, Image, Link } from "@heroui/react";

const KodanshaResultRender = ({
  data,
}: {
  data: Record<string, KodanshaResult[]>;
}) => {
  const entries = Object.entries(data).map(([key, value]) => {
    const copyValue = [...value];
    const sortedValue = copyValue.sort((a, b) => {
      return a.relativeName.localeCompare(b.relativeName);
    });

    return (
      <AccordionItem
        key={key}
        aria-label={key}
        title={`${key} - ${sortedValue.length}`}
      >
        <div className="flex flex-col gap-2 ">
          <div className="grid grid-cols-1 lg:grid-cols-3  gap-2 lg:gap-4">
            {sortedValue.map((result, index) => (
              <div key={index} className="flex flex-col gap-2   p-2 rounded-md">
                <div className="flex gap-4">
                  <div className={"flex  flex-col gap-2 justify-between"}>
                    <Link
                      target={"_blank"}
                      color="primary"
                      className="font-semibold"
                      href={result.readableUrl}
                    >
                      {result.relativeName}
                    </Link>
                    <Image
                      src={"/proxy?url=" + result.thumbnail.url}
                      className={"h-64"}
                      alt={result.relativeName}
                    />
                  </div>
                  <div className={"flex flex-col justify-center"}>
                    <div className={"text-sm mb-4"}>
                      <p>
                        <span className={"font-semibold"}>Age Rating: </span>
                        {result.ageRating}
                      </p>
                      <p>Full Price: {result.fullPrice}</p>
                      <p>Discount Price: {result.discountPrice}</p>
                      <p>
                        <span className={"font-semibold"}>Discount: </span>
                        <span
                          className={
                            Math.floor(
                              100 -
                                (result.discountPrice * 100) / result.fullPrice,
                            ) > 40
                              ? "text-green-600"
                              : "text-red-600"
                          }
                        >
                          {Math.floor(
                            100 -
                              (result.discountPrice * 100) / result.fullPrice,
                          )}
                          %
                        </span>
                      </p>
                    </div>

                    <strong>Links to stores:</strong>
                    {result.linksToStores.map((link, index) => (
                      <Link
                        isExternal
                        className={"text-blue-500 underline"}
                        key={index}
                        target={"_blank"}
                        href={link.url}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AccordionItem>
    );
  });

  return <Accordion selectionMode="multiple">{entries}</Accordion>;
};

export default KodanshaResultRender;
