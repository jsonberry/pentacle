import { Component } from '@angular/core';
import { LayersFacade } from '../+state/layers.facade';

@Component({
  selector: 'pentacle-layers',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.scss'],
})
export class LayersComponent {
  layersPageData$ = this.layersFacade.layerPageData$;
  constructor(private layersFacade: LayersFacade) {}
}
