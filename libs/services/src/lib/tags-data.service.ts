import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TagDTO } from '@pentacle/models';

@Injectable({
  providedIn: 'root',
})
export class TagsDataService {
  constructor(private http: HttpClient) {}

  getTags() {
    return this.http.get<TagDTO[]>('api/v1/tags');
  }
}
