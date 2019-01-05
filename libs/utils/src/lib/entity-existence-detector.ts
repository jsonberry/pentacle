import { Dictionary } from '@ngrx/entity';

export function entitiesExist<E>(entities: Dictionary<E>): boolean {
  return !!Object.keys(entities).length;
}

export function entitiesDoNotExist<E>(entities: Dictionary<E>) {
  return !entitiesExist(entities);
}

export function entityExists<T, E>(
  id: T[keyof T],
  entities: Dictionary<E>,
): boolean {
  if (typeof id === 'string' || typeof id === 'number') {
    return id in entities;
  }

  return false;
}

export function entityDoesNotExist<T, E>(
  id: T[keyof T],
  entities: Dictionary<E>,
): boolean {
  return !entityExists(id, entities);
}
