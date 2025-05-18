import { AnimeCornerResult } from "@/features/scrapper/types";

const AnimeCornerScraperResult = ({ data }: { data: AnimeCornerResult }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.image} alt={data.title} />
    </div>
  );
};

export default AnimeCornerScraperResult;
