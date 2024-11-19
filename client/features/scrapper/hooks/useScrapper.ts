import { selectExecutions } from "@/features/scrapper/redux/scrapperSelectors";
import { useSelector } from "react-redux";

const useScrapper = () => {
  const executions = useSelector(selectExecutions);
  const metrics = executions.map((execution) => {
    return execution.metrics;
  });
  return {
    executions,
    metrics,
  };
};

export default useScrapper;
