import { Observable } from 'rxjs';
import { EntityState } from './entity-state';

export type EntityRequest<T> = Observable<EntityState<T>>;
