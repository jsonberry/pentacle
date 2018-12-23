import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageDetailDTO } from '@pentacle/models';

@Injectable({
  providedIn: 'root',
})
export class PagesDataService {
  constructor(private http: HttpClient) {}

  getPage(id: string) {
    return this.http.get<PageDetailDTO>(`api/v1/pages/${id}`);
  }
}
