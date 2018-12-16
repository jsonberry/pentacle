import { Entity } from '../../common';

export interface User extends Entity {
  name: string;
  description: string;
}
