import { EntityState } from '@ngrx/entity';
import { PageDetailDTO } from '../page';

export interface PagesState extends EntityState<PageDetailDTO> {
  loading: boolean;
}
