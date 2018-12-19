import { EntityState } from '@ngrx/entity';
import { Entity } from './entity';

export interface Page extends Entity {
  content: string;
}

export type PagesState = EntityState<Page>;
