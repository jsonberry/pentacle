import { PagesState } from './pages-state.model';
import { RouterState } from './router-state.model';
import { PostsState } from './posts-state.model';

export interface State {
  router: RouterState;
  pages: PagesState;
  posts: PostsState;
}
