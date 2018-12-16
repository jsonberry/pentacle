import { BehaviorSubject } from 'rxjs';
import { EntityState } from './entity-state';

export type EntityCache<T> = BehaviorSubject<EntityState<T> | null>;
