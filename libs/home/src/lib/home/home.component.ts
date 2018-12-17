import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pentacle-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  homePage = this.http.get<any>('/api/v1/pages/home'); // this is just temporary, move this into state
  constructor(private http: HttpClient) {}
}
