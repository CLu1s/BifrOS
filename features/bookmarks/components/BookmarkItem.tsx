import { Button, Image, Link, Card, CardBody, CardFooter } from "@heroui/react";
import { Star, Trash2 } from "lucide-react";
import { Bookmark } from "@/features/bookmarks/types";
import { updateFirestore } from "@/firebase/services";
import { useDispatch } from "react-redux";
import { updateBookmark } from "@/features/bookmarks/redux/bookmarksSlice";
import useBookmark from "@/features/bookmarks/hooks/useBookmark";
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
    <Card as={Link} href={data.url} target={"_blank"}>
      <CardBody className="overflow-visible p-0">
        <Image
          src={data.ogImage || data.favicon || "/vercel.svg"}
          alt={data.title}
          className="w-full object-cover h-[200px]"
          radius="lg"
          width="100%"
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <h2 className={"text-lg truncate"}>{data.title}</h2>
        <div className={"flex gap-6"}>
          <Button
            size={"sm"}
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
            size={"sm"}
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
      </CardFooter>
    </Card>
  );
}

export default BookmarkItem;
