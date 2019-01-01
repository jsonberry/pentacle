import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { PageDetailDTO, PagesState } from '@pentacle/models';
import { PagesAction, PagesActionTypes } from './pages.actions';

export const PAGES_FEATURE_KEY = 'pages';
export const adapter: EntityAdapter<PageDetailDTO> = createEntityAdapter<
  PageDetailDTO
>();
export const initialState: PagesState = adapter.getInitialState({
  loading: false,
});

export function pagesReducer(
  state: PagesState = initialState,
  action: PagesAction,
): PagesState {
  switch (action.type) {
    case PagesActionTypes.ShowLoadingProgress:
      return {
        ...state,
        loading: true,
      };

    case PagesActionTypes.PageLoaded:
      return {
        ...adapter.addOne(action.page, state),
        loading: false,
      };

    case PagesActionTypes.PageLoadError:
      return {
        ...state,
        loading: false,
      };
  }
  return state;
}
