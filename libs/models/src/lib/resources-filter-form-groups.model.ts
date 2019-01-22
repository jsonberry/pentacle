import { ResourcesFilterPredicate } from './resources-filter-predicate.model';
import { TagDTO } from './tag';
import { PostDifficulty } from './post';

export interface ResourcesFilterFormGroups {
  availableFormats: Record<string, { id: string; title: string }>;
  availableTopics: Record<string, TagDTO>;
  availableDifficulties: Record<
    PostDifficulty,
    { id: PostDifficulty; title: string; rank: number }
  >;
  groups: ResourcesFilterPredicate;
}
