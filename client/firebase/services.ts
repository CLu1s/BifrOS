import {
  collection,
  doc,
  DocumentData,
  FieldValue,
  getDoc,
  getDocs,
  getFirestore,
  increment,
  onSnapshot,
  Query,
  QuerySnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import {
  convertAllTurnDates,
  convertAllTurnsToTimestamp,
  returnCurrenDate,
} from "@/lib";
import { Turn } from "@/features/turns/types";
import advisor from "@/features/advisors/pages/Advisor";

export const incrementCounter = async (
  path: string,
  newCounts: Record<string, FieldValue>,
) => {
  const db = getFirestore();
  const counterRef = doc(db, path);
  try {
    await updateDoc(counterRef, newCounts);
  } catch (e) {
    console.log("incrementCounter error", e);
    await setDoc(counterRef, newCounts, { merge: true });
  }
  const counter = await getDoc(counterRef);
  if (counter.exists()) return counter.data();
  return false;
};

export const saveOnFirestore = async (path: string, data: any) => {
  const db = getFirestore();
  return setDoc(doc(db, path), data);
};

export const updateFirestore = async (path: string, data: any) => {
  const db = getFirestore();
  return updateDoc(doc(db, path), data);
};

export const readDocFromFirestore = async (path: string) => {
  const db = getFirestore();
  const docSnap = await getDoc(doc(db, path));
  return docSnap.data();
};

export const readDocsFromFirestore = async (path: string) => {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, path));
  return querySnapshot.docs.map((doc) => doc.data());
};

export const listenToFirestore = (
  query: Query<DocumentData, DocumentData>,
  callback: (querySnapshot: QuerySnapshot<DocumentData, DocumentData>) => void,
) => {
  return onSnapshot(query, callback);
};

export const updateTurnData = async (turn: Turn) => {
  try {
    await updateFirestore(`turns/${turn.id}`, convertAllTurnsToTimestamp(turn));
    const turnData = (await readDocFromFirestore(`turns/${turn.id}`)) as Turn;
    return convertAllTurnDates(turnData);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

type ExtraData = {
  totalServiceTime?: number;
};

export const handleMetricCounter = async (
  type: "addTurn" | "cancelTurn" | "attendedTurn",
  advisorID?: string,
  extraData?: ExtraData,
) => {
  const generalMetricsPath = `metrics/${returnCurrenDate()}`;
  const advisorMetricsPath = `metrics/${returnCurrenDate()}/advisors/${advisorID}`;
  try {
    switch (type) {
      case "addTurn":
        return await incrementCounter(generalMetricsPath, {
          totalTurns: increment(1),
          totalPending: increment(1),
        });
      case "cancelTurn":
        return await incrementCounter(generalMetricsPath, {
          totalCanceled: increment(1),
          totalPending: increment(-1),
        });
      case "attendedTurn":
        if (!advisorID || !extraData)
          throw new Error("No advisorID provided or extraData");
        const data = await incrementCounter(generalMetricsPath, {
          totalTurnAttended: increment(1),
          totalPending: increment(-1),
        });
        console.log("advisorMetricsPath", advisorMetricsPath);

        return await incrementCounter(advisorMetricsPath, {
          turnsAttended: increment(1),
          totalServiceTime: increment(extraData.totalServiceTime ?? 0),
        });
    }
  } catch (error) {
    console.log("handleMetricCounter", error);
  }
};

export const handleAdviceMetricCounter = async (type: string) => {};
