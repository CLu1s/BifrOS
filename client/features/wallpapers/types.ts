export interface CollectionInfo {
  id: string;
  label: string;
  views: number;
  public: 1 | 0;
  count: number;
  useRepeat: boolean;
  per_page: number;
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
