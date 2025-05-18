import useSWR from "swr";

export const fetcher = (...args: never[]) =>
  // @ts-expect-error sss
  fetch(...args, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());

interface Props {
  collectionID: string | number;
  // userConfig: CollectionConfig | undefined;
  index: number;
}
const API_URL = process.env.NEXT_PUBLIC_GET_WALLPAPERS_PAGE;

export const fetchCollectionPage = ({ collectionID, index }: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useSWR(
    `${API_URL}api/wallhaven/hot-collection?collection=${collectionID}&page=${index}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
};
