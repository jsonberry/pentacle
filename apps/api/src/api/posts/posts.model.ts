import { Entity } from '../../common';

export interface PostImage {
  _wp_id: number;
  thumbnail: string;
  medium: string;
  medium_large: string;
  full: string;
}

export interface Post extends Entity {
  acf?: Record<string, any>;
  content: string;
  author_id: number;
  categories: number[];
  excerpt: string;
  tags: number[];
  featured_media_id: number;
}
