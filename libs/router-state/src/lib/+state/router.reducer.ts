import { RouterReducerState } from '@ngrx/router-store';
import { Params, ActivatedRouteSnapshot } from '@angular/router';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
  root: ActivatedRouteSnapshot;
}

export type RouterState = RouterReducerState<RouterStateUrl>;
