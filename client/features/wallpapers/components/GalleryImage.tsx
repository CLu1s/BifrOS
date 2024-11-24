import { Button, Card, CardFooter, Image, Link } from "@nextui-org/react";
import React from "react";
import type { Image as ImageType } from "../types";
import useActions from "@/features/wallpapers/hooks/useActions";

export function GalleryImage(props: { image: ImageType; onPress: () => void }) {
  const { openModal } = useActions();

  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        className={"min-h-[310px] object-cover"}
        alt={props.image.url}
        src={props.image.thumbs.large}
        height={370}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
          onPress={props.onPress}
        >
          Add to queue
        </Button>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
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
          href={props.image.url}
          target={"_blank"}
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          See on WH
        </Button>
      </CardFooter>
    </Card>
  );
}
