import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

export const ignoreFalsySignals = () => <T>(source$: Observable<T>) =>
  source$.pipe(filter<T>(signal => !!signal));
