import { EntityDate } from './entity-date';

export interface Entity {
  _wp_id: number;
  acf?: Record<string, any>;
  date?: EntityDate;
  id: string;
  status?: string;
  title?: string;
}
