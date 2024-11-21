"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setActiveCollection,
  setCollectionsInfo,
  setConfig,
} from "@/features/wallpapers/redux/wallpaperSlice";
import DisplayCollection from "@/features/wallpapers/components/DisplayCollection";
import { Button, ButtonGroup } from "@nextui-org/react";
import { CollectionInfo } from "@/features/wallpapers/types";

type Props = {
  collectionsInfo: string;
  config: string;
};

const Container = ({ collectionsInfo, config }: Props) => {
  const dispatch = useDispatch();
  const configData = JSON.parse(config);
  const collectionsInfoData = JSON.parse(collectionsInfo);
  useEffect(() => {
    dispatch(setConfig(configData));
    dispatch(setCollectionsInfo(collectionsInfoData));
  }, [collectionsInfo, collectionsInfoData, config, configData, dispatch]);

  const handleCollectionClick = (collection: CollectionInfo) => {
    dispatch(setActiveCollection(collection));
  };

  const buttons = collectionsInfoData.map((collection: any) => (
    <Button
      key={collection.id}
      onPress={() => handleCollectionClick(collection)}
    >
      {collection.label}
    </Button>
  ));

  return (
    <div className={"flex flex-col gap-2"}>
      <ButtonGroup>{buttons}</ButtonGroup>
      <DisplayCollection />
    </div>
  );
};

export default Container;
