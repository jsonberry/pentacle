import { PagesState } from './state.pages';
import { RouterState } from './state.router';

export interface State {
  router: RouterState;
  pages: PagesState;
}
