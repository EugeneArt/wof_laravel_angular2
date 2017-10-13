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

import { Timetable } from './timetable';

@Injectable()
export class TimetableService {

  private url: string = environment.apiUrl + 'timetables';
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getTimetables():Observable<Timetable[]> {
    return this.http.get(this.url)
        .map(this.extractData)
        .catch(this.handleError);
  }

  getTimetable(id) {
    return this.http.get(this.getTimetableUrl(id))
        .map(this.extractData)
        .catch(this.handleError);
  }

  addTimetable(timetable:Timetable): Observable<Timetable> {
    return this.http.post(this.url, timetable, this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  updateTimetable(timetable:Timetable): Observable<Timetable> {
    return this.http.put(this.getTimetableUrl(timetable.id), timetable, this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  deleteTimatable(id): Observable<Timetable> {
    return this.http.delete(this.getTimetableUrl(id), this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  private getTimetableUrl(id){
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
