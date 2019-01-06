import { get } from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const propsAreTruthy = (...args: string[]) => <T>(
  source$: Observable<T>,
) =>
  source$.pipe(
    map(signal => {
      for (const arg of args) {
        if (!!!get(signal, arg)) {
          return false;
        }
      }

      return signal;
    }),
  );
