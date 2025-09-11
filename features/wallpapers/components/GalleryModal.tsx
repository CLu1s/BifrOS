"use client";
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Link,
} from "@heroui/react";
import React from "react";
import useActions from "@/features/wallpapers/hooks/useActions";
import { useSelector } from "react-redux";
import {
  selectIsModalOpen,
  selectModalImage,
} from "@/features/wallpapers/redux/wallpaperSelector";

const GalleryModal = () => {
  const { closeModal } = useActions();
  const isOpen = useSelector(selectIsModalOpen);
  const image = useSelector(selectModalImage);
  if (!image) return null;
  console.log(image);
  const { isVertical } = image;
  return (
    <Modal
      isOpen={isOpen}
      size={isVertical ? "xl" : "5xl"}
      onOpenChange={(open) => !open && closeModal()}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {image.wallhavenId}
            </ModalHeader>
            <ModalBody>
              <div className={"w-full h-full flex justify-center items-center"}>
                <Image
                  alt={image.alt}
                  src={`/proxy?url=${image.imageUrl}`}
                  className={"max-h-[80vh] m-auto"}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                showAnchorIcon
                as={Link}
                color="primary"
                href={image.imageUrl}
                target={"_blank"}
                variant="solid"
              >
                Visit source
              </Button>

              <Button
                color="danger"
                variant="solid"
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
