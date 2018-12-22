import { PostDTO } from './post-dto.model';
import { PostAuthor } from './post-author.model';

export interface PostDetailDTO extends PostDTO {
  author: PostAuthor;
  content: string;
}
