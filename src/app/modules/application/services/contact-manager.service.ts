import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactManagerService {



  private initDataObject = new BehaviorSubject({
    types: {id: 0, name: 'Please wait'},
    categories: {id: 0, name: 'Please wait'},
    groups: {id: 0, name: 'Please wait'},
    status: {id: 0, name: 'Please wait'}
  });
  initData = this.initDataObject.asObservable();

  constructor(
    private apiService: ApiService
  ) {
    this.init();
  }

  init(): void {
    this.apiService.call('contactManager/init', 'post', null).subscribe(data => {
      this.initDataObject.next(data);
    });
  }
  record(record): void {
    const type = record.id === null ? 'post' : 'put';

    this.apiService.call('contactManager/record', type, record).subscribe(data => {
      console.log(data);
    });
  }
}
