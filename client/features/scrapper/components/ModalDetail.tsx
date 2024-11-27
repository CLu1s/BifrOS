import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { AnimeCornerResult, KodanshaResult } from "@/features/scrapper/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import KodanshaResultRender from "@/features/scrapper/components/KodanshaResultRender";
import AnimeCornerScraperResult from "@/features/scrapper/components/AnimeCornerScraperResult";

export function ModalDetail(props: {
  open: boolean;
  onOpenChange: () => void;
  modalData: Record<string, KodanshaResult[]> | AnimeCornerResult;
}) {
  const { onOpenChange, modalData } = props;
  const values = Object.values(modalData);
  if (values.length === 0) return null;
  const isKodansha = values[0][0].hasOwnProperty("ageRating");

  return (
    <Modal isOpen={props.open} onOpenChange={props.onOpenChange} size={"full"}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Results</ModalHeader>
        <ModalBody>
          <div className={"  flex flex-col gap-4 lg:gap-8"}>
            <ScrollArea
              className={"h-[calc(100vh-4rem)] w-full rounded-md border p-2"}
            >
              {isKodansha ? (
                <KodanshaResultRender
                  data={modalData as Record<string, KodanshaResult[]>}
                />
              ) : (
                <AnimeCornerScraperResult
                  data={modalData as AnimeCornerResult}
                />
              )}
            </ScrollArea>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onOpenChange}>
            Close
          </Button>
          <Button color="primary" onPress={onOpenChange}>
            Action
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
