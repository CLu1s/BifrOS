import { readDocsFromFirestore } from "@/firebase/services";
import { QueueElement } from "@/features/wallpapers/types";

export async function getQueueFromFirebase() {
  const landscape = (await readDocsFromFirestore(
    "wallpapers/myData/landscape-queue",
  )) as QueueElement[];
  const portrait = (await readDocsFromFirestore(
    "wallpapers/myData/portrait-queue",
  )) as QueueElement[];
  return { landscape, portrait };
}
