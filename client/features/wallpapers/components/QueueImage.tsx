import { Button, Card, CardFooter, Image, Link } from "@nextui-org/react";
import React from "react";
import type { QueueElement } from "../types";
import useActions from "@/features/wallpapers/hooks/useActions";
import useWallpapers from "@/features/wallpapers/hooks/useWallpapers";

export function QueueImage(props: {
  image: QueueElement;
  isHistory?: boolean;
}) {
  const { openModal } = useActions();
  const { removeImage } = useWallpapers();
  const { isHistory } = props;
  if (!props.image) return null;

  return (
    <Card isFooterBlurred radius="lg" className="border-none shrink-0">
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
