import { readDocsFromFirestore } from "@/firebase/services";
import { Bookmark } from "@/features/bookmarks/types";

export async function getCategories() {
  return await readDocsFromFirestore("bookmarker/myData/categories");
}

export async function getBookmarksFromFirestore() {
  return (await readDocsFromFirestore(
    "bookmarker/myData/bookmarks",
  )) as Bookmark[];
}

export const getString = (title: string) => {
  try {
    return decodeURIComponent(title);
  } catch (e) {
    console.error("Error decoding URI component:", e);
    return title;
  }
};
