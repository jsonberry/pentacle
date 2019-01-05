import { EntityState } from '@ngrx/entity';
import { TagDTO } from '../tag';

export interface TagsState extends EntityState<TagDTO> {
  loading: boolean;
}
