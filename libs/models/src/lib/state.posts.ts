import { EntityState } from '@ngrx/entity';
import { PostDTO, PostDetailDTO } from './post';

export interface PostsState extends EntityState<PostDTO | PostDetailDTO> {
  loaded: boolean;
}
