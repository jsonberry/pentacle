import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { PageDetailDTO, PagesState } from '@pentacle/models';
import { PagesAction, PagesActionTypes } from './pages.actions';
import { withLoadingToggle } from '@pentacle/utils';
import { PostsActionTypes } from '@pentacle/posts-state';

export const PAGES_FEATURE_KEY = 'pages';

export const adapter: EntityAdapter<PageDetailDTO> = createEntityAdapter<
  PageDetailDTO
>();

export const initialState: PagesState = adapter.getInitialState({
  loading: false,
});

export function basePagesReducer(
  state: PagesState = initialState,
  action: PagesAction,
): PagesState {
  switch (action.type) {
    case PagesActionTypes.PageLoaded:
      return adapter.addOne(action.page, state);

    default:
      return state;
  }
}

export function pagesReducer(state: PagesState, action: PagesAction) {
  return withLoadingToggle<PagesState, PagesAction>(basePagesReducer, [
    PagesActionTypes.LoadPage,
    PagesActionTypes.PageLoaded,
    PagesActionTypes.PageLoadError,
  ])(state, action);
}
