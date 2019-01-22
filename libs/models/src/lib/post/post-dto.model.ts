import { PostCategory } from './post-category.model';
import { PostImage } from './post-image.model';
import { PostSource } from './post-source.model';
import { PostDate } from './post-date.model';
import { PostFormat } from './post-format.model';
import { PostDifficulty } from './post-difficulty.model';

export interface PostDTO {
  id: string;
  title: string;
  categories: PostCategory[];
  format: PostFormat;
  tags: string[];
  difficulty: PostDifficulty;
  date: PostDate;
  image?: PostImage; // TODO should get changed to one particular version, maybe thumbnail
  source?: PostSource; // TODO probably add some ACF for this
}
