import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pentacle-examples-list',
  templateUrl: './examples-list.component.html',
  styleUrls: ['./examples-list.component.scss'],
})
export class ExamplesListComponent {
  constructor(private titleService: Title) {
    titleService.setTitle('Pentacle - Examples');
  }
}
