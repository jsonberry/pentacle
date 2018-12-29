import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { fromToastActions } from './toast.action';
import { switchMap, delay, catchError, switchMapTo } from 'rxjs/operators';
import { of, concat } from 'rxjs';
import {
  MockApiTypes,
  fromMockAPIActions,
} from '../../mock-api/+state/mock-api.actions';
import { MockApiService } from '../../mock-api/mock-api.service';
import { HttpResponse } from '@angular/common/http';
import { ActionDelayTuple } from '@pentacle/models';

@Injectable()
export class ToastEffects {
  /**
   * When a network request is made, let's show a 'Request in progress' toast.
   * In our case, we will listen for two different events.
   */
  @Effect()
  showPendingOnRequest$ = this.actions$.pipe(
    ofType(MockApiTypes.RequestSuccess, MockApiTypes.RequestFailure),
    switchMapTo(
      of(new fromToastActions.PendingToast('Request in progress...')),
    ),
  );

  /**
   * When our mock network request returns a 200, let's show the success toast.
   * We add error handling demonstrate how to catch errors
   */
  @Effect()
  handleSuccessExample$ = this.actions$.pipe(
    ofType(MockApiTypes.RequestSuccess),
    switchMapTo(
      this.mockApi.return200().pipe(
        switchMap((d: HttpResponse<any>) =>
          delayedActionsCollection([
            [new fromToastActions.SuccessToast('Success!'), 2000],
            [new fromToastActions.HideToast(), 5000],
            [new fromMockAPIActions.ResponseSuccess(d), 0],
          ]),
        ),
        catchError(e =>
          delayedActionsCollection([
            [new fromToastActions.FailureToast(e), 2000],
            [new fromToastActions.HideToast(), 5000],
            [new fromMockAPIActions.ResponseFailure(e), 0],
          ]),
        ),
      ),
    ),
  );

  /**
   * When our mock network request returns an error, let's show the failure toast.
   * We add error handling demonstrate how to catch errors.
   * In a real world example, you would not need this effect. This is here
   * for demonstration only.
   */
  @Effect()
  handleFailureExample$ = this.actions$.pipe(
    ofType(MockApiTypes.RequestFailure),
    switchMapTo(
      this.mockApi.return500().pipe(
        switchMap((d: HttpResponse<any>) =>
          delayedActionsCollection([
            [new fromToastActions.SuccessToast('Success!'), 2000],
            [new fromToastActions.HideToast(), 5000],
            [new fromMockAPIActions.ResponseSuccess(d), 0],
          ]),
        ),
        catchError(e =>
          delayedActionsCollection([
            [new fromToastActions.FailureToast(e), 2000],
            [new fromToastActions.HideToast(), 5000],
            [new fromMockAPIActions.ResponseFailure(e), 0],
          ]),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private mockApi: MockApiService) {}
}

export function delayedActionsCollection(actionDelayTuple: ActionDelayTuple[]) {
  const ret = actionDelayTuple.map(([action, delayAmount]) =>
    of(action).pipe(delay(delayAmount)),
  );
  return concat(...ret);
}
