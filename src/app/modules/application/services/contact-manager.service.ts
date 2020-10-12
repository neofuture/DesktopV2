import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactManagerService {


  private recordObject = new BehaviorSubject({
    record: undefined,
    totalRecords: 0,
    id: undefined
  });
  record = this.recordObject.asObservable();

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

  setRecord(record): void {
    const type = record.id === null ? 'post' : 'put';

    this.apiService.call('contactManager/setRecord', type, record).subscribe(data => {
      console.log(data);
    });
  }

  getRecord(category, recordIndex): void {
    const requestBody = {
      category,
      recordIndex
    };
    this.apiService.call('contactManager/getRecord', 'post', requestBody).subscribe(record => {
      this.recordObject.next(record);
    });
  }
}
