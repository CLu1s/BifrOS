import type { Image as ImageType } from "../types";
import React from "react";
import { Image } from "@nextui-org/react";
import useSWR from "swr";

const fetcher = (...args: any[]) =>
  // @ts-expect-error sss
  fetch(...args, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
interface Props {
  collectionID: number | string | undefined;
  // userConfig: CollectionConfig | undefined;
  index: number;
}
const API_URL = process.env.NEXT_PUBLIC_GET_WALLPAPERS_PAGE;

const CollectionPage = ({ collectionID, index }: Props) => {
  const { data, error, isLoading } = useSWR(
    `${API_URL}?collection=${collectionID}&page=${index}`,
    fetcher,
  );
  if (!collectionID) return <div>No collection ID</div>;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>No data</div>;

  return (
    <>
      {data.data.map((image: ImageType) => (
        <Image key={image.id} alt={image.url} src={image.thumbs.large} />
      ))}
    </>
  );
};

export default CollectionPage;
