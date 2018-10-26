import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShowPostService {

  constructor(private http: HttpClient) {

  }

  getAllPost() {
    return this.http.get('/api/post/getAllPosts', {});
  }

  deletePost(id) {
    return this.http.post('/api/post/deletePost', { id: id });
  }
}
