import { Bookmark } from "@/features/bookmarks/types";
import { getString } from "@/features/bookmarks/lib";

function BookmarkDashboardItem({ data }: { data: Bookmark }) {
  return (
    <a
      href={data.url}
      target={"_blank"}
      className={
        " shrink-0 gap-2  justify-between text-start hover:bg-neutral-700   border rounded-xl cursor-pointer"
      }
    >
      <div className={"flex flex-col gap-0 w-full justify-center"}>
        <img
          src={data.ogImage || data.favicon || "/favicon.svg"}
          alt={data.title}
          className={"object-cover h-28 rounded-xl w-full"}
        />

        <div className={" col-span-4 flex flex-col gap-2 px-2"}>
          <h2 className={"text-sm "}>{getString(data.title)}</h2>
        </div>
      </div>
    </a>
  );
}

export default BookmarkDashboardItem;
