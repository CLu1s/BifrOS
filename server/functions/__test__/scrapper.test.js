import { describe, it, expect } from "vitest";
import { getCompletedTasks } from "../lib/metrics";
import * as admin from "firebase-admin";

admin.initializeApp({
  projectId: "demo-test",
  credential: admin.credential.applicationDefault(),
});

describe("Firestore Tests", () => {
  it("I should get  the counter of completed task", async () => {
    const count = await getCompletedTasks();
    expect(count).greaterThanOrEqual(0);
  }, 10000);

  it.todo("should increment in one if the task is complete", async () => {
    const count = registerSuccesfulTask();
    expect(count).toBe(1);
  });
});
