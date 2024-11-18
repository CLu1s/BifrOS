export type Metric = {
  dataExtracted: number;
  duration: number;
  errorMessage: number;
  executionId: string;
  status: string;
  timestamp: number;
};

export type Execution = {
  executionId: string;
  metrics: Metric;
  result: Record<string, any[]>;
  timestamp: number;
};
