import facepaint from 'facepaint';
import { breakpoints } from './breakpoints';

export const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`),
);
