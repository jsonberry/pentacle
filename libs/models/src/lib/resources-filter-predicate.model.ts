import { PostFormat } from './post';

export interface ResourcesFilterPredicate {
  formats: Record<PostFormat, boolean | null> | null;
  topics: Record<string, boolean | null> | null;
}
