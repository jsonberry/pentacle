export interface EntityState<T> {
  dictionary: Record<string, T>;
  index: Record<string, number>;
  set: T[];
}
