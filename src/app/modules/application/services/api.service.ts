import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {catchError} from 'rxjs/operators';
import {ToastService} from './toast.service';
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private toastService: ToastService
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

    return data.pipe(
      catchError(err => {
        return this.handleError(err);
      })
    );
  }

  handleError(error): any {
    console.log(error.status);

    if (error.status === 500 || error.status === 405 || error.status === 403) {
      const toastConfig = {
        title: error.error.error,
        body: error.error.statusText,
        type: 'error'
      };
      this.toastService.newToast(toastConfig);
      return throwError(error);
    } else {
      return [{status: error.status, error: error.error.error, statusText: error.error.statusText}];
    }
  }

  headers(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return httpOptions;
  }
}
