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

import { Trainer } from './trainer';

@Injectable()
export class TrainerService {
  private url: string = environment.apiUrl + 'trainers';
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getTrainers():Observable<Trainer[]> {
    return this.http.get(this.url)
        .map(this.extractData)
        .catch(this.handleError);
  }

  getTrainer(id) {
    return this.http.get(this.getTrainerUrl(id))
        .map(this.extractData)
        .catch(this.handleError);
  }

  addTrainer(trainer:Trainer): Observable<Trainer> {
    return this.http.post(this.url, trainer, this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  updateTrainer(trainer:Trainer): Observable<Trainer> {
    return this.http.put(this.getTrainerUrl(trainer.id), trainer, this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  deleteTrainer(id): Observable<Trainer> {
    return this.http.delete(this.getTrainerUrl(id), this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  private getTrainerUrl(id){
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
