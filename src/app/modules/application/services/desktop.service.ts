import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {WindowService} from './window.service';
import {blank} from '../config/blank';

@Injectable({
  providedIn: 'root'
})

export class DesktopService {

  private dimensionsObject = new BehaviorSubject({
    height: 0,
    width: 0,
    left: 0,
    top: 0
  });
  dimensions = this.dimensionsObject.asObservable();
  desktopElement: any;

  constructor() {
  }

  setSize(): void {
    this.dimensionsObject.next({
      width: this.desktopElement.nativeElement.offsetWidth,
      height: this.desktopElement.nativeElement.offsetHeight,
      left: this.desktopElement.nativeElement.offsetLeft,
      top: this.desktopElement.nativeElement.offsetTop
    });
  }

}
