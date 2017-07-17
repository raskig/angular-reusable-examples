import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
  }

  getPost() {
      return this.http.get(this.url);
    }

  updatePost(postId) {
    return this.http.patch(this.url + '/' + postId, JSON.stringify({isRead: true}));
  }

  deletePost(postId) {
    return this.http.delete(this.url + '/' + postId)
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
  }

}
