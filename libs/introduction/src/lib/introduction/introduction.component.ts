import { Component } from '@angular/core';
import { PagesFacade } from '@pentacle/pages-state';

@Component({
  selector: 'pentacle-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent {
  introductionPageData$ = this.pagesFacade.page$('introduction');
  constructor(private pagesFacade: PagesFacade) {}
}
