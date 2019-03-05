import { Entity } from '../entity/entity.model';
import { PostCost } from './post-cost.model';
import { PostDifficulty } from './post-difficulty.model';
import { PostFormat } from './post-format.model';
import { PostSource } from './post-source.model';

export interface Post extends Entity {
  source?: PostSource;
  author_id: number;
  bestOf: boolean;
  categories: number[];
  cost: PostCost;
  difficulty: PostDifficulty;
  excerpt: string;
  featured_media_id?: number;
  format: PostFormat;
  tags: number[];
}
