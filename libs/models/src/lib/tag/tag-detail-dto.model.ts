import { TagDTO } from './tag-dto.model';

export interface TagDetailDTO extends TagDTO {
  count: number;
  description: string;
  posts: string[];
}
