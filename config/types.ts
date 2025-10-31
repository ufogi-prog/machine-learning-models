/**
 * Represents the configuration for a machine learning model.
 */
export interface ModelConfig {
  id: string;
  name: string;
  framework: 'tensorflow' | 'pytorch' | 'scikit-learn';
  version: string;
  hyperparameters: Record<string, number | string | boolean>;
  inputShape: number[];
  outputShape: number[];
  description?: string;
}

/**
 * Represents the training data for a machine learning model.
 */
export interface TrainingData {
  features: number[][];
  labels: number[] | number[][];
  batchSize?: number;
  shuffle?: boolean;
  validationSplit?: number;
}

/**
 * Represents the evaluation metrics for a trained model.
 */
export interface EvaluationMetrics {
  accuracy?: number;
  loss?: number;
  precision?: number;
  recall?: number;
  f1Score?: number;
  confusionMatrix?: number[][];
}

/**
 * Represents the result of a model prediction.
 */
export interface PredictionResult {
  input: unknown;
  output: unknown;
  confidence?: number;
  timestamp: Date;
}

/**
 * Represents the status of a model training job.
 */
export type TrainingStatus = 'pending' | 'running' | 'completed' | 'failed';

/**
 * Represents a model training job.
 */
export interface TrainingJob {
  id: string;
  modelId: string;
  status: TrainingStatus;
  startTime: Date;
  endTime?: Date;
  metrics?: EvaluationMetrics;
  error?: string;
}

/**
 * Represents a deployed model instance.
 */
export interface DeployedModel {
  id: string;
  modelId: string;
  endpoint: string;
  status: 'active' | 'inactive' | 'updating';
  lastUpdated: Date;
}