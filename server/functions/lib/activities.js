import { getFirestore } from "firebase-admin/firestore";
const db = getFirestore();

export const logActivityInDB = async ({
  type,
  description,
  timestamp,
  metadata,
}) => {
  if (!type || !description || !timestamp) {
    throw new Error("Missing required fields");
  }
  const id = `${type}_${timestamp}`;
  const data = {
    id,
    type,
    description,
    timestamp,
    metadata,
  };
  try {
    const ref = db.collection("activities").doc(id);
    await ref.set(data);
  } catch (e) {
    console.log(e);
    return null;
  }
};
