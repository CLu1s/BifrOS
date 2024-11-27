import useScrapper from "@/features/scrapper/hooks/useScrapper";
import { AnimeCornerResult } from "@/features/scrapper/types";
import {
  Card,
  CardHeader,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const LastAnimeCornerResult = () => {
  const { animeCornerExecutions } = useScrapper();
  const lastAnimeCornerExecution = animeCornerExecutions[0];
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const result =
    lastAnimeCornerExecution?.result as unknown as AnimeCornerResult;
  if (!lastAnimeCornerExecution) return null;
  return (
    <>
      <Card className={"p-2"}>
        <CardHeader>
          <h1 className={"font-medium"}>{result.title}</h1>
        </CardHeader>
        <button onClick={onOpen}>
          <Image src={result.image} alt={result.title} />
        </button>
      </Card>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"2xl"}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <Image src={result.image} alt={result.title} />
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
    </>
  );
};

export default LastAnimeCornerResult;
