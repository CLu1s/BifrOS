import { readDocsFromFirestore } from "@/firebase/services";
import { Execution } from "@/features/scrapper/types";

export async function getScraperDocsFromFirebase() {
  return (await readDocsFromFirestore("scraper")) as Execution[];
}
