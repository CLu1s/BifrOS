export type Activity = {
  id: string;
  type: string;
  description: string;
  timestamp: string;
  metadata?: Record<string, string | number>;
};
