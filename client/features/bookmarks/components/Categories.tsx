import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import { Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { saveOnFirestore } from "@/firebase/services";
import { Category } from "@/features/bookmarks/types";
import { useSelector } from "react-redux";
import { selectCategories } from "@/features/bookmarks/redux/bookmarkSelector";
import { getCategories } from "@/features/bookmarks/lib";
import useActions from "@/features/bookmarks/hooks/useActions";
import useBookmark from "@/features/bookmarks/hooks/useBookmark";

const Categories = () => {
  const { setCategories, addCategory, setActiveCategory } = useActions();
  const { numberOfBookmarksByCategory } = useBookmark();
  const categories = useSelector(selectCategories);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [newCategory, setNewCategory] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    (async () => {
      const categories = await getCategories();
      setCategories(categories);
    })();
  }, []);

  const createCategory = async () => {
    const category: Category = {
      id: `category-${Date.now()}`,
      name: newCategory,
      color: "blue",
    };
    await saveOnFirestore(
      `bookmarker/myData/categories/${category.id}`,
      category,
    );
    addCategory(category);
    onOpenChange();
  };

  return (
    <div className={"border p-5 h-full rounded-lg "}>
      <div className={"flex justify-between"}>
        <h2 className={"text-sm"}>Categories</h2>
        <Button size={"sm"} isIconOnly onPress={onOpen}>
          <Plus className={"h-4 w-4"} />
        </Button>
      </div>
      <div className={"flex flex-col gap-2 mt-2"}>
        <Button
          className={"flex justify-between items-center"}
          variant={"light"}
          radius="none"
          onClick={() => setActiveCategory(null)}
        >
          <span> All</span>
          {/*<Button size={"sm"} variant={"light"}>*/}
          {/*  Delete*/}
          {/*</Button>*/}
        </Button>
        {categories.map((category: Category) => (
          <Button
            key={category.id}
            className={"flex justify-between items-center"}
            variant={"light"}
            radius="none"
            onClick={() => setActiveCategory(category)}
          >
            <span>{category.name}</span>

            <span>{numberOfBookmarksByCategory[category.id]}</span>

            {/*<Button size={"sm"} variant={"light"}>*/}
            {/*  Delete*/}
            {/*</Button>*/}
          </Button>
        ))}
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <Input
                  type={"text"}
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  ref={ref}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={createCategory}>
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Categories;
