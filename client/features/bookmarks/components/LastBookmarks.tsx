import { Card, CardBody, CardHeader } from "@nextui-org/react";
import useBookmark from "@/features/bookmarks/hooks/useBookmark";
import BookmarkDashboardItem from "@/features/bookmarks/components/BookmarkDashboardItem";

const LastBookmarks = () => {
  const { bookmarks } = useBookmark();
  const recentBookmarks = bookmarks.slice(0, 5);
  const renderBookmarks = recentBookmarks.map((bookmark) => (
    <BookmarkDashboardItem key={bookmark.id} data={bookmark} />
  ));

  return (
    <Card className={" w-full"}>
      <CardHeader>
        <h2 className={"text-xl font-semibold"}>Latest Bookmarks</h2>
      </CardHeader>
      <CardBody>
        <div className={"grid grid-cols-1  gap-2 2xl:gap-4"}>
          {renderBookmarks}
        </div>
      </CardBody>
    </Card>
  );
};

export default LastBookmarks;
