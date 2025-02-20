import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import React from "react";
import useActions from "@/features/wallpapers/hooks/useActions";
import { useSelector } from "react-redux";
import {
  selectIsModalOpen,
  selectModalImage,
} from "@/features/wallpapers/redux/wallpaperSelector";
import { QueueElement, Image as ImageType } from "@/features/wallpapers/types";
import { ImageQueueFactory } from "@/features/wallpapers/classes/Image";

const GalleryModal = () => {
  const { closeModal } = useActions();
  const isOpen = useSelector(selectIsModalOpen);
  const image = useSelector(selectModalImage);
  if (!image) return null;
  const imageWallpaper = ImageQueueFactory.createImage(image);
  const type = imageWallpaper.getType();
  console.log(image, imageWallpaper.data);
  const url = imageWallpaper.data.path;

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
              <Image
                key={image?.id}
                alt={url}
                src={`/wh-proxy?url=${url}
`}
              />
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
