import { PostFormat, PostDifficulty } from './post';

export interface ResourcesFilterPredicate {
  formats: Record<PostFormat, [boolean] | null> | null;
  topics: Record<string, [boolean] | null> | null;
  difficulties: Record<PostDifficulty, [boolean] | null> | null;
}
