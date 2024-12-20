import { Button, Card, CardFooter, Image, Link } from "@nextui-org/react";
import React from "react";
import type { QueueElement } from "../types";
import useActions from "@/features/wallpapers/hooks/useActions";
import useWallpapers from "@/features/wallpapers/hooks/useWallpapers";
import { cn } from "@/lib/utils";
import { Smartphone } from "lucide-react";

export function QueueImage(props: {
  image: QueueElement;
  isHistory?: boolean;
}) {
  const { openModal } = useActions();
  const { removeImage } = useWallpapers();
  const { isHistory } = props;
  if (!props.image) return null;
  const isVertical = props.image.type === "portrait";
  return (
    <Card isFooterBlurred radius="lg" className="relative border-none shrink-0">
      <div
        className={cn(
          "absolute top-2 right-2 z-40 text-black/40 bg-gray-300/40 rounded-xl p-1",
          !isVertical && "rotate-90",
        )}
      >
        <Smartphone />
      </div>
      <Image
        className={
          " h-40 xl:h-60 w-[722px] xl:w-[922px]   object-cover object-top"
        }
        alt={props.image.url}
        src={props.image.url}
        height={200}
        width={400}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        {!isHistory && (
          <Button
            className="text-tiny text-white bg-black/20"
            variant="light"
            color="danger"
            radius="lg"
            size="sm"
            onPress={() => removeImage(props.image)}
          >
            Remove
          </Button>
        )}
        <Button
          className="text-tiny text-white bg-black/20"
          variant="light"
          color="default"
          radius="lg"
          size="sm"
          onPress={() => {
            openModal(props.image);
          }}
        >
          Expand
        </Button>
        <Button
          as={Link}
          href={props.image.whPath}
          target={"_blank"}
          className="text-tiny text-white bg-black/20"
          variant="light"
          color="default"
          radius="lg"
          size="sm"
        >
          WH
        </Button>
      </CardFooter>
    </Card>
  );
}
