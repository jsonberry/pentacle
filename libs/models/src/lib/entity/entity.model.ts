import { EntityDate } from './entity-date.model';
import { EntityType } from './entity-type.model';

export interface Entity {
  acf?: Record<string, any>;
  type?: EntityType;
  content: string;
  _wp_id: number;
  id: string;
  title: string;
  date: EntityDate;
}
