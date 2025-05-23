import { queryFirestore } from "@/firebase/services";
import { HistoryElement, QueueElement } from "@/features/wallpapers/types";
import {
  collection,
  getFirestore,
  orderBy,
  query,
  limit,
} from "firebase/firestore";

export * from "../../../lib/fetchers";

export async function historyFromFirebaseFetcher() {
  const db = getFirestore();
  const ref = collection(db, "wallpapers/myData/history");
  const q = query(ref, orderBy("timestamp", "desc"), limit(6));
  return (await queryFirestore(q)) as HistoryElement[];
}

export async function allHistoryFromFirebaseFetcher() {
  const db = getFirestore();
  const ref = collection(db, "wallpapers/myData/history");
  const q = query(ref, orderBy("timestamp", "desc"));
  return (await queryFirestore(q)) as HistoryElement[];
}

export const orderQueue = (a: QueueElement, b: QueueElement) =>
  b.priority - a.priority;
