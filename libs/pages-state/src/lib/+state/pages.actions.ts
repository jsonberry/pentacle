import { Action } from '@ngrx/store';
import { PageDetailDTO, PageIds } from '@pentacle/models';

export enum PagesActionTypes {
  LoadPage = '[Pages] Load Page',
  PageLoaded = '[Pages] Page Loaded',
  PageLoadError = '[Pages] Page Load Error',
}

export class LoadPage implements Action {
  readonly type = PagesActionTypes.LoadPage;
  constructor(public pageId: PageIds) {}
}

export class PageLoadError implements Action {
  readonly type = PagesActionTypes.PageLoadError;
  constructor(public error: any) {}
}

export class PageLoaded implements Action {
  readonly type = PagesActionTypes.PageLoaded;
  constructor(public page: PageDetailDTO) {}
}

export type PagesAction = LoadPage | PageLoaded | PageLoadError;

export const fromPagesActions = {
  LoadPage,
  PageLoaded,
  PageLoadError,
};
