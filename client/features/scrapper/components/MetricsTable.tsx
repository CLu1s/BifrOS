import { Metric } from "@/features/scrapper/types";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { AgGridReact } from "ag-grid-react";

export function MetricsTable(props: {
  rowData: Metric[];
  columnDefs: {
    headerName: string;
    field: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onCellClicked?: (e: any) => void;
  }[];
}) {
  return (
    <Card>
      <CardHeader>
        <h2 className={"text-xl font-semibold"}>Recent Results</h2>
      </CardHeader>
      <CardBody>
        <div style={{ height: 300 }}>
          {/*  @ts-expect-error error */}
          <AgGridReact rowData={props.rowData} columnDefs={props.columnDefs} />
        </div>
      </CardBody>
    </Card>
  );
}
