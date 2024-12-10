import { queryFirestore, readDocsFromFirestore } from "@/firebase/services";
import { HistoryElement, QueueElement } from "@/features/wallpapers/types";
import { collection, getFirestore, orderBy, query } from "firebase/firestore";
export * from "./fetchers";

export async function historyFromFirebaseFetcher() {
  const db = getFirestore();
  const ref = collection(db, "wallpapers/myData/history");
  const q = query(ref, orderBy("timestamp", "desc"));
  return (await queryFirestore(q)) as HistoryElement[];
}
