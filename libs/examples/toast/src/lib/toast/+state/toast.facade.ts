import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '@pentacle/models';
import { toastQuery } from './toast.selectors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastFacade {
  isActive$: Observable<boolean> = this.store.pipe(
    select(toastQuery.getIsActive),
  );
  status$: Observable<string> = this.store.pipe(select(toastQuery.getStatus));
  constructor(private store: Store<State>) {}
}
