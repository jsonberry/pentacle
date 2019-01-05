import { Dictionary } from '@ngrx/entity';
import { PostDetailDTO, PostDTO } from '@pentacle/models';
import { entitiesExist } from './entity-existence-detector';

export function postsLoaded(
  entities: Dictionary<PostDTO | PostDetailDTO>,
): boolean {
  return entitiesExist<PostDTO | PostDetailDTO>(entities);
}

export function postsNotLoaded(
  entities: Dictionary<PostDTO | PostDetailDTO>,
): boolean {
  return !postsLoaded(entities);
}

export function postContentLoaded(
  post: PostDetailDTO | PostDTO,
): post is PostDetailDTO {
  return post && !!(<PostDetailDTO>post).content;
}

export function postContentNotLoaded(
  post: PostDTO | PostDetailDTO,
): post is PostDTO {
  return !postContentLoaded(post);
}
