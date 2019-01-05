import { EntityState } from '@ngrx/entity';
import { PostDetailDTO, PostDTO } from '../post';
import { LoadingToggleState } from './loadable-state.model';

export interface PostsState
  extends EntityState<PostDTO | PostDetailDTO>,
    LoadingToggleState {}
