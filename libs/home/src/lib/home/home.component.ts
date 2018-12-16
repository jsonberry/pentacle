import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pentacle-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  homePage = this.http.get<any>('/api/v1/pages/home');
  constructor(private http: HttpClient) {}
}
