import { PostFormat, PostDifficulty } from '../post';
import { TopicsOperator } from './topics-operator';

export interface ResourcesFilterPredicate {
  bestOf: { bestOf: [boolean] };
  costs: { free: [boolean]; paid: [boolean] };
  difficulties: Record<PostDifficulty, [boolean] | null> | null;
  formats: Record<PostFormat, [boolean] | null> | null;
  topics: Record<string, [boolean] | null> | null;
  topicsOperator: TopicsOperator;
}
