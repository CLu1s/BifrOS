import { selectExecutions } from "@/features/scrapper/redux/scrapperSelectors";
import { useSelector } from "react-redux";
import { isBefore } from "date-fns";

const useScrapper = () => {
  const executions = useSelector(selectExecutions);
  const metrics = executions
    .map((execution) => {
      return execution.metrics;
    })
    .sort((a, b) => {
      return isBefore(new Date(a.timestamp), new Date(b.timestamp)) ? 1 : -1;
    });
  return {
    executions,
    metrics,
  };
};

export default useScrapper;
