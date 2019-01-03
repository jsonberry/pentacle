import { Entity } from '../entity/entity.model';
import { PostFormat } from './post-format.model';
import { PostSource } from './post-source.model';

export interface Post extends Entity {
  excerpt?: string;
  source?: PostSource;
  format: PostFormat;
  featured_media_id?: number;
  tags: number[];
  author_id: number;
  categories: number[];
}
