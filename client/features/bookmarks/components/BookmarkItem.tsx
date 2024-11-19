import { Button } from "@nextui-org/react";
import { Trash2 } from "lucide-react";
import { Bookmark } from "@/features/bookmarks/types";
import { deleteFromFirestore } from "@/firebase/services";
import { useDispatch } from "react-redux";
import { removeBookmark } from "@/features/bookmarks/redux/bookmarksSlice";

function BookmarkItem({ data }: { data: Bookmark }) {
  const dispatch = useDispatch();

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await deleteFromFirestore(`bookmarker/myData/bookmarks/${data.id}`);
    dispatch(removeBookmark(data.id));
  };

  return (
    <a
      href={data.url}
      target={"_blank"}
      className={
        "flex gap-4 w-full justify-between text-start hover:bg-neutral-100 p-6  border rounded-xl"
      }
    >
      <div className={"flex gap-4"}>
        <div className={"w-14 h-14"}>
          {data.ogImage ? (
            <img
              src={data.ogImage}
              alt={data.ogTitle}
              className={"h-14 min-w-14 object-cover rounded"}
            />
          ) : (
            <img
              src={data.favicon}
              alt={data.ogTitle}
              className={"w-14 h-14 object-cover rounded"}
            />
          )}
        </div>

        <div className={"flex-col gap-2"}>
          <h2 className={"text-lg "}>{decodeURIComponent(data.ogTitle)}</h2>
          <p className={"font-normal text-neutral-600 text-sm"}>
            {decodeURIComponent(data.ogDescription)}
          </p>
        </div>
      </div>
      <div>
        <Button variant={"bordered"} isIconOnly onClick={handleDelete}>
          <Trash2 />
        </Button>
      </div>
    </a>
  );
}

export default BookmarkItem;
