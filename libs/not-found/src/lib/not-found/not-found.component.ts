import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pentacle-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  constructor(private titleService: Title) {
    titleService.setTitle('Pentacle - Not Found');
  }
}
