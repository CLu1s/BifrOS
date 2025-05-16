export type Bookmark = {
  id: string;
  ogImage: string;
  favicon: string;
  ogDescription: string;
  ogTitle: string;
  url: string;
  timestamp: number;
  isFavorite: boolean;
  category?: Category;
};

export type Category = {
  id: string;
  name: string;
  color: string;
};
