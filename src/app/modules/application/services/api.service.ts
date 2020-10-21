import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  call(url, requestType, body): any {
    const httpOptions = this.headers();

    let data;


    if (requestType === 'get' || requestType === 'delete') {
      const params = new URLSearchParams(body).toString();
      data = this.http[requestType](environment.api + url + (params ? '/?' + params : ''), httpOptions);
    } else {
      data = this.http[requestType](environment.api + url, body, httpOptions);
    }

    return data.pipe(map((str: any) => {
      return JSON.parse(str);
    }));

  }

  headers(): any {
    let httpOptions = {};
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }), responseType: 'text/plain'
    };
    return httpOptions;
  }
}
