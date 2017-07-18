import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; //IMPORTING STATIC METHODS OF OBSERVABLE FOROBSERVABLE OPERATOR!
import {Observable} from 'rxjs/Observable'
import {AppError} from "../common/app-error";
import {NotFoundError} from "../common/not-found-error";
import {BadInputError} from "../common/bad-input-error";

@Injectable()
export class DataService {

  constructor(private url: string, private http: Http) {
  }

  getAll() {
    return this.http.get(this.url)
      .catch(this.handleError);
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
      .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .catch(this.handleError);

  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      .catch(this.handleError);
  }


  private handleError(error: Response) {
    if (error.status === 404) {
      return Observable.throw(new NotFoundError);
    }
    if (error.status === 400) {
      return Observable.throw(new BadInputError(error.json()));
    }
    return Observable.throw(new AppError(error));
  }

}
