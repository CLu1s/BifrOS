import { Button, Card, CardFooter, Image, Link } from "@nextui-org/react";
import React, { useMemo } from "react";
import type { Image as ImageType } from "../types";
import useActions from "@/features/wallpapers/hooks/useActions";
import useWallpapers from "@/features/wallpapers/hooks/useWallpapers";

export function GalleryImage(props: { image: ImageType; onPress: () => void }) {
  const { openModal } = useActions();
  const { all } = useWallpapers();
  const find = useMemo(
    () => all.find((el) => el.id === props.image.id),
    [all, props.image.id],
  );
  const type = Number(props.image.ratio) < 1;
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className={!!find ? "border-green-700 border" : "border-none  "}
    >
      <Image
        className={"h-60 w-[422px] object-cover object-top"}
        alt={props.image.url}
        src={type ? props.image.thumbs.original : props.image.thumbs.large}
        height={240}
        width={422}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
          isDisabled={!!find}
          onPress={props.onPress}
        >
          {find ? "In Queue" : "Add to queue"}
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
