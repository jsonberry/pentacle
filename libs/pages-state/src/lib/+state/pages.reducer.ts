import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Entity } from '@pentacle/models';
import { PagesAction, PagesActionTypes } from './pages.actions';

export const PAGES_FEATURE_KEY = 'pages';

export interface Page extends Entity {
  content: string;
}

export type PagesState = EntityState<Page>;

export const adapter: EntityAdapter<Page> = createEntityAdapter<Page>();

export const initialState: PagesState = adapter.getInitialState();

export interface PagesPartialState {
  readonly [PAGES_FEATURE_KEY]: PagesState;
}

export function pagesReducer(
  state: PagesState = initialState,
  action: PagesAction,
): PagesState {
  switch (action.type) {
    case PagesActionTypes.PageLoaded: {
      return adapter.addOne(action.page, state);
    }
  }
  return state;
}
