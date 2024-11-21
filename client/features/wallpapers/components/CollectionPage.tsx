import type { Image as ImageType, QueueElement } from "../types";
import React from "react";
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import useSWR from "swr";
import { useDispatch } from "react-redux";
import { addToQueue } from "@/features/wallpapers/redux/wallpaperSlice";
import useWallpapers from "@/features/wallpapers/hooks/useWallpapers";
import { GalleryImage } from "@/features/wallpapers/components/GalleryImage";
import { saveOnFirestore } from "@/firebase/services";

const fetcher = (...args: any[]) =>
  // @ts-expect-error sss
  fetch(...args, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
interface Props {
  collectionID: number | string | undefined;
  // userConfig: CollectionConfig | undefined;
  index: number;
}
const API_URL = process.env.NEXT_PUBLIC_GET_WALLPAPERS_PAGE;

const CollectionPage = ({ collectionID, index }: Props) => {
  const dispatch = useDispatch();
  const { all } = useWallpapers();
  const { getNextQueueNumberOrder } = useWallpapers();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImage, setSelectedImage] = React.useState<ImageType | null>(
    null,
  );
  const { data, error, isLoading } = useSWR(
    `${API_URL}?collection=${collectionID}&page=${index}`,
    fetcher,
  );
  if (!collectionID) return <div>No collection ID</div>;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>No data</div>;

  const addImageToQueue = async (image: ImageType) => {
    const find = all.find((el) => el.id === image.id);
    if (find) return;
    const element: QueueElement = {
      id: image.id,
      url: image.path,
      addedAt: new Date().toISOString(),
      isActive: false,
      order: getNextQueueNumberOrder(),
    };

    try {
      const type = Number(image.ratio) < 1 ? "portrait" : "landscape";

      await saveOnFirestore(
        `wallpapers/myData/${type}-queue/${image.id}`,
        element,
      );
      dispatch(
        addToQueue({
          element,
          type,
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const renderImage = () => {
    return data.data.map((image: ImageType) => (
      <GalleryImage
        key={image.id}
        image={image}
        onPress={() => addImageToQueue(image)}
        onPress1={() => {
          setSelectedImage(image);
          onOpen();
        }}
      />
    ));
  };
  return (
    <>
      {renderImage()}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"5xl"}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <Image
                  key={selectedImage?.id}
                  alt={selectedImage?.url}
                  src={selectedImage?.path}
                />
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

export default CollectionPage;
