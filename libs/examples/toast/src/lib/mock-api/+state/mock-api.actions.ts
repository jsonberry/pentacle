import { Action } from '@ngrx/store';

export enum MockApiTypes {
  RequestSuccess = '[Mock API] Request Success',
  RequestFailure = '[Mock API] Request Failure',
  ResponseSuccess = '[Mock API] Response Success',
  ResponseFailure = '[Mock API] Response Failure',
}

export class RequestSuccess implements Action {
  readonly type = MockApiTypes.RequestSuccess;
}

export class RequestFailure implements Action {
  readonly type = MockApiTypes.RequestFailure;
}

export class ResponseSuccess implements Action {
  readonly type = MockApiTypes.ResponseSuccess;
  constructor(public data: any) {}
}

export class ResponseFailure implements Action {
  readonly type = MockApiTypes.ResponseFailure;
  constructor(public data: any) {}
}

export type MockApiUnion =
  | RequestSuccess
  | RequestFailure
  | ResponseSuccess
  | ResponseFailure;

export const fromMockAPIActions = {
  RequestSuccess,
  RequestFailure,
  ResponseSuccess,
  ResponseFailure,
};
