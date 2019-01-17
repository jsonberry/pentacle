import { EntityState } from '@ngrx/entity';
import { TagDTO } from '../tag';
import { LoadingToggleState } from './loadable-state.model';

export interface TagsState extends EntityState<TagDTO>, LoadingToggleState {}
