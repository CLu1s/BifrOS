import { readDocFromFirestore, saveOnFirestore } from "@/firebase/services";
import { Advisor, Status } from "@/features/advisors/types";
import { serverTimestamp } from "@firebase/firestore";
import { UserResource } from "@clerk/types";

export const retrieveAdvisorFromDB = async (
  userId: string,
  user?: UserResource | null | undefined,
): Promise<Advisor> => {
  let data = (await readDocFromFirestore(`advisor/${userId}`)) as Advisor;
  if (!data) {
    const userData: Advisor = {
      id: userId,
      name: user?.firstName || "no name",
      role: "advisor",
      status: Status.ACTIVE,
      currentTurn: null,
      turnsAttended: 0,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };
    await saveOnFirestore(`advisor/${userId}`, userData);
    data = (await readDocFromFirestore(`advisor/${userId}`)) as Advisor;
  }
  return data;
};
