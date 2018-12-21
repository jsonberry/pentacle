import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { map, filter } from 'rxjs/operators';
import { ResourcesFacade } from '../+state/resources.facade';

@Component({
  selector: 'pentacle-resources-detail',
  templateUrl: './resources-detail.component.html',
  styleUrls: ['./resources-detail.component.scss'],
})
export class ResourcesDetailComponent {
  content$ = this.resourcesFacade.resourceByRoute$.pipe(
    filter(post => !!post && !!post.content),
    map(post => this.sanitizer.bypassSecurityTrustHtml(post.content)),
  );

  constructor(
    private resourcesFacade: ResourcesFacade,
    private sanitizer: DomSanitizer,
  ) {}
}
