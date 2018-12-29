import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State, ToastStatus } from '@pentacle/models';
import { toastQuery } from './toast.selectors';
import { Observable } from 'rxjs';

import {
  RequestSuccess,
  RequestFailure,
} from '../../mock-api/+state/mock-api.actions';

@Injectable({
  providedIn: 'root',
})
export class ToastFacade {
  isActive$: Observable<boolean> = this.store.pipe(
    select(toastQuery.getIsActive),
  );
  status$: Observable<ToastStatus> = this.store.pipe(
    select(toastQuery.getStatus),
  );
  message$: Observable<string> = this.store.pipe(select(toastQuery.getMessage));

  constructor(private store: Store<State>) {}

  public dispatchSuccess(): void {
    this.store.dispatch(new RequestSuccess());
  }

  public dispatchFail(): void {
    this.store.dispatch(new RequestFailure());
  }
}
