import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '@pentacle/models';
import { layersQuery } from './layers.selectors';

@Injectable({
  providedIn: 'root',
})
export class LayersFacade {
  layerPageData$ = this.store.pipe(select(layersQuery.getCurrentLayerPage));
  constructor(private store: Store<State>) {}
}
