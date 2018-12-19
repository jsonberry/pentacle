import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from '@pentacle/models';

@Injectable({
  providedIn: 'root',
})
export class PagesDataService {
  constructor(private http: HttpClient) {}

  getPage(id: string) {
    return this.http.get<Page>(`api/v1/pages/${id}`);
  }
}
