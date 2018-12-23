import { Entity } from '../entity/entity.model';

export interface Post extends Entity {
  excerpt?: string;
  featured_media_id?: number;
  tags?: number[];
  author_id: number;
  categories: number[];
}
