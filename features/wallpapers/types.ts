export interface CollectionInfo {
  id: string;
  label: string;
  views: number;
  public: 1 | 0;
}

export interface Image {
  collection: number | string;
  category: string;
  id: string;
  url: string;
  path: string;
  short_url: string;
  dimension_x: number;
  dimension_y: number;
  colors: string[];
  purity: string;
  thumbs: {
    small: string;
    original: string;
    large: string;
  };
  favorites: number;
  ratio: string;
  views: number;
  lastUse: number;
  useCount: number;
}

export interface Settings {
  thumb_size: string;
  per_page: string;
  purity: string[];
  categories: string[];
  ai_art_filter: number;
  resolutions: string[];
  aspect_ratios: string[];
  toplist_range: string;
  tag_blacklist: string[];
  user_blacklist: string[];
}

export type QueueElementOld = {
  id: string;
  queue: "landscape-queue" | "portrait-queue";
  type: "portrait" | "landscape";
  order: number;
  name?: string;
  url: string;
  whPath: string;
  addedAt: string;
  isActive: boolean;
  thumb: string;
  path: string;
};

export interface QueueElement extends Image {
  id: string;
  queue: "landscape-queue" | "portrait-queue";
  order: number;
  name?: string;
  addedAt: string;
  isActive: boolean;
}

export interface Meta {
  current_page: number;
  last_page: number;
  per_page: string;
  total: number;
  query: string | null;
  seed: string | null;
}

export interface CollectionResponse {
  data: Image[];
  meta: Meta;
}

export interface HistoryElement extends QueueElement {
  timestamp: string;
}

export interface HistoryElementOld extends QueueElementOld {
  timestamp: string;
}
