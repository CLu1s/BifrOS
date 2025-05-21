import { Button, Image } from "@heroui/react";
import { Star, Trash2 } from "lucide-react";
import { Bookmark } from "@/features/bookmarks/types";
import { updateFirestore } from "@/firebase/services";
import { useDispatch } from "react-redux";
import { updateBookmark } from "@/features/bookmarks/redux/bookmarksSlice";
import useBookmark from "@/features/bookmarks/hooks/useBookmark";
import { getString } from "@/features/bookmarks/lib";
import useFetchBookmarks from "@/features/bookmarks/hooks/useFetchBookmarks";

function BookmarkItem({ data }: { data: Bookmark }) {
  const { deleteBookmark } = useBookmark();
  const { revalidate } = useFetchBookmarks();
  const dispatch = useDispatch();

  const isFavoriteClass = data.isFavorite
    ? "hover:border-yellow-500 hover:text-yellow-500  bg-yellow-500 text-white"
    : "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white";
  const handleDelete = async () => {
    await deleteBookmark(data.id);
  };

  const markAsFavorite = async () => {
    await updateFirestore(`bookmarker/myData/bookmarks/${data.id}`, {
      isFavorite: !data.isFavorite,
    });
    dispatch(updateBookmark({ ...data, isFavorite: !data.isFavorite }));
  };

  return (
    <a
      href={data.url}
      target={"_blank"}
      className={
        "flex flex-col gap-4 w-full justify-between text-start hover:bg-neutral-700  p-4  border rounded-xl"
      }
    >
      <div className={"flex  flex-col justify-between gap-4"}>
        <div className={"flex flex-col gap-4"}>
          <div className={"w-full h-full"}>
            <Image
              src={data.ogImage || data.favicon || "/vercel.svg"}
              alt={data.title}
              className={"min-h-full min-w-14 object-cover rounded"}
            />
          </div>

          <div className={"flex-col gap-2"}>
            <h2 className={"text-lg truncate"}>{getString(data.title)}</h2>
            {/*<p*/}
            {/*  className={*/}
            {/*    "font-normal text-neutral-400 text-sm h-14 overflow-hidden"*/}
            {/*  }*/}
            {/*>*/}
            {/*  {data.description}*/}
            {/*</p>*/}
          </div>
        </div>
        <div className={"flex gap-6"}>
          <Button
            variant={"bordered"}
            isIconOnly
            onPress={() => {
              void markAsFavorite();
            }}
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
            onClick={async (e) => {
              e.preventDefault();
              await handleDelete();
              await revalidate();
            }}
          >
            <Trash2 />
          </Button>
        </div>
      </div>
    </a>
  );
}

export default BookmarkItem;
