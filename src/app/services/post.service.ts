import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable'
import {AppError} from "../common/app-error";
import {NotFoundError} from "../common/not-found-error";
import {BadInputError} from "../common/bad-input-error";

@Injectable()
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
  }

  getPost() {
      return this.http.get(this.url);
    }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
      .catch((error: Response) => {
        if (error.status === 404) {
          return Observable.throw(new NotFoundError);
        }
        return Observable.throw(new AppError(error));
      });
  }

  deletePost(postId) {
    return this.http.delete(this.url + '/' + postId)
      .catch((error: Response) => {
        if (error.status === 404) {
          return Observable.throw(new NotFoundError);
        }
        return Observable.throw(new AppError(error));
      });

  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .catch((error: Response) => {
        if (error.status === 400) {
          return Observable.throw(new BadInputError(error.json()));
        }
        return Observable.throw(new AppError(error));
      });
  }

}
