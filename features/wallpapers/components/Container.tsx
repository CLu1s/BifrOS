"use client";
import DisplayCollection from "@/features/wallpapers/components/DisplayCollection";
import { Button, ButtonGroup } from "@heroui/react";
import { CollectionInfo } from "@/features/wallpapers/types";
import useCollection from "@/features/wallpapers/hooks/useCollection";

type Props = {
  collectionsInfo: string;
};

const Container = ({ collectionsInfo }: Props) => {
  const { collections, activeCollection, setActiveCollection } =
    useCollection(collectionsInfo);

  const handleCollectionClick = (collection: CollectionInfo) => {
    setActiveCollection(collection);
  };

  const buttons = collections.map((collection: CollectionInfo) => (
    <Button
      size={"sm"}
      key={collection.id}
      variant={"flat"}
      onPress={() => handleCollectionClick(collection)}
      color={activeCollection?.id == collection.id ? "primary" : "default"}
    >
      {collection.label}
    </Button>
  ));

  return (
    <div className={"flex flex-col "}>
      <ButtonGroup
        size={"sm"}
        className={"hidden lg:flex items-start justify-start mb-4  "}
      >
        {buttons}
      </ButtonGroup>
      <div className={"lg:hidden grid-cols-3 grid gap-3 "}>{buttons}</div>
      <DisplayCollection />
    </div>
  );
};

export default Container;
