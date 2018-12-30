import { Component } from '@angular/core';
import { PagesFacade } from '@pentacle/pages-state';
import { filter, pluck, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'pentacle-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
})
export class ModulesComponent {
  modulesPageData$ = this.pagesFacade.pageByRouteParamId$.pipe(
    filter(data => !!data),
    shareReplay(),
  );
  title$ = this.modulesPageData$.pipe(pluck('title'));
  content$ = this.modulesPageData$.pipe(pluck('content'));

  constructor(private pagesFacade: PagesFacade) {}
}
