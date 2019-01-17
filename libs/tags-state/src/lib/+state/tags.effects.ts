import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TagsDataService } from '@pentacle/services';
import { of } from 'rxjs';
import { catchError, map, switchMapTo } from 'rxjs/operators';
import {
  fromTagsActions,
  ResourcePageLoadTags,
  TagsActionTypes,
} from './tags.actions';

@Injectable()
export class TagsEffects {
  @Effect()
  resourcePageLoadTags$ = this.actions$.pipe(
    ofType<ResourcePageLoadTags>(TagsActionTypes.ResourcesPageLoadTags),
    switchMapTo(
      this.tagsDataService.getTags().pipe(
        map(tags => new fromTagsActions.TagsLoaded(tags)),
        catchError(error => of(new fromTagsActions.TagsLoadError(error))),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private tagsDataService: TagsDataService,
  ) {}
}
