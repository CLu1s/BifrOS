import type { BaseImage, Image, Image as ImageType } from "../types";
import React from "react";
import useQueue from "@/features/wallpapers/hooks/useQueue";
import { GalleryImage } from "@/features/wallpapers/components/GalleryImage";
import { ImageWallpaper } from "@/features/wallpapers/classes/Image";

interface Props {
  images: Image[];
}

const CollectionPage = ({ images }: Props) => {
  const { addImageToQueue } = useQueue();

  const renderImage = () => {
    if (!images || images.length === 0) {
      return <div className="text-center">No images available</div>;
    }
    return images.map((imageRaw: ImageType) => {
      const wallpaper = new ImageWallpaper(imageRaw);
      const image: BaseImage = {
        isVertical: Number(imageRaw.ratio) < 1,
        thumbnail: imageRaw.thumbs.large,
        alt: imageRaw.id,
        imageUrl: imageRaw.path,
        wallhavenId: imageRaw.id,
      };
      return (
        <GalleryImage
          key={image.alt}
          image={image}
          onPress={() => addImageToQueue(wallpaper)}
        />
      );
    });
  };
  return <>{renderImage()}</>;
};

export default CollectionPage;
