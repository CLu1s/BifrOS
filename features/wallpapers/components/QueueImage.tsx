import React from "react";
import type { QueueElement } from "../types";
import useActions from "@/features/wallpapers/hooks/useActions";
import useQueue from "@/features/wallpapers/hooks/useQueue";

import {
  DropdownItemType,
  ImageBase,
} from "@/features/wallpapers/components/ImageBase";
import {
  ImageHistory,
  ImageQueueFactory,
} from "@/features/wallpapers/classes/Image";

export function QueueImage(props: {
  image: QueueElement;
  isHistory?: boolean;
}) {
  const { openModal } = useActions();
  const { removeImage, addImageToQueue } = useQueue();
  const { isHistory } = props;

  if (!props.image) return null;
  const imageQueue = ImageQueueFactory.createImage(props.image);

  const items: DropdownItemType[] = [
    {
      key: "expand",
      label: "Expand",
      action: () => {
        openModal(imageQueue.data);
      },
    },

    {
      key: "WH",
      label: "See on Wallhaven",
      action: () => {
        window.open(imageQueue.data.url, "_blank");
      },
    },
  ];

  if (isHistory && imageQueue instanceof ImageHistory) {
    items.push({
      key: "queue",
      label: "Add to queue",
      action: () => addImageToQueue(imageQueue),
    });
  }

  if (!isHistory) {
    items.push({
      key: "delete",
      label: "Remove",
      action: () => removeImage(props.image),
    });
  }
  return <ImageBase image={imageQueue} dropdownItems={items} />;
}
