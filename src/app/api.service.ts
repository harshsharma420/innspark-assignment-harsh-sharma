import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getComments(id: number) {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/comments?postId=' + id
    );
  }
}
