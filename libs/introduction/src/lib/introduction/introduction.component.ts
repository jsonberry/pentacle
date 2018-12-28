import { Component } from '@angular/core';
import { PagesFacade } from '@pentacle/pages-state';
import { shareReplay, pluck, filter } from 'rxjs/operators';

@Component({
  selector: 'pentacle-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent {
  introductionPageData$ = this.pagesFacade.page$('introduction').pipe(
    filter(data => !!data),
    shareReplay(),
  );
  title$ = this.introductionPageData$.pipe(pluck('title'));
  content$ = this.introductionPageData$.pipe(pluck('content'));

  constructor(private pagesFacade: PagesFacade) {}
}
