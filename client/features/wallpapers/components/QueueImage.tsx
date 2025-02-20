import React from "react";
import type { QueueElement } from "../types";
import useActions from "@/features/wallpapers/hooks/useActions";
import useWallpapers from "@/features/wallpapers/hooks/useWallpapers";

import {
  DropdownItemType,
  ImageBase,
} from "@/features/wallpapers/components/ImageBase";
import { ImageQueueFactory } from "@/features/wallpapers/classes/Image";
import { useRouter } from "next/navigation";

export function QueueImage(props: {
  image: QueueElement;
  isHistory?: boolean;
}) {
  const { openModal } = useActions();
  const { removeImage } = useWallpapers();
  const router = useRouter();
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
        router.push(imageQueue.data.url);
      },
    },
  ];

  if (!isHistory) {
    items.push({
      key: "remove",
      label: "Remove",
      action: () => removeImage(props.image),
    });
  }
  return <ImageBase image={imageQueue} dropdownItems={items} />;
}
