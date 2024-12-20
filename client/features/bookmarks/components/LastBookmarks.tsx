import useBookmark from "@/features/bookmarks/hooks/useBookmark";
import BookmarkDashboardItem from "@/features/bookmarks/components/BookmarkDashboardItem";

const LastBookmarks = () => {
  const { bookmarks } = useBookmark();
  const recentBookmarks = bookmarks.slice(0, 5);
  const renderBookmarks = recentBookmarks.map((bookmark) => (
    <BookmarkDashboardItem key={bookmark.id} data={bookmark} />
  ));

  return (
    <div className={"flex flex-col gap-4 w-full"}>
      <h2 className={"text-lg font-semibold"}>Latest</h2>
      <div>
        <div className={"grid grid-cols-1  gap-2 2xl:gap-4"}>
          {renderBookmarks}
        </div>
      </div>
    </div>
  );
};

export default LastBookmarks;
