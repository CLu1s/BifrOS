"use client";
import { useDisclosure } from "@heroui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoadingState } from "@/features/scrapper/redux/scrapperSelectors";
import {
  addExecution,
  setExecutions,
  setLoadingState,
} from "@/features/scrapper/redux/scrapperSlice";
import { Execution, KodanshaResult } from "@/features/scrapper/types";
import useScrapper from "@/features/scrapper/hooks/useScrapper";
import { ControlPanel } from "@/features/scrapper/components/ControlPanel";
import { MetricsTable } from "@/features/scrapper/components/MetricsTable";
import { ModalDetail } from "@/features/scrapper/components/ModalDetail";
import { getScraperDocsFromFirebase } from "@/features/scrapper/lib";
import PageLayout from "@/components/PageLayout";

const ScrapperDashboard = () => {
  const dispatch = useDispatch();
  const loadinState = useSelector(selectLoadingState);
  const { metrics, executions } = useScrapper();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalData, setModalData] = useState<Record<string, KodanshaResult[]>>(
    {},
  );
  const colDefs = [
    {
      field: "urlsScraped",
      headerName: "URL",
      onCellClicked: (e: { data: { executionId: string } }) => {
        const execution = executions.find(
          (execution) => execution.executionId === e.data.executionId,
        );
        if (!execution) return;
        const result = execution.result as unknown as Record<
          string,
          KodanshaResult[]
        >;
        setModalData(result);
        onOpen();
      },
    },
    { field: "dataExtracted", headerName: "dataExtracted" },
    {
      field: "timestamp",
      headerName: "Fecha y Hora",
      valueFormatter: (params: { value: string }) => {
        return new Date(params.value).toLocaleString();
      },
    },
    {
      field: "duration",
      headerName: "Duration",
      valueFormatter: (params: { value: number }) => {
        return `${params.value / 1000}s`;
      },
    },
  ];
  useEffect(() => {
    (async () => {
      const data =
        (await getScraperDocsFromFirebase()) as unknown as Execution[];
      dispatch(setExecutions(data));
    })();
  }, []);

  const startScrapper = async () => {
    if (loadinState === "loading") return;
    const url = process.env.NEXT_PUBLIC_SCRAPPER_URL;
    if (!url) {
      console.error("Scrapper URL not found");
      return;
    }
    dispatch(setLoadingState("loading"));
    const response = await fetch(url);
    const data = await response.json();
    dispatch(addExecution(data));
    dispatch(setLoadingState("idle"));
  };

  return (
    <PageLayout>
      <ControlPanel
        loadinState={loadinState}
        onPress={startScrapper}
        metrics={metrics}
      />
      <MetricsTable rowData={metrics} columnDefs={colDefs} />
      <ModalDetail
        open={isOpen}
        onOpenChange={onOpenChange}
        modalData={modalData}
      />
    </PageLayout>
  );
};

export default ScrapperDashboard;
