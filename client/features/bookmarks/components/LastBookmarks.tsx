"use client";
import useBookmark from "@/features/bookmarks/hooks/useBookmark";
import BookmarkDashboardItem from "@/features/bookmarks/components/BookmarkDashboardItem";

const LastBookmarks = () => {
  const { bookmarks } = useBookmark();
  const recentBookmarks = bookmarks.slice(0, 6);
  const renderBookmarks = recentBookmarks.map((bookmark) => (
    <BookmarkDashboardItem key={bookmark.id} data={bookmark} />
  ));

  return (
    <div className={"flex flex-col gap-4 w-full"}>
      <h2 className={"text-lg font-semibold"}>Latest</h2>
      <div>
        <div
          className={"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3   gap-3  "}
        >
          {renderBookmarks}
        </div>
      </div>
    </div>
  );
};

export default LastBookmarks;
