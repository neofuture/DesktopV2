import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  uuid = '28f18fca-7805-456d-bc76-5517dbb9490b';

  runStateModel = {
    multiSelect: false,
    mode: 0
  };

  private systemObject = new BehaviorSubject(this.runStateModel);
  runState = this.systemObject.asObservable();

  private appObject = new BehaviorSubject(JSON.parse(localStorage.getItem(this.uuid)) || {});
  appState = this.appObject.asObservable();

  constructor() {
  }

  set(object): void {
    const newObject = {...this.systemObject.value, ...object};
    this.systemObject.next(newObject);
  }

  setApp(object): void {
    const newObject = {...this.appObject.value, ...object};
    this.appObject.next(newObject);
    localStorage.setItem(this.uuid, JSON.stringify(newObject));
  }

  delete(key): void {
    const object = this.systemObject.value;
    const newObject = {};
    for (const item in object) {
      if (item !== key) {
        newObject[item] = object[item];
      }
    }
    // @ts-ignore
    this.systemObject.next(newObject);
  }

  deleteApp(key): void {
    const object = this.appObject.value;
    const newObject = {};
    for (const item in object) {
      if (item !== key) {
        newObject[item] = object[item];
      }
    }
    this.appObject.next(newObject);
    localStorage.setItem(this.uuid, JSON.stringify(newObject));
  }

}
