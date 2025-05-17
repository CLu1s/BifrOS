import { useEffect, useRef, useState } from "react";
import {
  CollectionInfo,
  CollectionResponse,
} from "@/features/wallpapers/types";
import { useSelector } from "react-redux";
import {
  selectMetadata,
  selectPages,
} from "@/features/wallpapers/redux/wallpaperSelector";
import useActions from "@/features/wallpapers/hooks/useActions";

export function useCollectionData(
  currentPage: number,
  activeCollection: CollectionInfo | null,
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const pagesData = useSelector(selectPages);
  const metadata = useSelector(selectMetadata);
  const fetchedRef = useRef<{ [key: string]: Set<number> }>({});
  const { addPage, addMetadata } = useActions();
  useEffect(() => {
    if (!activeCollection) return;

    // Crear una clave única para esta colección
    const collectionKey = activeCollection.id;

    // Inicializar el registro para esta colección si no existe
    if (!fetchedRef.current[collectionKey]) {
      fetchedRef.current[collectionKey] = new Set();
    }

    // Verificar si ya hemos cargado esta página para esta colección
    if (fetchedRef.current[collectionKey].has(currentPage)) {
      console.log(
        `Página ${currentPage} ya cargada para colección ${collectionKey}`,
      );
      return;
    }

    console.count("Fetching collection data for:");
    setIsLoading(true);

    (async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/wallhaven/collections/${activeCollection.id}?page=${currentPage}`,
          {
            headers: {
              "Content-Type": "application/json",
              // Puedes añadir headers de autenticación si los necesitas
            },
          },
        );
        const data = (await response.json()) as CollectionResponse;

        addPage({
          collectionId: activeCollection.id,
          page: data,
        });

        // Marcar esta página como cargada
        fetchedRef.current[collectionKey].add(currentPage);
      } catch (error) {
        console.error("Error fetching collection data:", error);
        setError("Failed to fetch collection data");
      } finally {
        setIsLoading(false);
      }
    })();
  }, [activeCollection, addMetadata, addPage, currentPage]);

  return { data: pagesData, metadata, isLoading, error };
}
