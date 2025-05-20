import React from "react";
import type { BaseImage, QueueElement } from "../types";
import useQueue from "@/features/wallpapers/hooks/useQueue";

import {
  ExtraButton,
  ImageBase,
} from "@/features/wallpapers/components/ImageBase";
import { TrashIcon } from "lucide-react";

export function QueueImage(props: {
  image: QueueElement;
  isHistory?: boolean;
}) {
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

  const items: ExtraButton[] = [];
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
      color: "danger",
      icon: <TrashIcon />,
      action: () => removeImage(props.image),
    });
  }

  return <ImageBase image={imageQueue} extraButtons={items} />;
}
