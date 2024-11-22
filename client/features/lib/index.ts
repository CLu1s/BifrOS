import { readDocsFromFirestore } from "@/firebase/services";
import { Bookmark } from "@/features/bookmarks/types";

export async function getBookmarksFromFirestore() {
  return (await readDocsFromFirestore(
    "bookmarker/myData/bookmarks",
  )) as Bookmark[];
}
