import Favorites from "@/features/bookmarks/components/Favorites";
import LastBookmarks from "@/features/bookmarks/components/LastBookmarks";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

const BookmarkWidget = () => {
  return (
    <Card className={"p-2 w-full"}>
      <CardHeader>
        <h2 className={"text-xl font-semibold"}> Bookmarks</h2>
      </CardHeader>
      <CardBody className={"flex flex-col gap-4"}>
        <Favorites />
        <LastBookmarks />
      </CardBody>
    </Card>
  );
};

export default BookmarkWidget;
