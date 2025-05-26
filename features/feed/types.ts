interface ArticleSource {
  name: string;
  category: string;
}

export interface SourceMeta {
  total: number;
  page: number;
  limit: number;
  pages: number;
}

export interface Article {
  id: string;
  title: string;
  link: string;
  description: string | null;
  pubDate: string; // Alternatively, Date
  guid: string;
  categories: string;
  isRead: boolean;
  isFavorite: boolean;
  readAt: string | null; // Alternatively, Date
  sourceId: string;
  createdAt: string; // Alternatively, Date
  source: ArticleSource;
  imageUrl: string | null;
  thumbnailUrl: string | null;
  imageAlt: string | null;
  imageSource: string | null;
}

interface SourceCount {
  articles: number;
}

export interface Source {
  id: string;
  name: string;
  url: string;
  category: string;
  isActive: boolean;
  lastFetch: string; // Alternatively, Date
  createdAt: string; // Alternatively, Date
  _count: SourceCount;
}
