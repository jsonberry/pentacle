import { EntityState } from '@ngrx/entity';
import { PageDetailDTO } from '../page';
import { LoadingToggleState } from './loadable-state.model';

export interface PagesState
  extends EntityState<PageDetailDTO>,
    LoadingToggleState {}
