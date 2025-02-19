import type { Image as ImageType } from "../types";
import React from "react";
import useWallpapers from "@/features/wallpapers/hooks/useWallpapers";
import { GalleryImage } from "@/features/wallpapers/components/GalleryImage";
import { fetchCollectionPage } from "@/features/wallpapers/lib";
import Spinner from "@/components/Spinner";

interface Props {
  collectionID: string | number;
  // userConfig: CollectionConfig | undefined;
  index: number;
}

const CollectionPage = ({ collectionID, index }: Props) => {
  const { addImageToQueue } = useWallpapers();

  const { data, error, isLoading } = fetchCollectionPage({
    collectionID,
    index,
  });
  if (!collectionID) return <div>No collection ID</div>;
  if (isLoading) return <Spinner />;
  if (error) return <div>Error</div>;
  if (!data) return <div>No data</div>;

  const renderImage = () => {
    return data.data.map((image: ImageType) => (
      <GalleryImage
        key={image.id}
        image={image}
        onPress={() => addImageToQueue(image)}
      />
    ));
  };
  return <>{renderImage()}</>;
};

export default CollectionPage;
