"use client";
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

const GalleryModal = () => {
  const { closeModal } = useActions();
  const isOpen = useSelector(selectIsModalOpen);
  const image = useSelector(selectModalImage);
  if (!image) return null;
  console.log(image);
  return (
    <Modal
      isOpen={isOpen}
      size={"4xl"}
      onOpenChange={(open) => !open && closeModal()}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {image.wallhavenId}
            </ModalHeader>
            <ModalBody>
              <Image alt={image.alt} src={`${image.imageUrl}`} />
            </ModalBody>
            <ModalFooter>
              <a href={image.imageUrl} target={"_blank"}>
                Visit source
              </a>
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
