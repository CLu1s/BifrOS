import { getFirestore } from "firebase-admin/firestore";
const db = getFirestore();

async function getCompletedTasks() {
  const taskRef = db.collection("scrapper").doc("metrics").collection("tasks");
  const queryRef = taskRef.where("completed", "==", true);
  const doc = await queryRef.get();
  if (doc.empty) {
    return null;
  }
  return doc.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

async function registerSuccessfulTask(data) {
  if (!data) {
    throw new Error("No data provided");
  }
  try {
    const taskRef = db.collection("scraper").doc("metrics").collection("tasks");
    const result = await taskRef.add(data);
    return result.id;
  } catch (e) {
    console.log(e);
  }
}

export { getCompletedTasks, registerSuccessfulTask };
