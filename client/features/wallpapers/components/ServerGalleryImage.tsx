"use client";

import { GalleryImage } from "@/features/wallpapers/components/GalleryImage";
import React from "react";
import useWallpapers from "@/features/wallpapers/hooks/useWallpapers";
import { ImageWallpaper } from "@/features/wallpapers/classes/Image";

interface Props {
  imageString: string;
}

export default function ServerGalleryImage({ imageString }: Props) {
  const imageRaw = JSON.parse(imageString);
  const image = new ImageWallpaper(imageRaw);
  const { addImageToQueue } = useWallpapers();
  return (
    <GalleryImage
      key={image.data.id}
      image={image}
      onPress={() => addImageToQueue(image)}
    />
  );
}
