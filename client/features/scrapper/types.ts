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
