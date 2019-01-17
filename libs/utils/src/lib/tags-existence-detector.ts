import { Dictionary } from '@ngrx/entity';
import { TagDTO } from '@pentacle/models';
import { entitiesExist } from './entity-existence-detector';

export function tagsLoaded(entities: Dictionary<TagDTO>): boolean {
  return entitiesExist<TagDTO>(entities);
}

export function tagsNotLoaded(entities: Dictionary<TagDTO>): boolean {
  return !tagsLoaded(entities);
}
