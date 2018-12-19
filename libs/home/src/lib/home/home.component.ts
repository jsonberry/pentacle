import { Component } from '@angular/core';
import { PagesFacade } from '@pentacle/pages-state';

@Component({
  selector: 'pentacle-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  homePageData$ = this.pagesFacade.page$('home');
  constructor(private pagesFacade: PagesFacade) {}
}
