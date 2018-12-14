import { map } from 'rxjs/operators';
import { neverNullable } from 'rxjs-toolkit';

export const bodyResTransducer = stream$ => stream$.pipe(neverNullable, map(body => ({ body })));
