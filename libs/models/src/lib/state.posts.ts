import { EntityState } from '@ngrx/entity';
import { Post } from './post';

export interface PostsState extends EntityState<Post> {
  loaded: boolean;
}
