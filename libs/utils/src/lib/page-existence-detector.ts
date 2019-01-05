import { Dictionary } from '@ngrx/entity';
import { PageDetailDTO, PageIds } from '@pentacle/models';
import { entityDoesNotExist } from './entity-existence-detector';

export function pageNotLoaded(
  pageId: PageIds,
  entities: Dictionary<PageDetailDTO>,
): boolean {
  return entityDoesNotExist<PageIds, PageDetailDTO>(pageId, entities);
}

export function pageLoaded(
  pageId: PageIds,
  entities: Dictionary<PageDetailDTO>,
): boolean {
  return !pageNotLoaded(pageId, entities);
}
