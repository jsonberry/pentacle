import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '@pentacle/models';

@Injectable({
  providedIn: 'root',
})
export class PostsDataService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>('api/v1/posts');
  }

  getPost(id: string) {
    return this.http.get<Post>(`api/v1/posts/${id}`);
  }
}
