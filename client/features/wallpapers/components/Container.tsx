"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveCollection,
  setCollectionsInfo,
  setConfig,
  setHistory,
  setQueue,
} from "@/features/wallpapers/redux/wallpaperSlice";
import DisplayCollection from "@/features/wallpapers/components/DisplayCollection";
import { Button, ButtonGroup } from "@heroui/react";
import { CollectionInfo } from "@/features/wallpapers/types";
import { selectActiveCollection } from "@/features/wallpapers/redux/wallpaperSelector";

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
      <ButtonGroup className={"hidden lg:flex"}>{buttons}</ButtonGroup>
      <div className={"lg:hidden grid-cols-2 grid gap-2"}>{buttons}</div>
      <DisplayCollection />
      <GalleryModal />
    </div>
  );
};

export default Container;
