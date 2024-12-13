import { queryFirestore, readDocsFromFirestore } from "@/firebase/services";
import { Execution } from "@/features/scrapper/types";
import {
  collection,
  getFirestore,
  orderBy,
  query,
  limit,
} from "firebase/firestore";
import { HistoryElement } from "@/features/wallpapers/types";

export async function getScraperDocsFromFirebase() {
  const db = getFirestore();
  const ref = collection(db, "scraper");
  const q = query(ref, orderBy("timestamp", "desc"), limit(5));
  return (await queryFirestore(q)) as HistoryElement[];
}
