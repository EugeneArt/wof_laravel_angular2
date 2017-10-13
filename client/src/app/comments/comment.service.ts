import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Comment } from './comment';

@Injectable()
export class CommentService {

  private url: string = environment.apiUrl + 'comments';
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getComments():Observable<Comment[]> {
    return this.http.get(this.url)
        .map(this.extractData)
        .catch(this.handleError);
  }

  getComment(id) {
    return this.http.get(this.getCommentUrl(id))
        .map(this.extractData)
        .catch(this.handleError);
  }

  addComment(comment:Comment): Observable<Comment> {
    return this.http.post(this.url, comment, this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  updateComment(comment:Comment): Observable<Comment> {
    return this.http.put(this.getCommentUrl(comment.id), comment, this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  deleteComment(id): Observable<Comment> {
    return this.http.delete(this.getCommentUrl(id), this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  private getCommentUrl(id){
    return this.url + "/" + id;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
