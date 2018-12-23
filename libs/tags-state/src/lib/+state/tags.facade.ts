import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '@pentacle/models';
import { TagsDataService } from '@pentacle/services';
import { filter, map, switchMapTo } from 'rxjs/operators';
import { fromTagsActions } from './tags.actions';
import { tagsQuery } from './tags.selectors';

@Injectable({
  providedIn: 'root',
})
export class TagsFacade {
  tagsArray$ = this.store.pipe(select(tagsQuery.getTagsArray));
  tagsDictionary$ = this.store.pipe(select(tagsQuery.getTagsDictionary));
  tagsLoaded$ = this.store.pipe(select(tagsQuery.getTagsLoaded));

  constructor(
    private store: Store<State>,
    private tagsDataService: TagsDataService,
  ) {}

  fetchTags$() {
    return this.tagsLoaded$.pipe(
      filter(loaded => !loaded),
      switchMapTo(
        this.tagsDataService
          .getPosts()
          .pipe(map(tags => new fromTagsActions.TagsLoaded(tags))),
      ),
    );
  }
}
