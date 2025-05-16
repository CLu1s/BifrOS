import { describe, it, expect, afterEach } from "vitest";
import { initializeTestEnvironment } from "@/firebase/firestoreTestUtils";
import {
  readDocFromFirestore,
  readDocsFromFirestore,
  saveOnFirestore,
} from "@/firebase/services";
import {
  collection,
  doc,
  getDoc,
  deleteDoc,
  getDocs,
  Firestore,
} from "firebase/firestore";

async function clearFirestoreData(db: Firestore) {
  const collections = ["turns"]; // Add all collections you use in tests
  for (const coll of collections) {
    const collRef = collection(db, coll);
    const snapshot = await getDocs(collRef);
    const deletions = snapshot.docs.map((doc) => deleteDoc(doc.ref));
    await Promise.all(deletions);
  }
}

describe("Firebase Tests", () => {
  const { db } = initializeTestEnvironment();
  afterEach(async () => {
    await clearFirestoreData(db);
  });
  it("It should save correctly", async () => {
    await saveOnFirestore(`advisor/111`, { name: "Alice", id: "111" });
    const usersCollection = collection(db, "advisor");
    const aliceDocRef = doc(usersCollection, "111");
    const docSnap = await getDoc(aliceDocRef);
    expect(docSnap.exists()).toBe(true);
    expect(docSnap.data()).toEqual({ name: "Alice", id: "111" });
  });
  it("It should read correctly one doc", async () => {
    await saveOnFirestore(`advisor/111`, { name: "Alice", id: "111" });

    const data = await readDocFromFirestore(`advisor/111`);
    expect(data).toEqual({ name: "Alice", id: "111" });
  });

  it("it should read a whole collection", async () => {
    await saveOnFirestore(`advisor/111`, { name: "Alice", id: "111" });
    await saveOnFirestore(`advisor/222`, { name: "Poo", id: "222" });
    const data = await readDocsFromFirestore(`advisor`);
    expect(data.length).equal(2);
  });
});
