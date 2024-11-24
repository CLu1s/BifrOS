"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveCollection,
  setCollectionsInfo,
  setConfig,
  setQueue,
} from "@/features/wallpapers/redux/wallpaperSlice";
import DisplayCollection from "@/features/wallpapers/components/DisplayCollection";
import { Button, ButtonGroup } from "@nextui-org/react";
import { CollectionInfo } from "@/features/wallpapers/types";
import { selectActiveCollection } from "@/features/wallpapers/redux/wallpaperSelector";
import { getQueueFromFirebase } from "@/features/wallpapers/lib";
import GalleryModal from "@/features/wallpapers/components/GalleryModal";

type Props = {
  collectionsInfo: string;
  config: string;
};

const Container = ({ collectionsInfo, config }: Props) => {
  const dispatch = useDispatch();
  const activeCollection = useSelector(selectActiveCollection);

  const configData = JSON.parse(config);
  const collectionsInfoData = JSON.parse(collectionsInfo);
  useEffect(() => {
    dispatch(setConfig(configData));
    dispatch(setCollectionsInfo(collectionsInfoData));
  }, [collectionsInfo, collectionsInfoData, config, configData, dispatch]);
  useEffect(() => {
    (async () => {
      const data = await getQueueFromFirebase();
      dispatch(setQueue(data));
    })();
  }, []);

  const handleCollectionClick = (collection: CollectionInfo) => {
    dispatch(setActiveCollection(collection));
  };

  const buttons = collectionsInfoData.map((collection: CollectionInfo) => (
    <Button
      key={collection.id}
      onPress={() => handleCollectionClick(collection)}
      color={activeCollection?.id == collection.id ? "primary" : "default"}
    >
      {collection.label}
    </Button>
  ));

  return (
    <div className={"flex flex-col gap-2"}>
      <ButtonGroup>{buttons}</ButtonGroup>
      <DisplayCollection />
      <GalleryModal />
    </div>
  );
};

export default Container;
