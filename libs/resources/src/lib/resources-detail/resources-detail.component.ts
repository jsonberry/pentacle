import { Component } from '@angular/core';
import { ResourcesFacade } from '../+state/resources.facade';

@Component({
  selector: 'pentacle-resources-detail',
  templateUrl: './resources-detail.component.html',
  styleUrls: ['./resources-detail.component.scss'],
})
export class ResourcesDetailComponent {
  content$ = this.resourcesFacade.contentByRoute$;
  title$ = this.resourcesFacade.titleByRoute$;
  constructor(private resourcesFacade: ResourcesFacade) {}
}
