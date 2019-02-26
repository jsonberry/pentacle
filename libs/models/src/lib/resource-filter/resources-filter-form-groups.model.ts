import { ResourcesFilterPredicate } from './resources-filter-predicate.model';
import { TagDTO } from '../tag';
import { PostDifficulty, PostCost } from '../post';
import { UnionPick } from '../types';

export interface ResourcesFilterFormGroups {
  availableBestOf: { bestOf: { id: string; title: string } };
  availableCosts: {
    free: { id: UnionPick<PostCost, 'free'>; title: string };
    paid: { id: UnionPick<PostCost, 'paid'>; title: string };
  };
  availableDifficulties: Record<
    PostDifficulty,
    { id: PostDifficulty; title: string; rank: number }
  >;
  availableFormats: Record<string, { id: string; title: string }>;
  availableTopics: Record<string, TagDTO>;
  groups: ResourcesFilterPredicate;
}
