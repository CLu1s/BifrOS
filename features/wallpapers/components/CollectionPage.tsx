import type { Image, Image as ImageType } from "../types";
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
      const image = new ImageWallpaper(imageRaw);
      return (
        <GalleryImage
          key={image.data.id}
          image={image}
          onPress={() => addImageToQueue(image)}
        />
      );
    });
  };
  return <>{renderImage()}</>;
};

export default CollectionPage;
