import { useSelector } from "react-redux";
import {
  selectActiveArticle,
  selectFeeds,
} from "@/features/feed/redux/feedSelector";

const useFeed = () => {
  const feeds = useSelector(selectFeeds);

  return { feeds };
};

export default useFeed;
