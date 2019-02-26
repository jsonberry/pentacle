import { PostCategory } from './post-category.model';
import { PostImage } from './post-image.model';
import { PostSource } from './post-source.model';
import { PostDate } from './post-date.model';
import { PostFormat } from './post-format.model';
import { PostDifficulty } from './post-difficulty.model';
import { PostCost } from './post-cost.model';

export interface PostDTO {
  id: string;
  image?: PostImage; // TODO should get changed to one particular version, maybe thumbnail
  source?: PostSource; // TODO probably add some ACF for this
  bestOf: boolean;
  categories: PostCategory[];
  cost: PostCost;
  date: PostDate;
  difficulty: PostDifficulty;
  format: PostFormat;
  tags: string[];
  title: string;
}
