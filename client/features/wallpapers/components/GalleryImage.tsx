"use client";
import { Button } from "@heroui/react";
import React, { useMemo } from "react";
import {
  DropdownItemType,
  ImageBase,
  GalleryImageBaseProps,
} from "@/features/wallpapers/components/ImageBase";
import useWallpapers from "@/features/wallpapers/hooks/useWallpapers";
import { cn } from "@/lib/utils";
import useActions from "@/features/wallpapers/hooks/useActions";

interface Props extends GalleryImageBaseProps {
  onPress: () => void;
}

export function GalleryImage(props: Props) {
  const { image } = props;
  const { queueList } = useWallpapers();
  const { openModal } = useActions();
  const find = useMemo(
    () => queueList.find((el) => el.id === image.data.id),
    [queueList, image.data.id],
  );

  const items: DropdownItemType[] = [
    {
      key: "expand",
      label: "Expand",
      action: () => {
        openModal(image.data);
      },
    },
    {
      key: "WH",
      label: "See on Wallhaven",
      action: () => {
        window.open(image.data.url, "_blank");
      },
    },
  ];

  return (
    <div className={"relative"}>
      <ImageBase
        {...props}
        dropdownItems={items}
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
