import { readDocsFromFirestore } from "@/firebase/services";
import { Bookmark, Category } from "@/features/bookmarks/types";

export async function getCategories() {
  return (await readDocsFromFirestore(
    "bookmarker/myData/categories",
  )) as Category[];
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
    return title;
  }
};
