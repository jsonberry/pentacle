import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { map, catchError, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  constructor() {}

  public return200() {
    return of({ body: 'some data', status: 200 }).pipe(
      map(data => data),
      catchError(e => of(e)),
    );
  }

  public return500() {
    return throwError('Oops! Something unexpected occured');
  }
}
