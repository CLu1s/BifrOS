import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";
import useActions from "@/features/wallpapers/hooks/useActions";
import { useSelector } from "react-redux";
import {
  selectIsModalOpen,
  selectModalImage,
} from "@/features/wallpapers/redux/wallpaperSelector";
import { QueueElement, Image as ImageType } from "@/features/wallpapers/types";

const GalleryModal = () => {
  const { closeModal } = useActions();
  const isOpen = useSelector(selectIsModalOpen);
  const image = useSelector(selectModalImage);
  const type =
    image &&
    (Object.keys(image).includes("type")
      ? (image as QueueElement).type
      : Number((image as ImageType).ratio) < 1
        ? "portrait"
        : "landscape");
  const url = (image as ImageType)?.path || image?.url;
  console.log(url);

  return (
    <Modal
      isOpen={isOpen}
      size={type === "portrait" ? "xl" : "5xl"}
      onOpenChange={(open) => !open && closeModal()}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Modal Title
            </ModalHeader>
            <ModalBody>
              <Image key={image?.id} alt={url} src={url} />
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={() => {
                  closeModal();
                  onClose();
                }}
              >
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default GalleryModal;
