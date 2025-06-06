import { initializeApp } from "firebase/app";
import { getDatabase, ref, get as getFirebase, set } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const save = async (path: string, data: any) => {
  set(ref(db, path), data);
};

export const get = async (path: string) => {
  const snapshot = await getFirebase(ref(db, path));
  return snapshot.val();
};
