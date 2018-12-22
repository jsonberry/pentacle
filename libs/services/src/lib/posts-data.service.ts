import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostDetailDTO, PostDTO } from '@pentacle/models';

@Injectable({
  providedIn: 'root',
})
export class PostsDataService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<PostDTO[]>('api/v1/posts');
  }

  getPost(id: string) {
    return this.http.get<PostDetailDTO>(`api/v1/posts/${id}`);
  }
}
