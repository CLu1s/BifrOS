import {
  Button,
  Image,
  Select,
  SelectItem,
  SharedSelection,
} from "@nextui-org/react";
import { Star, Trash2 } from "lucide-react";
import { Bookmark } from "@/features/bookmarks/types";
import { deleteFromFirestore, updateFirestore } from "@/firebase/services";
import { useDispatch } from "react-redux";
import {
  removeBookmark,
  updateBookmark,
} from "@/features/bookmarks/redux/bookmarksSlice";
import useBookmark from "@/features/bookmarks/hooks/useBookmark";

function BookmarkItem({ data }: { data: Bookmark }) {
  const { categories } = useBookmark();
  const dispatch = useDispatch();

  const isFavoriteClass = data.isFavorite
    ? "hover:border-yellow-500 hover:text-yellow-500  bg-yellow-500 text-white"
    : "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white";
  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await deleteFromFirestore(`bookmarker/myData/bookmarks/${data.id}`);
    dispatch(removeBookmark(data.id));
  };

  const markAsFavorite = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await updateFirestore(`bookmarker/myData/bookmarks/${data.id}`, {
      isFavorite: !data.isFavorite,
    });
    dispatch(updateBookmark({ ...data, isFavorite: !data.isFavorite }));
  };

  const onCategorySelected = async ({ currentKey }: SharedSelection) => {
    console.log(currentKey);
    const category = categories.find((i) => i.id == currentKey);
    if (!category) return;
    await updateFirestore(`bookmarker/myData/bookmarks/${data.id}`, {
      category,
    });
    dispatch(updateBookmark({ ...data, category }));
  };

  return (
    <a
      href={data.url}
      target={"_blank"}
      className={
        "flex flex-col   gap-4 w-full justify-between text-start hover:bg-neutral-700  p-6  border rounded-xl"
      }
    >
      <div className={"flex flex-col lg:flex-row justify-between gap-4"}>
        <div className={"flex gap-4"}>
          <div className={"w-14 h-14"}>
            {data.ogImage ? (
              <Image
                src={data.ogImage}
                alt={data.ogTitle}
                className={"min-h-14 min-w-14 object-cover rounded"}
              />
            ) : (
              <Image
                src={data.favicon}
                alt={data.ogTitle}
                className={"min-h-14 min-w-14 object-cover rounded"}
              />
            )}
          </div>

          <div className={"flex-col gap-2"}>
            <h2 className={"text-lg "}>{decodeURIComponent(data.ogTitle)}</h2>
            <p className={"font-normal text-neutral-400 text-sm"}>
              {decodeURIComponent(data.ogDescription)}
            </p>
          </div>
        </div>
        <div className={"flex gap-6"}>
          <Button
            variant={"bordered"}
            isIconOnly
            onClick={markAsFavorite}
            className={isFavoriteClass}
          >
            <Star />
          </Button>
          <Button
            variant={"bordered"}
            className={
              "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            }
            isIconOnly
            onClick={handleDelete}
          >
            <Trash2 />
          </Button>
        </div>
      </div>
      <div>
        <Select
          label="Category"
          className="max-w-xs"
          onClick={(e) => e.preventDefault()}
          size={"sm"}
          onSelectionChange={onCategorySelected}
          selectionMode={"single"}
          defaultSelectedKeys={[data.category?.id ?? ""]}
        >
          {categories.map((category) => (
            <SelectItem key={category.id}>{category.name}</SelectItem>
          ))}
        </Select>
      </div>
    </a>
  );
}

export default BookmarkItem;
