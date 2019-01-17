import { Action } from '@ngrx/store';
import { TagDTO } from '@pentacle/models';

export enum TagsActionTypes {
  ResourcesPageLoadTags = '[Resources Page] Load Tags',
  TagsLoaded = '[Tags API] Tags Loaded',
  TagsLoadError = '[Tags API] Tags Load Error',
}

export class ResourcePageLoadTags implements Action {
  readonly type = TagsActionTypes.ResourcesPageLoadTags;
}

export class TagsLoaded implements Action {
  readonly type = TagsActionTypes.TagsLoaded;
  constructor(public tags: TagDTO[]) {}
}

export class TagsLoadError implements Action {
  readonly type = TagsActionTypes.TagsLoadError;
  constructor(public error: any) {}
}

export type TagsAction = ResourcePageLoadTags | TagsLoaded | TagsLoadError;

export const fromTagsActions = {
  ResourcePageLoadTags,
  TagsLoaded,
  TagsLoadError,
};
