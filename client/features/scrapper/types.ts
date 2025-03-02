export type Metric = {
  url: string;
  dataExtracted: number;
  duration: number;
  errorMessage: number;
  executionId: string;
  status: string;
  timestamp: string;
};

export type Execution = {
  executionId: string;
  metrics: Metric;
  result: Record<string, KodanshaResult[]>;
  timestamp: string;
};

interface Thumbnail {
  width: number;
  height: number;
  fileSize: number;
  url: string;
  color?: string; // Opcional, ya que no todos los thumbnails tienen el campo "color"
}

interface Variant {
  type: string;
  price: number;
  fullPrice: number;
  discountPrice: number;
  isComingSoon: boolean;
  isPreOrder: boolean;
  priceType: string;
  id: number;
  description: string;
  isOnSale: boolean;
  usesDefaultProductImage: boolean;
  thumbnails: Thumbnail[];
}

export interface Manga {
  type: string;
  price: number;
  fullPrice: number;
  discountPrice: number;
  isComingSoon: boolean;
  isPreOrder: boolean;
  priceType: string;
  id: number;
  description: string;
  isOnSale: boolean;
  usesDefaultProductImage: boolean;
  thumbnails: Thumbnail[];
  ageRating: string;
  volumeNumber: number;
  volumeId: number;
  seriesName: string;
  volumeName: string;
  seriesId: number;
  seriesReadableUrl: string;
  title: string;
  relativeName: string;
  readableUrl: string;
  publishDate: string; // Puedes usar `Date` si prefieres trabajar con objetos de fecha
  author: string;
  printType: string;
  variants: Variant[];
  dbID: string;
  last_update: string; // Puedes usar `Date` si prefieres trabajar con objetos de fecha
}

export type LinkType = {
  name: string;
  url: string;
};

export type KodanshaResult = {
  linksToStores: LinkType[];
  readableUrl: string;
  relativeName: string;
  seriesName: string;
  thumbnail: {
    width: number;
    height: number;
    fileSize: number;
    url: string;
  };
  price: number;
  fullPrice: number;
  discountPrice: number;
  ageRating: string;
};

export type AnimeCornerResult = {
  id: string;
  title: string;
  link: string;
  image: string;
  data: AnimeCornerData[];
};

export type AnimeCornerData = {
  rank: number;
  score: number;
  title: string;
};
