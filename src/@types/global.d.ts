export {};

declare global {
  type Nullable<T> = T | null;
  type NestedArray<T> = T[][];
}
