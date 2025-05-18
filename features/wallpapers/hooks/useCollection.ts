import { useCollectionData } from "@/features/wallpapers/hooks/useCollectionData";
import { useCollectionsInitializer } from "@/features/wallpapers/hooks/useCollectionsInitializer";
import { useActiveCollection } from "@/features/wallpapers/hooks/useActiveCollection";

export default function useCollection(initialData?: string) {
  const collections = useCollectionsInitializer(initialData);
  const { activeCollection, currentPage, setCurrentPage, selectCollection } =
    useActiveCollection();
  const {
    data: activeData,
    metadata,
    isLoading,
    error,
  } = useCollectionData(currentPage, activeCollection);
  return {
    collections,
    activeCollection,
    activeData: activeData || [],
    metadata,
    isLoading,
    error,
    setActiveCollection: selectCollection,
    setCurrentPage,
  };
}
