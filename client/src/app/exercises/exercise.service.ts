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

import { Exercise } from './exercise';

@Injectable()
export class ExerciseService {
  private url: string = environment.apiUrl + 'exercises';
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getExercises():Observable<Exercise[]> {
    return this.http.get(this.url)
        .map(this.extractData)
        .catch(this.handleError);
  }

  getExercise(id) {
    return this.http.get(this.getExerciseUrl(id))
        .map(this.extractData)
        .catch(this.handleError);
  }

  addExercise(exercise:Exercise): Observable<Exercise> {
    return this.http.post(this.url, exercise, this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  updateExercise(exercise:Exercise): Observable<Exercise> {
    return this.http.put(this.getExerciseUrl(exercise.id), exercise, this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  deleteExercise(id): Observable<Exercise> {
    return this.http.delete(this.getExerciseUrl(id), this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  private getExerciseUrl(id){
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
