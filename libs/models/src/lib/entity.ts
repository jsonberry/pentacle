import { EntityDate } from './entity-date.model';

export interface Entity {
  acf?: Record<string, any>;
  _wp_id: number;
  id: string;
  title: string;
  date: EntityDate;
  content: string;
}
