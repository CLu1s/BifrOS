import Favorites from "@/features/bookmarks/components/Favorites";
import LastBookmarks from "@/features/bookmarks/components/LastBookmarks";
import Card, { ExtraButton } from "@/components/Card";

const BookmarkWidget = () => {
  return (
    <Card
      title={"Bookmarks"}
      renderExtra={<ExtraButton href={"/feed"}>View All</ExtraButton>}
    >
      <Favorites />
      <LastBookmarks />
    </Card>
  );
};

export default BookmarkWidget;
