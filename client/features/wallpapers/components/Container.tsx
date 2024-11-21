"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setActiveCollection,
  setCollectionsInfo,
  setConfig,
  setQueue,
} from "@/features/wallpapers/redux/wallpaperSlice";
import DisplayCollection from "@/features/wallpapers/components/DisplayCollection";
import { Button, ButtonGroup } from "@nextui-org/react";
import { CollectionInfo, QueueElement } from "@/features/wallpapers/types";
import { readDocsFromFirestore } from "@/firebase/services";

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
  useEffect(() => {
    (async () => {
      const landscape = (await readDocsFromFirestore(
        "wallpapers/myData/landscape-queue",
      )) as QueueElement[];
      const portrait = (await readDocsFromFirestore(
        "wallpapers/myData/portrait-queue",
      )) as QueueElement[];
      dispatch(setQueue({ landscape, portrait }));
      console.log(landscape, portrait);
    })();
  }, []);

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
