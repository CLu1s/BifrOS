import { readDocsFromFirestore } from "@/firebase/services";
import { Category } from "@/features/bookmarks/types";

export async function getCategories() {
  return (await readDocsFromFirestore(
    "bookmarker/myData/categories",
  )) as Category[];
}
