import { queryFirestore } from "@/firebase/services";
import { HistoryElement, QueueElement } from "@/features/wallpapers/types";
import {
  collection,
  getFirestore,
  orderBy,
  query,
  limit,
} from "firebase/firestore";

export * from "./fetchers";

export async function historyFromFirebaseFetcher() {
  const db = getFirestore();
  const ref = collection(db, "wallpapers/myData/history");
  const q = query(ref, orderBy("timestamp", "desc"), limit(10));
  return (await queryFirestore(q)) as HistoryElement[];
}
export const orderQueue = (a: QueueElement, b: QueueElement) =>
  b.order - a.order;
