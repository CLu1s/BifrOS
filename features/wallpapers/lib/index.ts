import { QueueElement } from "@/features/wallpapers/types";
export * from "../../../lib/fetchers";

export const orderQueue = (a: QueueElement, b: QueueElement) =>
  b.priority - a.priority;
