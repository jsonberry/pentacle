import { PagesState } from './state.pages';
import { RouterState } from './state.router';
import { PostsState } from './state.posts';

export interface State {
  router: RouterState;
  pages: PagesState;
  posts: PostsState;
}
