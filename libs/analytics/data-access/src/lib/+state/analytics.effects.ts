import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RouterNavigationAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { RouterStateUrl } from '@pentacle/models';
import { ignoreFalsySignals } from 'rxjs-toolkit';
import { tap } from 'rxjs/operators';

declare function gtag(command: 'config' | 'set' | 'event', ...args: any): void;

const trackingId = 'UA-134657536-1';

@Injectable()
export class AnalyticsEffects {
  @Effect({ dispatch: false })
  pageTrackingEffect$ = this.actions$.pipe(
    ofType<RouterNavigationAction<RouterStateUrl>>(ROUTER_NAVIGATION),
    ignoreFalsySignals(),
    tap(signal => {
      gtag('config', trackingId, { page_path: signal.payload.routerState.url });
      gtag('event', 'page_view');
    }),
  );

  constructor(private actions$: Actions) {}
}
