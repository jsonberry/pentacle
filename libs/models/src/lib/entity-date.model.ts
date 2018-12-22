export type EntityDateCreated = string;
export type EntityDateModified = string;

/**
 * Both created and modified are ISO strings
 *
 * @export
 * @interface EntityDate
 */
export interface EntityDate {
  created: EntityDateCreated;
  modified: EntityDateModified;
}
