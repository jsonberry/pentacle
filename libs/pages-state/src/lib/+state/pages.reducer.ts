import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Page, PagesState } from '@pentacle/models';
import { PagesAction, PagesActionTypes } from './pages.actions';

export const PAGES_FEATURE_KEY = 'pages';
export const adapter: EntityAdapter<Page> = createEntityAdapter<Page>();
export const initialState: PagesState = adapter.getInitialState();

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
