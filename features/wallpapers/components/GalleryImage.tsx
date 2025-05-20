"use client";
import { Button } from "@heroui/react";
import React, { useMemo } from "react";
import {
  ImageBase,
  GalleryImageBaseProps,
} from "@/features/wallpapers/components/ImageBase";
import { cn } from "@/lib/utils";
import useFetchQueue from "@/features/wallpapers/hooks/useFetchQueue";

interface Props extends GalleryImageBaseProps {
  onPress: () => void;
}

export function GalleryImage(props: Props) {
  const { image } = props;
  const { queueList } = useFetchQueue();
  const find = useMemo(
    () => queueList.find((el) => el.wallhavenId === image.wallhavenId),
    [queueList, image.wallhavenId],
  );

  return (
    <div className={"relative"}>
      <ImageBase
        {...props}
        className={cn(!!find ? "border-green-700 border" : "border-none  ")}
      />
      <div className={"absolute bottom-2  z-40 w-full"}>
        <Button
          className="text-tiny text-white bg-black/20 w-full"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
          isDisabled={!!find}
          onPress={props.onPress}
        >
          {find ? "In Queue" : "Add to queue"}
        </Button>
      </div>
    </div>
  );
}
