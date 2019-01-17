import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '@pentacle/models';
import { tagsQuery } from './tags.selectors';

@Injectable({
  providedIn: 'root',
})
export class TagsFacade {
  tagsArray$ = this.store.pipe(select(tagsQuery.getTagsArray));
  tagsDictionary$ = this.store.pipe(select(tagsQuery.getTagsDictionary));
  tagsLoaded$ = this.store.pipe(select(tagsQuery.getTagsLoaded));

  constructor(private store: Store<State>) {}
}
