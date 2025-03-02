import { readDocsFromFirestore } from "@/firebase/services";

export async function getScraperDocsFromFirebase() {
  return await readDocsFromFirestore(`kodansha`);
}
