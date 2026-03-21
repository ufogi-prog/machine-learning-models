// types.ts

// Define the type for the model's input data
interface InputData {
  features: number[];
  target: number;
}

// Define the type for the model's output data
interface OutputData {
  predictions: number[];
  metrics: {
    accuracy: number;
    precision: number;
    recall: number;
    f1Score: number;
  };
}

// Define the type for the model's configuration
interface ModelConfig {
  learningRate: number;
  epochs: number;
  batchSize: number;
}

// Define the type for the model's state
interface ModelState {
  weights: number[];
  biases: number[];
  optimizer: {
    learningRate: number;
    momentum: number;
  };
}

// Define the type for the model's output
interface ModelOutput {
  predictions: number[];
  metrics: {
    accuracy: number;
    precision: number;
    recall: number;
    f1Score: number;
  };
}

// Define the type for the model
interface Model {
  train(data: InputData[]): void;
  predict(data: InputData[]): ModelOutput;
  save(): void;
  load(): void;
}

// Define the type for the dataset
interface Dataset {
  train: InputData[];
  test: InputData[];
}

// Define the type for the data loader
interface DataLoader {
  loadDataset(): Dataset;
  loadBatch(): InputData[];
}