import { RouterReducerState } from '@ngrx/router-store';
import { Params } from '@angular/router';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export type RouterState = RouterReducerState<RouterStateUrl>;
