import { Entity } from '../../common';

export interface Asset extends Entity {
  thumbnail: string;
  medium: string;
  medium_large: string;
  large: string;
  full: string;
  post: number;
}
