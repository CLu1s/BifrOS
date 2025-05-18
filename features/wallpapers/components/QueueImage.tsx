import React from "react";
import type { BaseImage, QueueElement } from "../types";
import useActions from "@/features/wallpapers/hooks/useActions";
import useQueue from "@/features/wallpapers/hooks/useQueue";

import {
  DropdownItemType,
  ImageBase,
} from "@/features/wallpapers/components/ImageBase";

export function QueueImage(props: {
  image: QueueElement;
  isHistory?: boolean;
}) {
  const { openModal } = useActions();
  const { removeImage } = useQueue();
  const { isHistory } = props;

  const { image } = props;
  const imageQueue: BaseImage = {
    isVertical: Number(image.resolution) < 1,
    thumbnail: image.thumbnailUrl,
    alt: image.wallhavenId,
    imageUrl: image.imageUrl,
    wallhavenId: image.wallhavenId,
  };

  const items: DropdownItemType[] = [
    {
      key: "expand",
      label: "Expand",
      action: () => {
        openModal(imageQueue.imageUrl);
      },
    },

    {
      key: "WH",
      label: "See on Wallhaven",
      action: () => {
        window.open(`https://wallhaven.cc/w/${image.wallhavenId}`, "_blank");
      },
    },
  ];
  // if(!isHistory) {
  //   items.push({
  //     key: "queue",
  //     label: "Add to queue",
  //     action: () => addImageToQueue(imageQueue),
  //   });
  // }

  if (!isHistory) {
    items.push({
      key: "delete",
      label: "Remove",
      action: () => removeImage(props.image),
    });
  }

  return <ImageBase image={imageQueue} dropdownItems={items} />;
}
