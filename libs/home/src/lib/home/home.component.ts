import { Component } from '@angular/core';
import { HomeFacade } from '../+state/home.facade';

@Component({
  selector: 'pentacle-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  homePageData$ = this.homeFacade.homePageData$;
  constructor(private homeFacade: HomeFacade) {}
}
