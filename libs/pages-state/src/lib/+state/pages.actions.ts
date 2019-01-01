import { Action } from '@ngrx/store';
import { PageDetailDTO } from '@pentacle/models';

export enum PagesActionTypes {
  LoadPage = '[Pages] Load Page',
  ShowLoadingProgress = '[Pages] Show Loading Progress',
  PageLoaded = '[Pages] Page Loaded',
  PageLoadError = '[Pages] Page Load Error',
}

export class LoadPage implements Action {
  readonly type = PagesActionTypes.LoadPage;
  constructor(public pageId: string) {}
}

export class PageLoadError implements Action {
  readonly type = PagesActionTypes.PageLoadError;
  constructor(public error: any) {}
}

export class PageLoaded implements Action {
  readonly type = PagesActionTypes.PageLoaded;
  constructor(public page: PageDetailDTO) {}
}

export class ShowLoadingProgress implements Action {
  readonly type = PagesActionTypes.ShowLoadingProgress;
}

export type PagesAction =
  | LoadPage
  | PageLoaded
  | PageLoadError
  | ShowLoadingProgress;

export const fromPagesActions = {
  LoadPage,
  PageLoaded,
  PageLoadError,
  ShowLoadingProgress,
};
