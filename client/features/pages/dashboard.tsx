"use client";
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { readDocsFromFirestore } from "@/firebase/services";
import { useDispatch, useSelector } from "react-redux";
import { selectLoadingState } from "@/features/scrapper/redux/scrapperSelectors";
import {
  addExecution,
  setExecutions,
  setLoadingState,
} from "@/features/scrapper/redux/scrapperSlice";
import { Execution } from "@/features/scrapper/types";
import useScrapper from "@/features/hooks/useScrapper";

import { AgGridReact } from "ag-grid-react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";

const ScrapperDashboard = () => {
  const dispatch = useDispatch();
  const loadinState = useSelector(selectLoadingState);
  const { metrics, executions } = useScrapper();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalData, setModalData] = useState<any>(null);
  const colDefs = [
    {
      field: "urlsScraped",
      headerName: "URL",
      onCellClicked: (e) => {
        console.log("perrroo", executions, e.data.executionId);

        const execution = executions.find(
          (execution) => execution.executionId === e.data.executionId,
        );

        setModalData(execution?.result);
        onOpen();
      },
    },
    { field: "dataExtracted", headerName: "dataExtracted" },
    { field: "duration", headerName: "duration" },
    { field: "timestamp", headerName: "timestamp" },
  ];
  useEffect(() => {
    (async () => {
      const data = (await readDocsFromFirestore("scraper")) as Execution[];
      console.log("Scrapper Dashboard Mounted", data);

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
    console.log(response);

    const data = await response.json();
    console.log(data);
    dispatch(addExecution(data));
    dispatch(setLoadingState("idle"));
  };
  console.log("metrics", modalData);
  return (
    <div className={"flex flex-col gap-4"}>
      <h1 className={"text-2xl font-bold"}>Scrapper</h1>
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
                disabled={loadinState === "loading"}
                onPress={startScrapper}
              >
                Start Scrapper
              </Button>
            </div>
            <div className={"flex flex-col gap-2"}>
              <div className={"flex gap-2 justify-between"}>
                <h3 className={" font-medium"}>State</h3>
                <p>{loadinState}</p>
              </div>
              <div className={"flex gap-2 justify-between"}>
                <h3 className={"font-medium"}>Completed</h3>
                <p className={"text-success"}>{metrics.length}</p>
              </div>
              <div className={"flex gap-2 justify-between"}>
                <h3 className={" font-medium"}>Failed</h3>
                <p className={"text-danger"}>0</p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <div style={{ height: 500 }}>
            <AgGridReact rowData={metrics} columnDefs={colDefs} />
          </div>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ScrapperDashboard;
