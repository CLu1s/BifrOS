import useSWR from "swr";
import { fetcher } from "@/lib/fetchers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function useGetKodansha() {
  const { data, error, isLoading } = useSWR(
    `${API_URL}/api/kodansha/sync`,
    fetcher,
    {
      revalidateOnFocus: true, // Revalidate when the tab is focused
      revalidateOnReconnect: true, // Revalidate when the network reconnects
    },
  );

  return {
    kodanshaList: data?.data || [],
    isLoading,
    error,
  };
}
