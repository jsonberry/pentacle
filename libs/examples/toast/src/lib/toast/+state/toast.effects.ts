import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';

@Injectable()
export class ToastEffects {
  @Effect({ dispatch: false })
  someCoolEffect$;
}
