import { Component } from '@angular/core';
import { LayersFacade } from '../+state/layers.facade';
import { shareReplay, pluck, filter } from 'rxjs/operators';

@Component({
  selector: 'pentacle-layers',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.scss'],
})
export class LayersComponent {
  layersPageData$ = this.layersFacade.layerPageData$.pipe(
    filter(data => !!data),
    shareReplay(),
  );
  title$ = this.layersPageData$.pipe(pluck('title'));
  content$ = this.layersPageData$.pipe(pluck('content'));

  constructor(private layersFacade: LayersFacade) {}
}
