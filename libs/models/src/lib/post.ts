import { Entity } from './entity';

export type PostCategory = 'read' | 'watch' | 'resources' | 'listen';

export interface Post extends Entity {
  acf?: Record<string, any>;
  content: string;
  author_id: number;
  categories: PostCategory[];
  excerpt: string;
  tags: string[];
  featured_media_id: number;
}
