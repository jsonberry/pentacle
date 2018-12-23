import { Entity } from '../entity/entity.model';
import { PostFormat } from './post-format.model';

export interface Post extends Entity {
  excerpt?: string;
  format: PostFormat;
  featured_media_id?: number;
  tags: number[];
  author_id: number;
  categories: number[];
}
