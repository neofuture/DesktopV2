import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabbarService {

  autoHideUuid = '289fcbdb-acc4-4538-81be-f0e1fde4dbc5';


  private autoHideObject = new BehaviorSubject(false);
  autoHideList = this.autoHideObject.asObservable();

  constructor() {
    if (localStorage.getItem(this.autoHideUuid) === 'true') {
      this.autoHideObject.next(true);
    } else {
      this.autoHideObject.next(false);
    }
    if (this.autoHideObject.value === true) {
      document.body.classList.add('overlayTabBar');
    }
  }

  updateAutoHide(value: any): void {
    if (value === true) {
      document.body.classList.add('overlayTabBar');
    } else {
      document.body.classList.remove('overlayTabBar');
    }
    this.autoHideObject.next(value);
    localStorage.setItem(this.autoHideUuid, value);
  }
}
