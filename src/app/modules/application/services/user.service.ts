import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {WindowService} from './window.service';
import {ApiService} from './api.service';
import {ToastService} from './toast.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private objectSource = new BehaviorSubject('');
  user = this.objectSource.asObservable();
  jwt = new JwtHelperService();

  tokenUuid = '0207e946-52f5-494a-b49d-9ef61b54f907';

  constructor(
    private windowService: WindowService,
    private apiService: ApiService,
    private toastService: ToastService
  ) {
    const token = localStorage.getItem(this.tokenUuid);
    if (token !== 'false') {
      this.objectSource.next(this.jwt.decodeToken(token));
    } else {
      this.objectSource.next(null);
    }
  }

  login(requestBody): any {
    return this.apiService.call('user/login', 'post', requestBody);
  }

  logout(): void {
    this.setToken(false);
    this.windowService.closeAllWindows();
    this.toastService.closeAllToasts();
    const toastConfig = {
      title: 'success',
      body: 'logoutSuccessful',
      autoClose: 2000,
      type: 'success'
    };
    this.toastService.newToast(toastConfig);
  }

  setToken(token: any): void {
    this.objectSource.next(this.jwt.decodeToken(token));
    localStorage.setItem(this.tokenUuid, token);
  }

  getToken(): any {
    const token = localStorage.getItem(this.tokenUuid);
    if (token === 'false') {
      return '';
    }
    return token;
  }
}
