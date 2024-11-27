import { selectExecutions } from "@/features/scrapper/redux/scrapperSelectors";
import { useSelector } from "react-redux";
import { isBefore } from "date-fns";
import { Execution } from "@/features/scrapper/types";

const sortExecutions = (executions: Execution[]) => {
  return executions.sort((a, b) => {
    return isBefore(new Date(b.timestamp), new Date(a.timestamp)) ? 1 : -1;
  });
};

const useScrapper = () => {
  const executions = useSelector(selectExecutions);
  const metrics = executions
    .map((execution) => {
      return execution.metrics;
    })
    .sort((a, b) => {
      return isBefore(new Date(a.timestamp), new Date(b.timestamp)) ? 1 : -1;
    });

  const kodanshaExecutions = sortExecutions(
    executions.filter((metric) => {
      return metric.metrics.url === "https://kodansha.us/";
    }),
  );
  const animeCornerExecutions = sortExecutions(
    executions.filter((metric) => {
      return metric.metrics.url !== "https://kodansha.us/";
    }),
  );
  return {
    executions,
    kodanshaExecutions,
    animeCornerExecutions,
    metrics,
  };
};

export default useScrapper;
