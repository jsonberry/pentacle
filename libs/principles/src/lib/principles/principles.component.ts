import { Component } from '@angular/core';
import { PagesFacade } from '@pentacle/pages-state';
import { filter, pluck, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'pentacle-principles',
  templateUrl: './principles.component.html',
  styleUrls: ['./principles.component.scss'],
})
export class PrinciplesComponent {
  principlesPageData$ = this.pagesFacade.pageByRouteParamId$.pipe(
    filter(data => !!data),
    shareReplay(),
  );
  title$ = this.principlesPageData$.pipe(pluck('title'));
  content$ = this.principlesPageData$.pipe(pluck('content'));

  constructor(private pagesFacade: PagesFacade) {}
}
