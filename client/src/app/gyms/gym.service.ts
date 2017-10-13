import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from "@angular/http";

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Gym } from './gym';

@Injectable()
export class GymService {
  private url: string = environment.apiUrl + 'gyms';
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getGyms():Observable<Gym[]> {
      return this.http.get(this.url)
          .map(this.extractData)
          .catch(this.handleError);
  }

  getGym(id) {
    return this.http.get(this.getGymUrl(id))
        .map(this.extractData)
        .catch(this.handleError);
  }

  addGym(gym:Gym): Observable<Gym> {
    return this.http.post(this.url, gym, this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  updateGym(gym:Gym): Observable<Gym> {
    return this.http.put(this.getGymUrl(gym.id), gym, this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  deleteGym(id): Observable<Gym> {
    return this.http.delete(this.getGymUrl(id), this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  private getGymUrl(id){
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
