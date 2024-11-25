import { queryFirestore, readDocsFromFirestore } from "@/firebase/services";
import { HistoryElement, QueueElement } from "@/features/wallpapers/types";
import { collection, getFirestore, orderBy, query } from "firebase/firestore";

export async function getQueueFromFirebase() {
  const landscape = (await readDocsFromFirestore(
    "wallpapers/myData/landscape-queue",
  )) as QueueElement[];
  const portrait = (await readDocsFromFirestore(
    "wallpapers/myData/portrait-queue",
  )) as QueueElement[];
  return { landscape, portrait };
}

export async function getHistoryFromFirebase() {
  const db = getFirestore();
  const ref = collection(db, "wallpapers/myData/history");
  const q = query(ref, orderBy("timestamp", "desc"));
  return (await queryFirestore(q)) as HistoryElement[];
}
