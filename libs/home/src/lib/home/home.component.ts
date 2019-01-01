import { Component } from '@angular/core';
import { PagesFacade } from '@pentacle/pages-state';
import { filter, pluck, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'pentacle-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  homePageData$ = this.pagesFacade.getPage$('home').pipe(
    filter(data => !!data),
    shareReplay(),
  );
  content$ = this.homePageData$.pipe(pluck('content'));

  constructor(private pagesFacade: PagesFacade) {}
}
