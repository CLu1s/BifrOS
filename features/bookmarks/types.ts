// src/modules/bookmarks/types/bookmark.types.ts

export interface Bookmark {
  // Propiedades básicas
  id: string;
  url: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  ogImage: string;
  category: never;

  // Propiedades opcionales
  description?: string;
  favicon?: string;
  screenshot?: string;

  // Metadatos y categorización
  tags?: string[];
  folder?: string;
  isArchived: boolean;
  isFavorite: boolean;

  // Relaciones (IDs como referencia a otros modelos)
  userId: string;

  // Estadísticas de uso
  visitCount?: number;
  lastVisited?: Date;
}

// Para operaciones de creación, podemos usar un tipo derivado
// que hace opcionales los campos que se generan automáticamente
export type CreateBookmarkDto = Omit<
  Bookmark,
  "id" | "createdAt" | "updatedAt"
> & {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

// Para operaciones de actualización, todas las propiedades son opcionales
export type UpdateBookmarkDto = Partial<Bookmark>;

// Para filtros de búsqueda
export interface BookmarkFilters {
  searchTerm?: string;
  tags?: string[];
  folder?: string;
  isArchived?: boolean;
  isFavorite?: boolean;
  startDate?: Date;
  endDate?: Date;
  sortBy?: "createdAt" | "updatedAt" | "lastVisited" | "title";
  sortOrder?: "asc" | "desc";
  limit?: number;
  offset?: number;
}
