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

import { Level } from './level';

@Injectable()
export class LevelService {

  private url: string = environment.apiUrl + 'levels';
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getLevels():Observable<Level[]> {
    return this.http.get(this.url)
        .map(this.extractData)
        .catch(this.handleError);
  }

  getLevel(id) {
    return this.http.get(this.getLevelUrl(id))
        .map(this.extractData)
        .catch(this.handleError);
  }

  addLevel(level:Level): Observable<Level> {
    return this.http.post(this.url, level, this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  updateLevel(level:Level): Observable<Level> {
    return this.http.put(this.getLevelUrl(level.id), level, this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  deleteLevel(id): Observable<Level> {
    return this.http.delete(this.getLevelUrl(id), this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  private getLevelUrl(id){
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
