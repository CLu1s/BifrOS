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
  collectionID: string | number;
  // userConfig: CollectionConfig | undefined;
  index: number;
}
const API_URL = process.env.NEXT_PUBLIC_GET_WALLPAPERS_PAGE;

export const fetchCollectionPage = ({ collectionID, index }: Props) => {
  return useSWR(`${API_URL}?collection=${collectionID}&page=${index}`, fetcher);
};
