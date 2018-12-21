import { Component } from '@angular/core';
import { ResourcesFacade } from '../+state/resources.facade';

@Component({
  selector: 'pentacle-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent {
  resources$ = this.resourcesFacade.resourcesByRoute$;
  constructor(private resourcesFacade: ResourcesFacade) {}
}
