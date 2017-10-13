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

import { Banner } from './banner';

@Injectable()
export class BannerService {
  private url: string = environment.apiUrl + 'banners';
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getBanners():Observable<Banner[]> {
    return this.http.get(this.url)
        .map(this.extractData)
        .catch(this.handleError);
  }

  getBanner(id) {
    return this.http.get(this.getBannerUrl(id))
        .map(this.extractData)
        .catch(this.handleError);
  }

  addBanner(banner:Banner): Observable<Banner> {
    return this.http.post(this.url, banner, this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  updateBanner(banner:Banner): Observable<Banner> {
    return this.http.put(this.getBannerUrl(banner.id), banner, this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  deleteBanner(id): Observable<Banner> {
    return this.http.delete(this.getBannerUrl(id), this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  private getBannerUrl(id){
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
