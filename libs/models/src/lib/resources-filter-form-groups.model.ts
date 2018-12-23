import { ResourcesFilterPredicate } from './resources-filter-predicate.model';
import { TagDTO } from './tag';

export interface ResourcesFilterFormGroups {
  availableFormats: Record<string, { id: string; title: string }>;
  availableTopics: Record<string, TagDTO>;
  groups: ResourcesFilterPredicate;
}
