import { Metric } from "@/features/scrapper/types";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";

export function ControlPanel(props: {
  loadinState: "idle" | "loading" | "success" | "error";
  onPress: () => Promise<void>;
  metrics: Metric[];
}) {
  return (
    <Card>
      <CardHeader>
        <h2 className={"text-xl font-medium"}>Control Panel </h2>
      </CardHeader>
      <CardBody>
        <div className={"grid grid-cols-2 gap-4"}>
          <div className={"flex flex-col justify-center"}>
            <Button
              variant={"solid"}
              color={"primary"}
              disabled={props.loadinState === "loading"}
              onPress={props.onPress}
            >
              Start Scrapper
            </Button>
          </div>
          <div className={"flex justify-end flex-col gap-2 w-4/12"}>
            <div className={"flex gap-2 justify-between"}>
              <h3 className={" font-medium"}>State</h3>
              <p>{props.loadinState}</p>
            </div>
            <div className={"flex gap-2 justify-between"}>
              <h3 className={"font-medium"}>Completed</h3>
              <p className={"text-success"}>{props.metrics.length}</p>
            </div>
            <div className={"flex gap-2 justify-between"}>
              <h3 className={" font-medium"}>Failed</h3>
              <p className={"text-danger"}>0</p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
