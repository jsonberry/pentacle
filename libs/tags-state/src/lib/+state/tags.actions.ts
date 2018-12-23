import { Action } from '@ngrx/store';
import { TagDTO } from '@pentacle/models';

export enum TagsActionTypes {
  LoadTags = '[Tags] Load Tags',
  TagsLoaded = '[Tags] Tags Loaded',
  TagsLoadError = '[Tags] Tags Load Error',
}

export class LoadTags implements Action {
  readonly type = TagsActionTypes.LoadTags;
}

export class TagsLoaded implements Action {
  readonly type = TagsActionTypes.TagsLoaded;
  constructor(public tags: TagDTO[]) {}
}

export class TagsLoadError implements Action {
  readonly type = TagsActionTypes.TagsLoadError;
  constructor(public error: any) {}
}

export type TagsAction = LoadTags | TagsLoaded | TagsLoadError;

export const fromTagsActions = {
  LoadTags,
  TagsLoaded,
  TagsLoadError,
};
